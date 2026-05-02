let terminalLines = [];
let tLine = 0;
let tChar = 0;
let tOut = '';
let terminalTimer = null;

function clearTerminalTimers() {
  if (terminalTimer) clearTimeout(terminalTimer);
  terminalTimer = null;
}

function getTerminalLines(lang) {
  const map = {
    en: [
      '$ superwizard studio --status',
      '> lineup: 2 AI products',
      '> hackathons: 4 competitions',
      '> events: first announcement loading…',
      '> ready: build · ship · gather'
    ],
    ru: [
      '$ superwizard studio --status',
      '> в линейке: 2 ИИ-продукта',
      '> хакатоны: 4, где мы участвовали',
      '> мероприятия: скоро анонсируем первый эвент…',
      '> готовы: создавать · запускать · собирать'
    ],
    zh: [
      '$ superwizard studio --status',
      '> 产品：2 款 AI 产品',
      '> 黑客松：参与 4 场',
      '> 活动：首场活动即将公告…',
      '> 模式：构建 · 交付 · 相聚'
    ]
  };
  return map[lang] || map.en;
}

function typeTerminal() {
  const terminal = document.getElementById('terminal');
  if (!terminal) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    terminal.textContent = terminalLines.join('\n');
    return;
  }

  if (tLine >= terminalLines.length) {
    terminalTimer = setTimeout(() => {
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
    terminalTimer = setTimeout(typeTerminal, 28);
    return;
  }

  tOut += `${line}\n`;
  terminal.textContent = tOut;
  tLine += 1;
  tChar = 0;
  terminalTimer = setTimeout(typeTerminal, 340);
}

function restartTerminal(lang) {
  const terminal = document.getElementById('terminal');
  clearTerminalTimers();
  terminalLines = getTerminalLines(lang);
  tLine = 0;
  tChar = 0;
  tOut = '';
  if (terminal) terminal.textContent = '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && terminal) {
    terminal.textContent = terminalLines.join('\n');
    return;
  }
  typeTerminal();
}

