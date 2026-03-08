const terminal = document.getElementById('terminal');
const terminalLines = [
  '$ superwizard --mode autopilot',
  '> scanning full page context...',
  '> parsing DOM, forms, actions, console...',
  '> user goal recognized',
  '> creating reliable action plan',
  '> executing with retries + recovery',
  '> done: user outcome delivered'
];

let tLine = 0;
let tChar = 0;
let tOut = '';

function typeTerminal() {
  if (!terminal) return;
  if (tLine >= terminalLines.length) {
    setTimeout(() => {
      tLine = 0;
      tChar = 0;
      tOut = '';
      terminal.textContent = '';
      typeTerminal();
    }, 1400);
    return;
  }

  const line = terminalLines[tLine];
  if (tChar <= line.length) {
    terminal.textContent = `${tOut}${line.slice(0, tChar)}_`;
    tChar += 1;
    setTimeout(typeTerminal, 28);
    return;
  }

  tOut += `${line}\n`;
  terminal.textContent = tOut;
  tLine += 1;
  tChar = 0;
  setTimeout(typeTerminal, 340);
}

const i18n = {
  en: {
    nav_home: 'Home',
    nav_engine: 'Engine',
    nav_scenarios: 'Scenarios',
    nav_founder: 'Founder',
    nav_launch: 'Launch',
    btn_demo: 'Request demo',
    hero_eyebrow: 'AI Agent for Browser Automation',
    hero_title: 'SuperWizard executes tasks,<br>not just replies',
    hero_lead: 'A browser-native AI agent that reads full page context, understands DOM and console signals, and completes actions step-by-step until outcome.',
    rotator_1: 'Decides',
    rotator_2: 'Acts',
    rotator_3: 'Delivers',
    btn_how: 'See how it works',
    btn_scenarios: 'Interactive scenarios',
    kpi_1_l: 'Automation loops',
    kpi_2_l: 'Context depth',
    kpi_3_l: 'Domains',
    engine_eyebrow: 'Core system',
    engine_title: 'Full context before each action',
    card_1: 'Scans content, forms, actions and current UI state before making a move.',
    card_2: 'Reads errors and warnings to avoid repeating broken steps.',
    card_3: 'Auto-retries with alternative selectors and recovery actions.',
    card_4: 'If user specifies a site, the agent remains on that domain.',
    scenes_eyebrow: 'Use cases',
    scenes_title: 'Scene-based experience, not a plain long page',
    tab_1: 'Research',
    tab_2: 'Shopping',
    tab_3: 'Autopilot',
    story_1_t: 'Deep web analysis',
    story_1_p: 'SuperWizard filters noise, picks useful sources and returns actionable output.',
    story_2_t: 'Smart product flow',
    story_2_p: 'Compares options across the internet and opens relevant product pages.',
    story_3_t: 'Step-by-step automation',
    story_3_p: 'Forms, onboarding, repetitive browser tasks — done with retries and checks.',
    founder_eyebrow: 'Founder',
    founder_title: 'Built by Safiev Marat',
    founder_name: 'Safiev Marat — Founder',
    founder_text_1: 'Founder of AI Lumiere. Building practical AI products with strong execution focus.',
    founder_text_2: 'Leader of Web3 community: Web3 Frens CA.',
    cta_title: 'Ready to launch',
    cta_text: 'A founder-controlled platform: own your logic, quality, roadmap and iteration speed.',
    cta_btn_run: 'Launch SuperWizard',
    cta_btn_top: 'Back to top',
    support_line: 'Powered by AI Lumiere.',
    footer_ai_lumiere: 'AI Lumiere Telegram channel'
  },
  ru: {
    nav_home: 'Главная',
    nav_engine: 'Движок',
    nav_scenarios: 'Сценарии',
    nav_founder: 'Фаундер',
    nav_launch: 'Запуск',
    btn_demo: 'Запросить демо',
    hero_eyebrow: 'AI-агент для автоматизации браузера',
    hero_title: 'SuperWizard делает действия,<br>а не просто отвечает',
    hero_lead: 'Браузерный AI-агент, который читает полный контекст страницы, понимает DOM и сигналы консоли, и доводит задачу до результата шаг за шагом.',
    rotator_1: 'Решает',
    rotator_2: 'Действует',
    rotator_3: 'Доводит',
    btn_how: 'Как это работает',
    btn_scenarios: 'Интерактивные сценарии',
    kpi_1_l: 'Циклы автоматизации',
    kpi_2_l: 'Глубина контекста',
    kpi_3_l: 'Домены',
    engine_eyebrow: 'Ядро системы',
    engine_title: 'Полный контекст перед каждым действием',
    card_1: 'Сканирует контент, формы, кнопки и текущее состояние интерфейса перед действием.',
    card_2: 'Читает ошибки и предупреждения консоли, чтобы не повторять сломанные шаги.',
    card_3: 'Авто-повторы с альтернативными селекторами и recovery-логикой.',
    card_4: 'Если пользователь указал сайт, агент держится только его.',
    scenes_eyebrow: 'Сценарии',
    scenes_title: 'Сценовый опыт, а не простая длинная страница',
    tab_1: 'Исследование',
    tab_2: 'Покупки',
    tab_3: 'Автопилот',
    story_1_t: 'Глубокий интернет-анализ',
    story_1_p: 'SuperWizard фильтрует шум, выбирает полезные источники и дает практичный результат.',
    story_2_t: 'Умный продуктовый поток',
    story_2_p: 'Сравнивает варианты по интернету и открывает релевантные карточки.',
    story_3_t: 'Пошаговая автоматизация',
    story_3_p: 'Формы, онбординг, рутина в браузере — с ретраями и проверками.',
    founder_eyebrow: 'Фаундер',
    founder_title: 'Создано Сафиевым Маратом',
    founder_name: 'Сафиев Марат — фаундер',
    founder_text_1: 'Основатель AI Lumiere. Строит практичные AI-продукты с фокусом на исполнение.',
    founder_text_2: 'Лидер web3 сообщества: Web3 Frens CA.',
    cta_title: 'Готов к запуску',
    cta_text: 'Платформа под контролем фаундера: своя логика, качество, роадмап и скорость итераций.',
    cta_btn_run: 'Запустить SuperWizard',
    cta_btn_top: 'Наверх',
    support_line: 'Powered by AI Lumiere.',
    footer_ai_lumiere: 'Telegram-канал AI Lumiere'
  },
  zh: {
    nav_home: '首页',
    nav_engine: '引擎',
    nav_scenarios: '场景',
    nav_founder: '创始人',
    nav_launch: '启动',
    btn_demo: '申请演示',
    hero_eyebrow: '浏览器自动化 AI 智能体',
    hero_title: 'SuperWizard 执行任务，<br>不只是回复',
    hero_lead: '一个原生浏览器 AI 智能体：读取完整页面上下文，理解 DOM 与控制台信号，并按步骤执行直到结果达成。',
    rotator_1: '决策',
    rotator_2: '执行',
    rotator_3: '交付',
    btn_how: '查看工作方式',
    btn_scenarios: '交互场景',
    kpi_1_l: '自动化循环',
    kpi_2_l: '上下文深度',
    kpi_3_l: '域名范围',
    engine_eyebrow: '核心系统',
    engine_title: '每个动作前先获取完整上下文',
    card_1: '执行前扫描页面内容、表单、按钮和界面状态。',
    card_2: '读取控制台错误与警告，避免重复失败动作。',
    card_3: '失败后自动重试，并切换替代选择器与恢复动作。',
    card_4: '当用户指定站点时，智能体只在该域名内操作。',
    scenes_eyebrow: '使用场景',
    scenes_title: '场景化体验，而不是普通长页',
    tab_1: '研究分析',
    tab_2: '购物比较',
    tab_3: '自动执行',
    story_1_t: '深度网页分析',
    story_1_p: 'SuperWizard 过滤噪音、挑选有效来源并输出可执行结果。',
    story_2_t: '智能商品流程',
    story_2_p: '在全网比较选项并打开最相关商品页面。',
    story_3_t: '分步自动化',
    story_3_p: '表单、注册、重复浏览器任务——通过重试与校验完成。',
    founder_eyebrow: '创始人',
    founder_title: '由 Safiev Marat 打造',
    founder_name: 'Safiev Marat — 创始人',
    founder_text_1: 'AI Lumiere 创始人，专注打造可落地的 AI 产品。',
    founder_text_2: 'Web3 社区 Web3 Frens CA 负责人。',
    cta_title: '准备启动',
    cta_text: '由创始人掌控的平台：逻辑、质量、路线图与迭代速度都可控。',
    cta_btn_run: '启动 SuperWizard',
    cta_btn_top: '返回顶部',
    support_line: 'Powered by AI Lumiere.',
    footer_ai_lumiere: 'AI Lumiere Telegram 频道'
  }
};

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let points = [];

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    points = Array.from({ length: Math.max(34, Math.floor(w / 52)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: 0.6 + Math.random() * 1.6
    }));
  };
  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(160, 196, 255, 0.42)';
      ctx.fill();
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          const alpha = (1 - d / 120) * 0.18;
          ctx.strokeStyle = `rgba(72, 255, 177, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.section-title, .card, .stage, .hero .content, .hero-ui, .cta .content, .kpi, .founder-photo, .founder-card, .tab')
    .forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
}

function initSectionTransitions() {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const navLink = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelectorAll('nav a').forEach((a) => a.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
        const heading = entry.target.querySelector('.animated-headline');
        if (heading) {
          heading.classList.remove('play');
          void heading.offsetWidth;
          heading.classList.add('play');
        }
      }
    });
  }, { threshold: 0.45 });

  document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));
}

function initTilt() {
  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
}

function initTabs() {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const stories = Array.from(document.querySelectorAll('.story'));
  let activeIdx = 0;
  let timer = null;
  const activate = (idx) => {
    activeIdx = idx;
    tabs.forEach((t) => t.classList.remove('active'));
    stories.forEach((s) => s.classList.remove('active'));
    tabs[idx].classList.add('active');
    stories[idx].classList.add('active');
  };

  const startAuto = () => {
    if (!tabs.length) return;
    stopAuto();
    timer = setInterval(() => {
      activate((activeIdx + 1) % tabs.length);
    }, 3200);
  };
  const stopAuto = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      activate(idx);
      startAuto();
    });
  });
  const stage = document.querySelector('.stage');
  if (stage) {
    stage.addEventListener('mouseenter', stopAuto);
    stage.addEventListener('mouseleave', startAuto);
  }
  startAuto();
}

function initScrollButtons() {
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initRotator() {
  const words = Array.from(document.querySelectorAll('.rotator-word'));
  let idx = 0;
  if (!words.length) return;
  setInterval(() => {
    words.forEach((w) => w.classList.remove('active'));
    words[idx].classList.add('active');
    idx = (idx + 1) % words.length;
  }, 1400);
}

function initLanguageSwitch() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
      localStorage.setItem('sw_lang', lang);
    });
  });
  const saved = localStorage.getItem('sw_lang') || 'en';
  applyLanguage(saved);
}

function initScrollProgress() {
  const bar = document.getElementById('progress');
  if (!bar) return;
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = `${p}%`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initTopbarDynamics() {
  const topbar = document.querySelector('.topbar');
  const ring = document.querySelector('.ring');
  if (!topbar) return;

  const onScroll = () => {
    const y = window.scrollY || 0;
    topbar.classList.toggle('scrolled', y > 24);
    if (ring) {
      const drift = Math.min(28, y * 0.03);
      ring.style.transform = `translate(-50%, calc(-50% + ${drift}px))`;
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

typeTerminal();
initParticles();
initReveal();
initSectionTransitions();
initTilt();
initTabs();
initScrollButtons();
initRotator();
initLanguageSwitch();
initScrollProgress();
initTopbarDynamics();
