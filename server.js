const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const port = process.env.PORT || 3000;
const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
const deepseekBaseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
const deepseekModel = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
const publicDir = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      sendJson(res, 404, { error: 'Not found' });
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (_error) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function mapClientMessages(messages) {
  return messages.map((item) => ({
    role: item.role,
    content: item.content
  }));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, {
      ok: true,
      model: deepseekModel,
      hasApiKey: Boolean(deepseekApiKey)
    });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/game/chat') {
    try {
      const body = await collectBody(req);
      const { messages, stageContext, playerState } = body || {};

      if (!Array.isArray(messages) || messages.length === 0) {
        sendJson(res, 400, { error: 'messages is required' });
        return;
      }

      if (!deepseekApiKey) {
        sendJson(res, 500, { error: '服务器未配置 DEEPSEEK_API_KEY，请先在部署环境中设置。' });
        return;
      }

      const systemPrompt = [
        '你是《AI导演养成游戏》的系统导演 AI“刘备大哥监制版”。',
        '你的任务：以互动叙事 + 导演教学的方式推进游戏。',
        '每次回复必须包含：剧情反馈、导演点评、下一步建议。',
        '优先围绕镜头、构图、光影、节奏、情绪调度来指导玩家。',
        '结合当前关卡目标与玩家历史选择，给出具体可落地的导演建议。',
        '回答使用简体中文，结构清晰，适合前端直接展示。'
      ].join('\n');

      const apiResponse = await fetch(`${deepseekBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${deepseekApiKey}`
        },
        body: JSON.stringify({
          model: deepseekModel,
          temperature: 0.9,
          max_tokens: 900,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'system', content: `游戏上下文: ${JSON.stringify({ stageContext, playerState })}` },
            ...mapClientMessages(messages)
          ]
        })
      });

      if (!apiResponse.ok) {
        const detail = await apiResponse.text();
        sendJson(res, apiResponse.status, { error: 'DeepSeek 调用失败', detail });
        return;
      }

      const data = await apiResponse.json();
      const content = data?.choices?.[0]?.message?.content;

      if (!content) {
        sendJson(res, 502, { error: 'DeepSeek 未返回有效内容' });
        return;
      }

      sendJson(res, 200, { content });
    } catch (error) {
      sendJson(res, 500, {
        error: '服务器处理失败',
        detail: error instanceof Error ? error.message : String(error)
      });
    }
    return;
  }

  if (req.method === 'GET') {
    const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
    const safePath = path.normalize(requestedPath).replace(/^([.][.][\/\\])+/, '');
    const filePath = path.join(publicDir, safePath);

    if (filePath.startsWith(publicDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(res, filePath);
      return;
    }

    serveFile(res, path.join(publicDir, 'index.html'));
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
});

server.listen(port, () => {
  console.log(`AI Director Game server listening on http://localhost:${port}`);
});
