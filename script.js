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
    nav_demos: 'Demos',
    nav_engine: 'Engine',
    nav_scenarios: 'Scenarios',
    nav_founder: 'Founder',
    nav_story: 'Story',
    nav_launch: 'Launch',
    nav_menu: 'Menu',
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
    founder_title: 'Marat Safiyev',
    founder_name: 'Marat Safiyev — Founder &amp; Full-stack Developer',
    founder_bio_intro: 'My name is Marat Safiyev. I am Lezgin, a full-stack developer and founder based in Azerbaijan, with deep expertise in Artificial Intelligence, Web3, and Game Development. At 16, I have already led cross-functional teams and successfully delivered a series of technically complex projects from concept to launch.',
    founder_core_title: 'Core experience',
    founder_exp_ai: '<strong>AI &amp; Automation (AI Lumiere):</strong> As Founder &amp; CEO, I spearhead the development of SuperWizard, an autonomous AI agent designed for web task automation. I have extensive experience building complex LLM-powered Telegram bots and integrating modern stacks (React, Python/Django, Tailwind CSS).',
    founder_exp_web3: '<strong>Web3 &amp; Community (Web3 Frens CA):</strong> Lead of a regional Web3 hub. I have organized industry meetups, authored educational content with a cumulative reach of 25,000+ readers, and coordinated the development of hybrid products at the intersection of blockchain and AI.',
    founder_exp_games: '<strong>Game Development (MATRIXON STD &amp; Soko Inu):</strong> Founded a studio that launched 6 gaming titles on Yandex Games, reaching a combined audience of over 75,000 active players. As Game Director at Soko Inu, I orchestrated the Web3 strategy for &quot;Rise to Riches,&quot; focusing on tokenomics and smart contract integration.',
    founder_hackathons: '<strong>Hackathons:</strong> Participant in 12+ international competitions, including high-profile events like the Google Gemini and Cursor Hackathons.',
    founder_tech_title: 'Technical expertise',
    founder_tech_langs: '<strong>Languages:</strong> JavaScript, TypeScript, Python, C++, C#.',
    founder_tech_stack: '<strong>Technologies:</strong> React, HTML5 &amp; CSS3, Tailwind CSS, Django, Unity, game development &amp; design, Web3/Blockchain infrastructure (TON, Solana), AI integration.',
    founder_tech_soft: '<strong>Soft skills:</strong> End-to-end product management, hackathon team leadership, strategic planning, community management, and public speaking.',
    project_eyebrow: 'Behind the product',
    project_story_title: 'Project story',
    project_story_text_1: 'The project was born during the January Gemini Hackathon when we ran out of time to edit our pitch video due to manual, routine tasks.',
    project_story_text_2: 'This struggle sparked the idea for a Gemini-powered browser extension designed to automate the boring stuff and save people&apos;s time.',
    project_story_text_3: 'Currently, it is an open-source product that I am building and refining independently. I am using this stage to test various hypotheses and features to see what works best for users.',
    project_story_text_4: 'While it&apos;s not an official company yet, the long-term plan is to monetize the platform as it evolves.',
    demos_eyebrow: 'Demos',
    demos_title: 'See SuperWizard in the browser',
    demo_desc_0: 'Research & news: SuperWizard collects and works through live web sources to deliver a concise brief.',
    demo_desc_1: 'Tests & quizzes: the agent builds an interactive check you can run and export right in the browser.',
    demo_desc_2: 'Multi-step flows: the agent fills in what&apos;s missing and drives the task to completion.',
    carousel_prev: 'Previous video',
    carousel_next: 'Next video',
    cta_title: 'Ready to launch',
    cta_text: 'A founder-controlled platform: own your logic, quality, roadmap and iteration speed.',
    cta_btn_run: 'Launch SuperWizard',
    cta_btn_top: 'Back to top',
    support_line: 'Powered by <a href="https://t.me/AILumiere_news" target="_blank" rel="noopener noreferrer">AI Lumiere</a>.',
    cta_stat_1: 'Automated flows',
    cta_stat_2: 'Sources analyzed',
    cta_stat_3: 'Avg. setup time (sec)',
    footer_subtitle: 'Follow SuperWizard on social media',
    footer_contact: 'For questions, email us at <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>'
  },
  ru: {
    nav_home: 'Главная',
    nav_demos: 'Демо',
    nav_engine: 'Движок',
    nav_scenarios: 'Сценарии',
    nav_founder: 'Фаундер',
    nav_story: 'История',
    nav_launch: 'Запуск',
    nav_menu: 'Меню',
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
    founder_title: 'Марат Сафиев',
    founder_name: 'Марат Сафиев — фаундер и full-stack разработчик',
    founder_bio_intro: 'Меня зовут Марат Сафиев. Я лезгин, full-stack разработчик и фаундер из Азербайджана, с глубокой экспертизой в искусственном интеллекте, Web3 и геймдеве. В 16 лет я уже руководил кросс-функциональными командами и успешно доводил до релиза серию технически сложных проектов — от идеи до запуска.',
    founder_core_title: 'Ключевой опыт',
    founder_exp_ai: '<strong>AI и автоматизация (AI Lumiere):</strong> как основатель и CEO веду разработку SuperWizard — автономного AI-агента для автоматизации задач в вебе. Большой опыт в сложных Telegram-ботах на LLM и интеграции современного стека (React, Python/Django, Tailwind CSS).',
    founder_exp_web3: '<strong>Web3 и сообщество (Web3 Frens CA):</strong> лидер регионального Web3-хаба. Организовывал отраслевые митапы, писал образовательный контент с суммарным охватом 25&nbsp;000+ читателей, координировал гибридные продукты на стыке блокчейна и AI.',
    founder_exp_games: '<strong>Геймдев (MATRIXON STD и Soko Inu):</strong> основал студию, выпустившую 6 игр на Yandex Games с суммарной аудиторией 75&nbsp;000+ активных игроков. Как гейм-директор в Soko Inu вёл Web3-стратегию для &quot;Rise to Riches&quot; — токеномика и интеграция смарт-контрактов.',
    founder_hackathons: '<strong>Хакатоны:</strong> участник 12+ международных соревнований, в том числе Google Gemini и Cursor Hackathons.',
    founder_tech_title: 'Техническая экспертиза',
    founder_tech_langs: '<strong>Языки:</strong> JavaScript, TypeScript, Python, C++, C#.',
    founder_tech_stack: '<strong>Технологии:</strong> React, HTML5 и CSS3, Tailwind CSS, Django, Unity, геймдев и геймдизайн, Web3/блокчейн-инфраструктура (TON, Solana), интеграция AI.',
    founder_tech_soft: '<strong>Soft skills:</strong> сквозное продуктовое управление, лидерство в командах на хакатонах, стратегическое планирование, управление комьюнити и публичные выступления.',
    project_eyebrow: 'О продукте',
    project_story_title: 'История проекта',
    project_story_text_1: 'Проект родился во время январского Gemini Hackathon, когда нам не хватило времени смонтировать питч-видео из-за ручных рутинных задач.',
    project_story_text_2: 'Эта проблема стала отправной точкой для идеи браузерного расширения на базе Gemini, которое автоматизирует скучные процессы и экономит людям время.',
    project_story_text_3: 'Сейчас это open-source продукт, который я развиваю и улучшаю самостоятельно. На этом этапе я тестирую разные гипотезы и функции, чтобы понять, что лучше всего работает для пользователей.',
    project_story_text_4: 'Пока это еще не официальная компания, но долгосрочный план - монетизировать платформу по мере развития.',
    demos_eyebrow: 'Демо',
    demos_title: 'SuperWizard в браузере',
    demo_desc_0: 'Исследования и новости: SuperWizard собирает и обрабатывает живые веб-источники и даёт краткий итог.',
    demo_desc_1: 'Тесты и квизы: агент собирает интерактивную проверку, которую можно пройти и экспортировать в браузере.',
    demo_desc_2: 'Многошаговые сценарии: агент закрывает пробелы и доводит задачу до результата.',
    carousel_prev: 'Предыдущее видео',
    carousel_next: 'Следующее видео',
    cta_title: 'Готов к запуску',
    cta_text: 'Платформа под контролем фаундера: своя логика, качество, роадмап и скорость итераций.',
    cta_btn_run: 'Запустить SuperWizard',
    cta_btn_top: 'Наверх',
    support_line: 'При поддержке <a href="https://t.me/AILumiere_news" target="_blank" rel="noopener noreferrer">AI Lumiere</a>.',
    cta_stat_1: 'Автоматизированные флоу',
    cta_stat_2: 'Проанализировано источников',
    cta_stat_3: 'Среднее время запуска (сек)',
    footer_subtitle: 'Следите за SuperWizard в соцсетях',
    footer_contact: 'По вопросам писать: <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>'
  },
  zh: {
    nav_home: '首页',
    nav_demos: '演示',
    nav_engine: '引擎',
    nav_scenarios: '场景',
    nav_founder: '创始人',
    nav_story: '故事',
    nav_launch: '启动',
    nav_menu: '菜单',
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
    founder_title: 'Marat Safiyev',
    founder_name: 'Marat Safiyev — 创始人 &amp; 全栈开发者',
    founder_bio_intro: '我是 Marat Safiyev，列兹金人，来自阿塞拜疆的全栈开发者与创始人，在人工智能、Web3 与游戏开发方面具备深厚经验。16 岁时我已带领跨职能团队，并成功将多个技术复杂的项目从概念推进到上线。',
    founder_core_title: '核心经历',
    founder_exp_ai: '<strong>AI 与自动化（AI Lumiere）：</strong>作为创始人兼 CEO，我主导 SuperWizard 的开发——面向网页任务自动化的自主 AI 智能体。我在构建复杂 LLM Telegram 机器人以及整合现代技术栈（React、Python/Django、Tailwind CSS）方面经验丰富。',
    founder_exp_web3: '<strong>Web3 与社区（Web3 Frens CA）：</strong>区域 Web3 枢纽负责人。我组织行业聚会，撰写教育内容累计触达 25,000+ 读者，并协调区块链与 AI 交叉领域的混合产品开发。',
    founder_exp_games: '<strong>游戏开发（MATRIXON STD 与 Soko Inu）：</strong>创立工作室并在 Yandex Games 上线 6 款游戏，累计活跃玩家超过 75,000。在 Soko Inu 担任游戏总监期间，我为《Rise to Riches》制定 Web3 策略，聚焦代币经济与智能合约整合。',
    founder_hackathons: '<strong>黑客松：</strong>参加 12+ 场国际赛事，包括 Google Gemini 与 Cursor 等知名活动。',
    founder_tech_title: '技术专长',
    founder_tech_langs: '<strong>语言：</strong>JavaScript、TypeScript、Python、C++、C#。',
    founder_tech_stack: '<strong>技术：</strong>React、HTML5 与 CSS3、Tailwind CSS、Django、Unity、游戏开发与游戏设计、Web3/区块链基础设施（TON、Solana）、AI 集成。',
    founder_tech_soft: '<strong>软技能：</strong>端到端产品管理、黑客松团队领导、战略规划、社区运营与公开演讲。',
    project_eyebrow: '产品背后',
    project_story_title: '项目故事',
    project_story_text_1: '这个项目诞生于一月的 Gemini Hackathon。当时我们因为大量手工重复工作，来不及完成路演视频剪辑。',
    project_story_text_2: '这次经历催生了一个想法：打造一个由 Gemini 驱动的浏览器扩展，把枯燥流程自动化，帮用户节省时间。',
    project_story_text_3: '目前它是一个开源产品，由我独立持续构建和打磨。我正在这个阶段测试不同假设和功能，观察哪些最适合用户。',
    project_story_text_4: '它暂时还不是一家正式公司，但长期目标是随着平台演进逐步实现商业化。',
    demos_eyebrow: '演示',
    demos_title: '在浏览器中了解 SuperWizard',
    demo_desc_0: '研究与资讯：SuperWizard 汇总并处理实时网页来源，输出精炼摘要。',
    demo_desc_1: '测验与试卷：智能体在浏览器中生成交互式测验，可作答与导出。',
    demo_desc_2: '多步流程：智能体补全缺失环节，将任务推进到完成。',
    carousel_prev: '上一个视频',
    carousel_next: '下一个视频',
    cta_title: '准备启动',
    cta_text: '由创始人掌控的平台：逻辑、质量、路线图与迭代速度都可控。',
    cta_btn_run: '启动 SuperWizard',
    cta_btn_top: '返回顶部',
    support_line: '由 <a href="https://t.me/AILumiere_news" target="_blank" rel="noopener noreferrer">AI Lumiere</a> 提供支持。',
    cta_stat_1: '自动化流程',
    cta_stat_2: '已分析来源',
    cta_stat_3: '平均启动时间（秒）',
    footer_subtitle: '在社交媒体关注 SuperWizard',
    footer_contact: '如有问题，请发送邮件至 <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>'
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
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  if (prev && dict.carousel_prev) prev.setAttribute('aria-label', dict.carousel_prev);
  if (next && dict.carousel_next) next.setAttribute('aria-label', dict.carousel_next);
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle && dict.nav_menu) navToggle.setAttribute('aria-label', dict.nav_menu);
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

  document.querySelectorAll('.section-title, .card, .stage, .hero .content, .hero-ui, .cta .content, .kpi, .founder-photo, .project-story-card, .tab, .video-carousel, .carousel-viewport, .carousel-desc-wrap')
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