const i18n = {
  en: {
    nav_home: 'Home',
    nav_focus: 'Focus',
    nav_founder: 'Founder',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_menu: 'Menu',
    btn_contact: 'Get in touch',
    hero_eyebrow: 'AI studio',
    hero_title: 'SuperWizard builds AI products,<br>shows up at hackathons, runs AI events',
    hero_lead: 'We ship practical AI work, compete and collaborate at hackathons, and host meetups and formats where people learn and build with AI together.',
    rotator_1: 'Build',
    rotator_2: 'Ship',
    rotator_3: 'Gather',
    btn_focus: 'What we do',
    btn_projects: 'Our projects',
    kpi_1_l: 'AI products',
    kpi_1_r: '2',
    kpi_2_l: 'Hackathons',
    kpi_2_r: '4',
    kpi_3_l: 'AI events',
    kpi_3_r: 'Soon',
    focus_eyebrow: 'What we do',
    focus_title: 'Three ways SuperWizard shows up',
    focus_card_1_t: 'AI products',
    focus_card_1_p: '<strong>2 AI products</strong> in our lineup — built end-to-end with a focus on real use.',
    focus_card_2_t: 'Hackathons',
    focus_card_2_p: '<strong>4 hackathons</strong> where we competed — fast prototypes, real deadlines, teams in the arena.',
    focus_card_3_t: 'AI events',
    focus_card_3_p: '<strong>First event — announcement coming soon.</strong> We&apos;ll share dates and format; stay close.',
    founder_eyebrow: 'Founder',
    founder_title: 'Marat Safiyev',
    founder_name: 'Marat Safiyev — Founder',
    founder_bio: 'Founder of SuperWizard. 16 years old. Co-founder of Web3 Frens Central Asia — Web3 &amp; AI media for the region.',
    projects_eyebrow: 'Portfolio',
    projects_title: 'Our Projects',
    project_colearn_name: 'CoLearn',
    project_colearn_tag: 'EdTech',
    project_stonewizard_name: 'StoneWizard',
    project_stonewizard_tag: 'LegalTech',
    cta_title: 'Let&apos;s work together',
    cta_text: 'Reach out for partnerships, event ideas, or AI product conversations.',
    cta_btn_mail: 'Email us',
    cta_btn_top: 'Back to top',
    support_line: 'SuperWizard — AI products, hackathons, and community.',
    cta_stat_1: 'AI products',
    cta_stat_2: 'Hackathons',
    cta_stat_3: 'AI events',
    cta_stat_soon: 'Soon',
    footer_subtitle: 'Follow SuperWizard on social media',
    footer_contact: 'For questions, email us at <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>',
    cl_doc_title: 'CoLearn — AI-powered learning | SuperWizard',
    cl_meta_desc: 'CoLearn reimagines online learning with AI: courses, quizzes, an AI mentor, community, certificates.',
    cl_eyebrow: 'EdTech · by SuperWizard',
    cl_hero_lead: 'A next-generation platform: AI in every lesson, a live community, and recognition for your progress.',
    cl_vision_kicker: 'Product vision',
    cl_vision_hero: 'The future of learning is a personal AI for everyone.',
    cl_vision_sub: 'CoLearn reimagines online learning with AI — so every step fits you.',
    cl_v1_title: 'Courses &amp; quizzes that fit you',
    cl_v1_desc: 'Our <span class="colearn-accent">AI</span> builds courses and quizzes at <span class="colearn-accent">any difficulty</span> — you grow at your pace.',
    cl_v2_title: 'Your AI mentor in every lesson',
    cl_v2_desc: 'A <span class="colearn-accent">personal AI mentor</span> walks with you in <span class="colearn-accent">every lesson</span> — ask, repeat, go deeper.',
    cl_v3_title: 'Community that connects',
    cl_v3_desc: '<span class="colearn-accent">Community</span> and <span class="colearn-accent">educational networking</span> — you never learn alone.',
    cl_v4_title: 'Proof you can share',
    cl_v4_desc: 'Beautiful <span class="colearn-accent">certificates</span> and <span class="colearn-accent">achievements</span> that celebrate real progress.',
    cl_outro_title: 'CoLearn in the SuperWizard ecosystem',
    cl_outro_lead: 'Head back to the home page for other projects and team contacts.',
    cl_btn_home: 'Home',
    cl_btn_mail: 'Contact',
    cl_bar_projects: 'Projects',
    cl_bar_cta: 'Home'
  },
  ru: {
    nav_home: 'Главная',
    nav_focus: 'Фокус',
    nav_founder: 'Фаундер',
    nav_projects: 'Проекты',
    nav_contact: 'Контакт',
    nav_menu: 'Меню',
    btn_contact: 'Связаться',
    hero_eyebrow: 'AI-студия',
    hero_title: 'SuperWizard создаёт ИИ-продукты,<br>участвует в хакатонах и проводит мероприятия про ИИ',
    hero_lead: 'Мы делаем прикладные ИИ-решения, выступаем на хакатонах и организуем встречи и форматы, где можно учиться и собирать проекты вместе с ИИ.',
    rotator_1: 'Создавать',
    rotator_2: 'Запускать',
    rotator_3: 'Собирать',
    btn_focus: 'Чем мы занимаемся',
    btn_projects: 'Наши проекты',
    kpi_1_l: 'ИИ-продукты',
    kpi_1_r: '2',
    kpi_2_l: 'Хакатоны',
    kpi_2_r: '4',
    kpi_3_l: 'ИИ-события',
    kpi_3_r: 'Скоро',
    focus_eyebrow: 'Чем мы занимаемся',
    focus_title: 'Три направления SuperWizard',
    focus_card_1_t: 'ИИ-продукты',
    focus_card_1_p: '<strong>2 ИИ-продукта</strong> в нашей линейке — от идеи до того, чем реально пользуются.',
    focus_card_2_t: 'Хакатоны',
    focus_card_2_p: '<strong>4 хакатона</strong>, где мы принимали участие — прототипы, дедлайны, работа в команде.',
    focus_card_3_t: 'Мероприятия про ИИ',
    focus_card_3_p: '<strong>Скоро анонсируем первый эвент</strong> — даты и формат объявим отдельно, следите за новостями.',
    founder_eyebrow: 'Фаундер',
    founder_title: 'Марат Сафиев',
    founder_name: 'Марат Сафиев — основатель',
    founder_bio: 'Основатель SuperWizard. 16 лет. Сооснователь Web3 Frens Central Asia — медиа про Web3 и ИИ для региона Центральной Азии.',
    projects_eyebrow: 'Портфолио',
    projects_title: 'Наши проекты',
    project_colearn_name: 'CoLearn',
    project_colearn_tag: 'EdTech',
    project_stonewizard_name: 'StoneWizard',
    project_stonewizard_tag: 'LegalTech',
    cta_title: 'Свяжитесь с нами',
    cta_text: 'Партнёрства, идеи для мероприятий или разговор об ИИ-продуктах — напишите нам.',
    cta_btn_mail: 'Написать на почту',
    cta_btn_top: 'Наверх',
    support_line: 'SuperWizard — ИИ-продукты, хакатоны и комьюнити.',
    cta_stat_1: 'ИИ-продукты',
    cta_stat_2: 'Хакатоны',
    cta_stat_3: 'ИИ-мероприятия',
    cta_stat_soon: 'Скоро',
    footer_subtitle: 'Следите за SuperWizard в соцсетях',
    footer_contact: 'По вопросам писать: <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>',
    cl_doc_title: 'CoLearn — онлайн-обучение с ИИ | SuperWizard',
    cl_meta_desc: 'CoLearn переосмысляет онлайн-обучение с ИИ: курсы, тесты, ИИ-ментор, комьюнити и сертификаты.',
    cl_eyebrow: 'EdTech · от SuperWizard',
    cl_hero_lead: 'Платформа нового поколения: ИИ в каждом уроке, живое комьюнити и признание прогресса.',
    cl_vision_kicker: 'Идея продукта',
    cl_vision_hero: 'Будущее обучения — персональный ИИ для каждого.',
    cl_vision_sub: 'CoLearn переосмысляет онлайн-обучение с ИИ — чтобы каждый шаг подстраивался под вас.',
    cl_v1_title: 'Курсы и тесты под вас',
    cl_v1_desc: 'Наш <span class="colearn-accent">ИИ</span> собирает курсы и тесты <span class="colearn-accent">любой сложности</span> — вы растёте в своём темпе.',
    cl_v2_title: 'ИИ-наставник в каждом уроке',
    cl_v2_desc: '<span class="colearn-accent">Персональный ИИ-наставник</span> рядом в <span class="colearn-accent">каждом уроке</span> — спросите, повторите, углубитесь.',
    cl_v3_title: 'Комьюнити, которое связывает',
    cl_v3_desc: '<span class="colearn-accent">Комьюнити</span> и <span class="colearn-accent">образовательный нетворкинг</span> — вы не учитесь в одиночку.',
    cl_v4_title: 'Доказательства, которыми можно поделиться',
    cl_v4_desc: 'Стильные <span class="colearn-accent">сертификаты</span> и <span class="colearn-accent">ачивки</span> — заслуженное признание прогресса.',
    cl_outro_title: 'CoLearn в экосистеме SuperWizard',
    cl_outro_lead: 'Возвращайтесь на главную, чтобы увидеть другие проекты и контакты команды.',
    cl_btn_home: 'На главную',
    cl_btn_mail: 'Связаться',
    cl_bar_projects: 'Проекты',
    cl_bar_cta: 'На главную'
  },
  zh: {
    nav_home: '首页',
    nav_focus: '方向',
    nav_founder: '创始人',
    nav_projects: '项目',
    nav_contact: '联系',
    nav_menu: '菜单',
    btn_contact: '联系',
    hero_eyebrow: 'AI 工作室',
    hero_title: 'SuperWizard 打造 AI 产品，<br>参加黑客松，并举办 AI 主题活动',
    hero_lead: '我们交付实用的 AI 成果，在黑客松中协作与竞赛，并举办聚会与活动，让大家一起学习与实践 AI。',
    rotator_1: '构建',
    rotator_2: '交付',
    rotator_3: '相聚',
    btn_focus: '我们做什么',
    btn_projects: '我们的项目',
    kpi_1_l: 'AI 产品',
    kpi_1_r: '2',
    kpi_2_l: '黑客松',
    kpi_2_r: '4',
    kpi_3_l: 'AI 活动',
    kpi_3_r: '即将',
    focus_eyebrow: '我们做什么',
    focus_title: 'SuperWizard 的三个方向',
    focus_card_1_t: 'AI 产品',
    focus_card_1_p: '产品线中的 <strong>2 款 AI 产品</strong>——从想法到真正可用。',
    focus_card_2_t: '黑客松',
    focus_card_2_p: '我们参与了 <strong>4 场黑客松</strong>——快速原型、真实节奏、团队协作。',
    focus_card_3_t: 'AI 活动',
    focus_card_3_p: '<strong>首场活动即将公告</strong>——时间与形式将另行发布，敬请期待。',
    founder_eyebrow: '创始人',
    founder_title: 'Marat Safiyev',
    founder_name: 'Marat Safiyev — 创始人',
    founder_bio: 'SuperWizard 创始人。16 岁。Web3 Frens Central Asia 联合创始人——面向中亚地区的 Web3 与 AI 媒体。',
    projects_eyebrow: '作品集',
    projects_title: '我们的项目',
    project_colearn_name: 'CoLearn',
    project_colearn_tag: 'EdTech',
    project_stonewizard_name: 'StoneWizard',
    project_stonewizard_tag: 'LegalTech',
    cta_title: '欢迎联系',
    cta_text: '合作、活动创意或 AI 产品交流，欢迎写信。',
    cta_btn_mail: '发送邮件',
    cta_btn_top: '返回顶部',
    support_line: 'SuperWizard — AI 产品、黑客松与社区。',
    cta_stat_1: 'AI 产品',
    cta_stat_2: '黑客松',
    cta_stat_3: 'AI 活动',
    cta_stat_soon: '即将',
    footer_subtitle: '在社交媒体关注 SuperWizard',
    footer_contact: '如有问题，请发送邮件至 <a href="mailto:admin@superwizard.org">admin@superwizard.org</a>',
    cl_doc_title: 'CoLearn — AI 驱动的在线学习 | SuperWizard',
    cl_meta_desc: 'CoLearn 用 AI 重塑在线学习：课程与测验、AI 导师、社群网络与证书成就。',
    cl_eyebrow: 'EdTech · SuperWizard',
    cl_hero_lead: '新一代平台：每节课配备 AI、活跃社群与成长认可。',
    cl_vision_kicker: '产品理念',
    cl_vision_hero: '学习的未来，是每个人都有专属 AI。',
    cl_vision_sub: 'CoLearn 用 AI 重塑在线学习——让每一步都贴合你的节奏。',
    cl_v1_title: '贴合你的课程与测验',
    cl_v1_desc: '<span class="colearn-accent">AI</span> 生成课程与测验，<span class="colearn-accent">难度随心</span>——按你的节奏成长。',
    cl_v2_title: '每节课都有 AI 导师',
    cl_v2_desc: '<span class="colearn-accent">专属 AI 导师</span>贯穿<span class="colearn-accent">每一节课</span>——提问、复盘、深入。',
    cl_v3_title: '连接彼此的社群',
    cl_v3_desc: '<span class="colearn-accent">社群</span>与<span class="colearn-accent">教育社交网络</span>——学习不再孤单。',
    cl_v4_title: '可展示的成就证明',
    cl_v4_desc: '精美的<span class="colearn-accent">证书</span>与<span class="colearn-accent">成就徽章</span>，见证真实进步。',
    cl_outro_title: 'CoLearn 与 SuperWizard 生态',
    cl_outro_lead: '返回首页查看其他项目与团队联系方式。',
    cl_btn_home: '首页',
    cl_btn_mail: '联系',
    cl_bar_projects: '项目',
    cl_bar_cta: '回首页'
  }
};

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  if (dict.cl_doc_title) document.title = dict.cl_doc_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.cl_meta_desc) metaDesc.setAttribute('content', dict.cl_meta_desc);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle && dict.nav_menu) navToggle.setAttribute('aria-label', dict.nav_menu);
  restartTerminal(lang);
}

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let points = [];
  let frame = 0;

  const motionReduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const rm = motionReduce();
    const step = w < 768 ? 44 : 34;
    const n = Math.min(115, Math.max(38, Math.floor(w / step)));
    points = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * (rm ? 0.12 : 0.62),
      vy: (Math.random() - 0.5) * (rm ? 0.12 : 0.62),
      r: 0.45 + Math.random() * 1.9,
      phase: Math.random() * Math.PI * 2
    }));
  };
  resize();
  window.addEventListener('resize', resize);

  const draw = () => {
    const rm = motionReduce();
    frame += 1;
    const t = frame * (rm ? 0 : 0.012);
    const breathe = rm ? 1 : 0.82 + Math.sin(t * 1.1) * 0.18;

    ctx.clearRect(0, 0, w, h);

    const linkMax = w < 768 ? 105 : 148;

    for (const p of points) {
      if (!rm) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -40) p.x = w + 40;
        if (p.x > w + 40) p.x = -40;
        if (p.y < -40) p.y = h + 40;
        if (p.y > h + 40) p.y = -40;
      }

      const tw = rm ? 1 : 0.72 + Math.sin(t + p.phase) * 0.28;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * tw, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 214, 255, ${0.38 * tw})`;
      ctx.fill();
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d >= linkMax) continue;

        const falloff = (1 - d / linkMax);
        const alpha = falloff * 0.32 * breathe * (rm ? 0.55 : 1);
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0, `rgba(72, 255, 177, ${alpha})`);
        g.addColorStop(1, `rgba(58, 163, 255, ${alpha * 0.9})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = rm ? 0.65 : 0.9;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
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
  }, { threshold: 0.12 });

  document.querySelectorAll('.section-title, .card:not(.colearn-vision-item), .hero .content, .hero-ui, .hero-terminal-panel, .cta .content, .kpi, .founder-photo, .founder-card, .project-tile, .our-projects-inner, .colearn-stack, .colearn-outro__inner')
    .forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
}

function initColearnVision() {
  const section = document.querySelector('.colearn-section--vision');
  if (!section) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gridBg = section.querySelector('.colearn-vision__grid-bg');

  if (reduceMotion) section.classList.add('vision-visible');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) section.classList.add('vision-visible');
    });
  }, { threshold: 0.14 });

  io.observe(section);

  if (!parallaxRoot || !gridBg || reduceMotion) return;

  const onScroll = () => {
    const r = section.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const t = 1 - Math.min(1, Math.max(0, (r.top + r.height * 0.35) / vh));
    const y = (t - 0.5) * 28;
    gridBg.style.transform = `translate3d(0, ${y}px, 0)`;
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
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
      card.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
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

initParticles();
initReveal();
initColearnVision();
initSectionTransitions();
initNavToggle();
initTilt();
initScrollButtons();
initRotator();
initLanguageSwitch();
initScrollProgress();
initTopbarDynamics();
initCtaDynamics();
