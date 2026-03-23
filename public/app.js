const stages = [
  {
    id: 1,
    name: '开场·被包围的眼神',
    hook: '刘备：我要看到子龙被围时的杀气！',
    coreQuestion: '用什么视角 + 运镜 + 光影，让曹军小兵看到赵云的第一眼就肝胆俱裂？',
    teachingFocus: '视角 + 运镜 + 光影入门。',
    nextImpact: '决定赵云“被看见”的心理压迫强度，影响拔剑时的紧张感。',
    choices: [
      '低机位仰拍 + 逆光，让赵云像从火场里走出来的战神。',
      '长焦压缩人群，先看见敌军恐惧的脸，再切赵云冷眼。',
      '手持冲近 + 突然定格，制造“杀气扑面”的压迫感。'
    ]
  },
  {
    id: 2,
    name: '拔剑·剑出鞘的决心',
    hook: '刘备：光瞪眼不行，我要看他拔剑那一瞬的寒芒！',
    coreQuestion: '如何保证拔剑动作干物理连贯、不崩脸、不变剑？',
    teachingFocus: '首尾帧接力与动作连续性。',
    nextImpact: '决定长坂坡厮杀的起手势能与动作可信度。',
    choices: [
      '拆成手握剑柄、半出鞘、完全出鞘三个镜头接力。',
      '先给盔甲与手部特写，再切面部，降低 AI 生成崩坏概率。',
      '用金属反光遮罩转场，把拔剑瞬间做成情绪爆点。'
    ]
  },
  {
    id: 3,
    name: '突围·怀中阿斗的重量',
    hook: '刘备：他怀里抱着阿斗，那一刻心里得有多沉？',
    coreQuestion: '用什么镜头语言拍出“使命重于泰山”的孤绝与温柔？',
    teachingFocus: '情绪特写 + 推拉镜。',
    nextImpact: '影响后续战斗中的坚毅层次。',
    choices: [
      '先极近特写孩子的呼吸，再切赵云眼中倒映火光。',
      '缓慢推镜压近赵云面部，让温柔与决绝同时成立。',
      '让环境喧闹声逐渐消失，只剩心跳与马喘。'
    ]
  },
  {
    id: 4,
    name: '血路·千军中的孤胆',
    hook: '刘备：他得抱着孩子继续杀出去！',
    coreQuestion: '用什么运镜 + 构图，让观众感到“人在画中跑，刀枪如林”的临场？',
    teachingFocus: '动态跟拍 + 引导线构图。',
    nextImpact: '决定火海前的疲惫感积累。',
    choices: [
      '横向跟拍赵云穿过枪林，让兵器形成画面引导线。',
      '前景遮挡 + 角色冲出，强化战场密度。',
      '从高处俯拍，突出“一个人劈开万人阵”的孤勇。'
    ]
  },
  {
    id: 5,
    name: '火海·炼狱中的前行',
    hook: '刘备：身后火烧连营，他是怎么杀出火海的？',
    coreQuestion: '如何拍出“烈焰焚天、船如枯叶”的宏大，又不让 AI 崩结构？',
    teachingFocus: '深度引导 + 升降镜 + 扩图套娃。',
    nextImpact: '决定神光救主前的视觉反差。',
    choices: [
      '用中景稳住人物，再逐层扩展火海背景。',
      '让火焰作为前景框架，赵云从缝隙中冲出。',
      '用升降镜头从燃烧残骸抬到赵云身上，拉开史诗感。'
    ]
  },
  {
    id: 6,
    name: '神光·炼狱归来的救主',
    hook: '刘备：他从火海杀出，身上全是血，该给他加什么光？',
    coreQuestion: '用什么光影，让他看起来既像神又像拼尽全力的父之义？',
    teachingFocus: '侧逆光 + 体积光 + 冷暖对比。',
    nextImpact: '决定背影段落的神圣与疲惫对照。',
    choices: [
      '给赵云一束穿烟而来的冷白体积光。',
      '保留火焰暖色做边缘光，人物脸部只给微弱冷补光。',
      '让盔甲和血迹一起反光，形成“神性与伤痕共存”的质感。'
    ]
  },
  {
    id: 7,
    name: '背影·无声的远征',
    hook: '刘备：他还要继续走，前面是未知的汉室复兴……',
    coreQuestion: '用什么构图，让背影成为观众永远忘不掉的一帧？',
    teachingFocus: '对称 + 留白 + 框架构图。',
    nextImpact: '决定最终剪辑的余韵长度。',
    choices: [
      '让赵云处在中央偏下，天地留白压出命运感。',
      '用残垣或寨门形成框架，让背影像走进历史。',
      '以阿斗伏在肩头的轮廓作为情感锚点。'
    ]
  },
  {
    id: 8,
    name: '剪辑·心跳的节奏',
    hook: '刘备：这些镜头有了，但连起来总觉得少了魂……',
    coreQuestion: '你要怎么剪节奏、加转场、配 BGM，让观众的心跟着赵云跳？',
    teachingFocus: '节奏曲线 + 匹配剪 + 情绪 BGM。',
    nextImpact: '决定首映时的情感落点。',
    choices: [
      '前慢后快，拔剑与冲阵用鼓点做切口。',
      '用火光、眼神、兵刃反光做匹配剪，保持气口不断。',
      '最后留 2 秒静音，让背影吞掉所有喧闹。'
    ]
  }
];

