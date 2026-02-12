import type { Translations } from './types';

const zh: Translations = {
  nav: {
    services: '服务',
    portfolio: '案例',
    about: '关于',
    contact: '联系',
    cta: '免费咨询',
  },
  hero: {
    title: '柬埔寨支付系统集成专家',
    subtitle: '为在柬中资企业提供ABA、Wing、KHQR、Pi Pay支付对接，WeChat Pay跨境收款，AI智能对账——一站式金融科技解决方案。',
    cta: '预约免费咨询',
    stats: [
      { value: '9+', label: '年金融科技经验' },
      { value: 'KHQR', label: '官方标准对接' },
      { value: '24/7', label: '技术支持' },
    ],
  },
  services: {
    title: '支付集成解决方案',
    subtitle: '为中资企业量身定制——从基础收款到完整金融科技系统',
    localFocus: '金边本地团队，熟悉柬埔寨市场',
    packages: [
      {
        icon: 'globe',
        title: '基础支付集成',
        subtitle: '快速接入柬埔寨支付',
        description: '适合餐饮、零售、酒店等需要快速接入本地支付的中资企业。最快7天上线KHQR收款。',
        timeline: '7–14天',
        features: [
          'KHQR二维码收款集成',
          'ABA PayWay在线支付',
          'Wing移动钱包对接',
          'Pi Pay支付接入',
          '中英柬三语收银界面',
          '每日交易报表',
          '微信实时到账通知',
        ],
        highlight: false,
      },
      {
        icon: 'cart',
        title: '全栈支付 + AI对账',
        subtitle: '告别手工对账，降本增效',
        description: '多渠道支付统一管理，AI自动对账，适合连锁门店、电商平台及中等规模企业。',
        timeline: '3–4周',
        features: [
          '包含基础支付集成全部功能',
          'WeChat Pay跨境收款（TenPay Global）',
          'AI智能自动对账系统',
          '多门店统一收款管理',
          '实时财务仪表盘',
          '自动化税务报表',
          'ERP/财务系统API对接',
        ],
        highlight: true,
      },
      {
        icon: 'code',
        title: '定制金融科技方案',
        subtitle: '企业级开发',
        description: '为金融机构、大型企业、Fintech创业公司提供定制化支付网关、清结算系统开发。',
        timeline: '按需定制',
        features: [
          '支付网关定制开发',
          'NBC合规技术咨询',
          '高并发交易系统架构',
          '安全审计与渗透测试',
          '清结算引擎开发',
          '反欺诈与风控系统',
          '9年以上金融系统开发经验',
        ],
        highlight: false,
      },
    ],
    popularLabel: '最受欢迎',
    ctaButton: '免费咨询',
    footer: '首次咨询完全免费。',
    footerSuffix: '让我们一起探讨最适合您业务的支付解决方案。',
  },
  trust: {
    title: '您在金边的支付技术合作伙伴',
    subtitle: '为什么中资企业选择与我们合作',
    points: [
      { icon: 'trending', title: '深耕金融科技', text: '9年以上欧洲银行级支付系统开发经验，精通ABA、Wing、KHQR等柬埔寨本地支付体系，以及WeChat Pay跨境收款。' },
      { icon: 'shield', title: '安全合规', text: '遵循国际金融安全标准，熟悉NBC（柬埔寨国家银行）监管要求，确保您的支付系统安全可靠。' },
      { icon: 'mappin', title: '深耕柬埔寨', text: '常驻金边，深入了解柬埔寨营商环境和中资企业面临的独特挑战，提供本地化技术支持。' },
      { icon: 'message', title: '中文无障碍沟通', text: '支持中文沟通，微信随时联系，理解中国企业的管理方式和业务需求。' },
    ],
    stats: [
      { value: '50+', label: '已交付项目' },
      { value: '100%', label: '客户满意度' },
      { value: '<2h', label: '微信响应时间' },
    ],
  },
  portfolio: {
    title: '成功案例',
    subtitle: '柬埔寨中资企业支付集成实战',
    projects: [
      {
        title: '连锁餐饮KHQR统一收款系统',
        description: '为金边某中餐连锁品牌（5家门店）打通KHQR、ABA、Wing多渠道收款，实现AI自动对账，月均处理交易3000+笔。',
        technologies: ['KHQR', 'ABA API', 'AI对账', 'React'],
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop',
      },
      {
        title: 'WeChat Pay跨境收款集成',
        description: '为旅游服务企业对接WeChat Pay（TenPay Global），中国游客可直接微信扫码支付，资金T+1到账柬埔寨本地银行账户。',
        technologies: ['WeChat Pay', 'TenPay Global', '.NET Core', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      },
      {
        title: '电商平台多支付渠道集成',
        description: '为柬埔寨本地电商平台集成ABA、Wing、Pi Pay、KHQR四大支付渠道，支持USD和KHR双币种，自动汇率换算。',
        technologies: ['Pi Pay API', 'Wing API', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      },
    ],
    cta: '咨询您的项目',
  },
  about: {
    title: '从欧洲金融到柬埔寨支付',
    paragraphs: [
      '我是<strong>Oleg Matyakubov</strong>，拥有9年以上欧洲银行级金融系统开发经验的高级软件工程师。',
      '2025年，我移居金边，专注于帮助在柬中资企业解决支付集成难题。我深知中国企业在海外经营时面临的支付痛点——本地支付渠道对接复杂、对账耗时、合规要求不同。',
      '我曾服务于欧洲多家大型金融机构，深刻理解交易安全、系统性能和数据合规的重要性。现在，我将这些企业级标准带到柬埔寨，以合理的价格为中资企业提供专业支付技术服务。',
      '无论是简单的KHQR收款对接，还是复杂的跨境支付网关开发，我都以同样的专业精神和细致态度对待每一个项目。',
    ],
    cta: '开始合作',
    skills: [
      { name: '9+', label: '年金融科技经验' },
      { name: '50+', label: '已交付项目' },
      { name: '5', label: '支付渠道对接' },
      { name: '99.9%', label: '系统可用率' },
    ],
  },
  contact: {
    title: '准备好升级您的支付系统了吗？',
    subtitle: '让我们聊聊您的需求，首次咨询完全免费。',
    form: {
      name: '您的姓名 *',
      namePlaceholder: '张先生/李女士',
      email: '邮箱地址 *',
      emailPlaceholder: 'zhang@company.com',
      business: '公司名称',
      businessPlaceholder: 'XX（柬埔寨）有限公司',
      message: '项目描述 *',
      messagePlaceholder: '请简单描述您的支付集成需求...',
      submit: '发送消息',
    },
    directContact: '直接联系',
    channels: [
      { type: 'email', label: 'contact@khmertech.dev', href: 'mailto:contact@khmertech.dev' },
      { type: 'telegram', label: '@khmertechdev', href: 'https://t.me/khmertechdev' },
      { type: 'wechat', label: '微信: khmertechdev', href: '#' },
    ],
    office: {
      title: '办公地点',
      lines: [
        '金边，柬埔寨',
        '可预约面谈',
        '支持远程协作',
      ],
    },
    nextSteps: {
      title: '接下来会怎样？',
      steps: [
        '2小时内微信回复',
        '安排免费需求咨询',
        '提供详细方案和报价',
        '开始项目开发',
      ],
    },
  },
  footer: {
    copyright: '© 2025 khmertech.dev | 柬埔寨中资企业支付技术合作伙伴',
  },
};

export default zh;