function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.getElementById('nav-backdrop');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    document.querySelector('.topbar')?.classList.toggle('nav-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (backdrop) backdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
  };

  const close = () => setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('is-open'));
  });
  backdrop?.addEventListener('click', close);
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', close);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function initTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
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

function initVideoCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const videos = Array.from(document.querySelectorAll('.carousel-video'));
  const descs = Array.from(document.querySelectorAll('.carousel-desc'));
  const n = videos.length;
  if (!track || !dotsWrap || n === 0 || !prev || !next) return;

  let idx = 0;
  let touchStartX = null;

  function pauseAll() {
    videos.forEach((v) => {
      try {
        v.pause();
      } catch (_) {}
    });
  }

  function updateDots() {
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
      d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
  }

  function updateDescs() {
    descs.forEach((p, i) => p.classList.toggle('active', i === idx));
  }

  function go(i) {
    idx = (i + n) % n;
    track.style.transform = `translateX(-${idx * 100}%)`;
    pauseAll();
    updateDots();
    updateDescs();
  }

  dotsWrap.innerHTML = '';
  for (let i = 0; i < n; i += 1) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `carousel-dot${i === 0 ? ' active' : ''}`;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.setAttribute('aria-label', `Video ${i + 1}`);
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  }

  prev.addEventListener('click', () => go(idx - 1));
  next.addEventListener('click', () => go(idx + 1));

  const viewport = document.querySelector('.carousel-viewport');
  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].screenX - touchStartX;
      touchStartX = null;
      if (dx > 56) go(idx - 1);
      else if (dx < -56) go(idx + 1);
    }, { passive: true });
  }
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

function initCtaDynamics() {
  const cta = document.getElementById('cta');
  if (!cta) return;
  const statEls = Array.from(cta.querySelectorAll('[data-count]'));
  let hasAnimated = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCounter = (el, target) => {
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1300;
    const start = performance.now();
    const from = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(from + (target - from) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || hasAnimated) return;
      hasAnimated = true;
      cta.classList.add('live');
      statEls.forEach((el) => {
        const target = Number(el.dataset.count || 0);
        animateCounter(el, target);
      });
    });
  }, { threshold: 0.35 });
  observer.observe(cta);
}

typeTerminal();
initParticles();
initReveal();
initSectionTransitions();
initNavToggle();
initTilt();
initTabs();
initScrollButtons();
initRotator();
initLanguageSwitch();
initVideoCarousel();
initScrollProgress();
initTopbarDynamics();
initCtaDynamics();