const state = {
  stageIndex: 0,
  selectedChoice: '',
  messages: [],
  notes: [],
  stats: {
    镜头掌控: 0,
    情绪张力: 0,
    叙事连贯: 0,
    商业卖点: 0
  }
};

const stageTitle = document.getElementById('stageTitle');
const stageHook = document.getElementById('stageHook');
const coreQuestion = document.getElementById('coreQuestion');
const teachingFocus = document.getElementById('teachingFocus');
const nextImpact = document.getElementById('nextImpact');
const choicesEl = document.getElementById('choices');
const customDirection = document.getElementById('customDirection');
const sendDirectionBtn = document.getElementById('sendDirectionBtn');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const notesEl = document.getElementById('notes');
const statsGrid = document.getElementById('statsGrid');
const prevStageBtn = document.getElementById('prevStageBtn');
const nextStageBtn = document.getElementById('nextStageBtn');
const exportBtn = document.getElementById('exportBtn');
const apiStatus = document.getElementById('apiStatus');

function renderStats() {
  statsGrid.innerHTML = '';
  Object.entries(state.stats).forEach(([label, value]) => {
    const el = document.createElement('div');
    el.className = 'stat-item';
    el.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    statsGrid.appendChild(el);
  });
}

function renderStage() {
  const stage = stages[state.stageIndex];
  stageTitle.textContent = `第 ${stage.id} 关｜${stage.name}`;
  stageHook.textContent = stage.hook;
  coreQuestion.textContent = stage.coreQuestion;
  teachingFocus.textContent = stage.teachingFocus;
  nextImpact.textContent = stage.nextImpact;
  choicesEl.innerHTML = '';

  stage.choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.className = `choice-btn${state.selectedChoice === choice ? ' active' : ''}`;
    btn.textContent = choice;
    btn.addEventListener('click', () => {
      state.selectedChoice = choice;
      boostStats(choice);
      renderStage();
      addSystemMessage(`你锁定了导演方案：${choice}`);
      addNote(stage.name, choice);
    });
    choicesEl.appendChild(btn);
  });

  prevStageBtn.disabled = state.stageIndex === 0;
  nextStageBtn.textContent = state.stageIndex === stages.length - 1 ? '回到开场' : '下一关';
}

