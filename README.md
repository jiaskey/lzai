# AI导演养成游戏

一个可直接部署到服务器上的单页互动游戏：前端提供“AI 导演养成”交互体验，后端用 Node.js 原生 HTTP 服务代理 DeepSeek 接口，避免在浏览器暴露 API Key。

## 功能

- 8 个导演关卡：围绕《赵云·长坂坡七进七出》的镜头、光影、节奏与情绪设计。
- DeepSeek 互动监制：用户提交导演方案后，服务端调用 DeepSeek 返回剧情反馈、导演点评、下一步建议。
- 导演成长系统：记录镜头掌控、情绪张力、叙事连贯、商业卖点。
- 导演手账导出：可将当前关卡与选择导出为 JSON。

## 本地运行

```bash
npm install
cp .env.example .env
# 编辑 .env，填入 DEEPSEEK_API_KEY
npm start
```

打开 `http://localhost:3000` 即可访问前端页面。

## 环境变量

- `PORT`: 服务端端口，默认 `3000`
- `DEEPSEEK_API_KEY`: DeepSeek API Key，必填
- `DEEPSEEK_MODEL`: 默认 `deepseek-chat`
- `DEEPSEEK_BASE_URL`: 默认 `https://api.deepseek.com`

## 服务器部署建议

### 方式一：直接 Node 运行

```bash
npm install --production
PORT=3000 DEEPSEEK_API_KEY=你的key npm start
```

### 方式二：使用 PM2

```bash
npm install --production
pm2 start server.js --name ai-director-game
```

Nginx 可反向代理到 `http://127.0.0.1:3000`。

## 接口说明

- `GET /api/health`: 检查服务状态与 Key 配置情况
- `POST /api/game/chat`: 向 DeepSeek 发起会话

请求示例：

```json
{
  "messages": [
    { "role": "user", "content": "我要让赵云从火海里冲出来" }
  ],
  "stageContext": { "id": 5, "name": "火海·炼狱中的前行" },
  "playerState": {
    "stats": { "镜头掌控": 4 },
    "notes": []
  }
}
```