function renderMessages() {
  chatMessages.innerHTML = '';
  state.messages.forEach((message) => {
    const div = document.createElement('div');
    div.className = `message ${message.role}`;
    div.textContent = message.content;
    chatMessages.appendChild(div);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderNotes() {
  notesEl.innerHTML = '';
  state.notes.forEach((note) => {
    const div = document.createElement('div');
    div.className = 'note-item';
    div.innerHTML = `<strong>${note.stage}</strong><div>${note.content}</div>`;
    notesEl.appendChild(div);
  });
}

function addSystemMessage(content) {
  state.messages.push({ role: 'system', content });
  renderMessages();
}

function addUserMessage(content) {
  state.messages.push({ role: 'user', content });
  renderMessages();
}

function addAiMessage(content) {
  state.messages.push({ role: 'ai', content });
  renderMessages();
}

function addNote(stage, content) {
  state.notes.unshift({ stage, content });
  state.notes = state.notes.slice(0, 12);
  renderNotes();
}

function boostStats(choice) {
  if (choice.includes('光')) state.stats['镜头掌控'] += 2;
  if (choice.includes('情') || choice.includes('心')) state.stats['情绪张力'] += 2;
  if (choice.includes('剪') || choice.includes('连')) state.stats['叙事连贯'] += 2;
  state.stats['商业卖点'] += 1;
  renderStats();
}

async function sendToAi(userContent) {
  const stage = stages[state.stageIndex];
  addUserMessage(userContent);
  apiStatus.textContent = 'AI 思考中';
  apiStatus.className = 'badge';

  try {
    const response = await fetch('/api/game/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: state.messages
          .filter((item) => item.role === 'user' || item.role === 'ai')
          .map((item) => ({
            role: item.role === 'ai' ? 'assistant' : 'user',
            content: item.content
          })),
        stageContext: stage,
        playerState: {
          stats: state.stats,
          notes: state.notes.slice(0, 5)
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || data.error || 'AI 请求失败');
    }

    addAiMessage(data.content);
    addNote(`${stage.name}｜AI点评`, data.content.split('\n').slice(0, 3).join(' '));
    apiStatus.textContent = 'DeepSeek 在线';
    apiStatus.className = 'badge online';
  } catch (error) {
    const fallback = `当前 AI 接口暂不可用，但你仍可继续设计关卡。\n\n建议：\n1. 检查服务器是否配置 DEEPSEEK_API_KEY。\n2. 确认部署环境允许访问 DeepSeek API。\n3. 先把本关镜头、光影、节奏方案记录到导演手账。\n\n错误信息：${error.message}`;
    addAiMessage(fallback);
    apiStatus.textContent = '接口未连通';
    apiStatus.className = 'badge offline';
  }
}

async function checkApi() {
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    apiStatus.textContent = data.hasApiKey ? `已配置 ${data.model}` : '待配置 DeepSeek Key';
    apiStatus.className = `badge ${data.hasApiKey ? 'online' : 'offline'}`;
  } catch (_error) {
    apiStatus.textContent = '服务离线';
    apiStatus.className = 'badge offline';
  }
}

sendDirectionBtn.addEventListener('click', async () => {
  const stage = stages[state.stageIndex];
  const composed = [state.selectedChoice, customDirection.value.trim()].filter(Boolean).join('\n补充：');

  if (!composed) {
    addSystemMessage('先选择一个导演方案，或输入自由导演指令。');
    return;
  }

  await sendToAi(`当前关卡：${stage.name}\n刘备要求：${stage.hook}\n我的导演方案：${composed}`);
  customDirection.value = '';
});

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const content = chatInput.value.trim();
  if (!content) return;
  await sendToAi(content);
  chatInput.value = '';
});

prevStageBtn.addEventListener('click', () => {
  state.stageIndex = Math.max(0, state.stageIndex - 1);
  state.selectedChoice = '';
  renderStage();
  addSystemMessage(`已切换到上一关：${stages[state.stageIndex].name}`);
});

nextStageBtn.addEventListener('click', () => {
  state.stageIndex = (state.stageIndex + 1) % stages.length;
  state.selectedChoice = '';
  renderStage();
  addSystemMessage(`刘备大哥的新要求来了：${stages[state.stageIndex].hook}`);
});

exportBtn.addEventListener('click', () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    currentStage: stages[state.stageIndex],
    stats: state.stats,
    notes: state.notes
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'director-notebook.json';
  link.click();
  URL.revokeObjectURL(link.href);
});

renderStats();
renderStage();
renderNotes();
addSystemMessage('欢迎来到《赵云·长坂坡》导演修炼场。先选一个镜头策略，再让 AI 监制继续推剧情。');
checkApi();
