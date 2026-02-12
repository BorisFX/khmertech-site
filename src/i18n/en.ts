import type { Translations } from './types';

const en: Translations = {
  nav: {
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    cta: 'Get a Free Quote',
  },
  hero: {
    title: 'Payment Integration & AI Solutions for Cambodian Businesses',
    subtitle: 'ABA, Wing, KHQR, WeChat Pay — any payment method, any scale. Plus AI-powered automation to cut costs and boost efficiency.',
    cta: 'Schedule a Free Consultation',
    stats: [
      { value: '9+', label: 'Years Experience' },
      { value: '100%', label: 'Security Focus' },
      { value: '24/7', label: 'Support Available' },
    ],
  },
  services: {
    title: 'Packages for Cambodian Businesses',
    subtitle: 'Clear solutions tailored to your needs — from simple websites to complex FinTech systems',
    localFocus: 'Local market focus, based in Phnom Penh',
    packages: [
      {
        icon: 'globe',
        title: 'Payment Integration',
        subtitle: 'Accept Any Payment Method',
        description: 'Connect your business to ABA, Wing, Pi Pay, KHQR, and more. Start accepting payments in as little as 7 days.',
        timeline: '7–14 days',
        features: [
          'KHQR code payments',
          'ABA PayWay online payments',
          'Wing & Pi Pay mobile wallets',
          'Multi-currency support (USD/KHR)',
          'Real-time transaction dashboard',
          'Daily automated reports',
          'Webhook notifications',
        ],
        highlight: false,
      },
      {
        icon: 'cart',
        title: 'Full Stack Payments + AI',
        subtitle: 'Automate Everything',
        description: 'Multi-channel payment management with AI-powered reconciliation. Built for chains, e-commerce, and growing businesses.',
        timeline: '3–4 weeks',
        features: [
          'All payment integrations included',
          'WeChat Pay cross-border (TenPay Global)',
          'AI-powered auto-reconciliation',
          'Multi-location unified management',
          'Real-time financial dashboard',
          'Automated tax reporting',
          'ERP / accounting system API',
        ],
        highlight: true,
      },
      {
        icon: 'code',
        title: 'Custom FinTech & Blockchain',
        subtitle: 'Enterprise-Grade Development',
        description: 'Payment gateways, smart contracts, settlement engines — for financial institutions, startups, and enterprises.',
        timeline: 'Custom timeline',
        features: [
          'Custom payment gateway development',
          'Blockchain & smart contract integration',
          'High-load transaction architecture',
          'Security audit & penetration testing',
          'NBC compliance consulting',
          'Anti-fraud & risk management',
          '9+ years FinTech & banking experience',
        ],
        highlight: false,
      },
    ],
    popularLabel: 'Most Popular',
    ctaButton: 'Get Free Consultation',
    footer: 'First consultation is always free.',
    footerSuffix: " Let's discuss your project and find the best solution for your business.",
  },
  trust: {
    title: 'Your Technology Partner in Phnom Penh',
    subtitle: 'Why businesses trust me with their digital transformation',
    points: [
      { icon: 'trending', title: 'FinTech Expertise', text: 'Over 9 years building secure, high-volume payment systems. I understand the technology that keeps transactions safe.' },
      { icon: 'shield', title: 'Security First', text: "Your business's and customers' data security is my top priority. I follow best practices for secure development." },
      { icon: 'mappin', title: 'Local Market Focus', text: 'I live in Cambodia and understand the local business landscape and the specific challenges you face.' },
      { icon: 'message', title: 'No-Nonsense Approach', text: 'I provide clear communication and practical solutions without confusing technical jargon.' },
    ],
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '24h', label: 'Average Response Time' },
    ],
  },
  portfolio: {
    title: 'Featured Projects',
    subtitle: 'Recent success stories from Cambodian businesses',
    projects: [
      {
        title: 'Multi-Channel Payment Gateway',
        description: 'Built a unified payment gateway integrating ABA, Wing, Pi Pay, and KHQR for a hotel chain. Real-time reconciliation, multi-currency support (USD/KHR), and AI-powered fraud detection.',
        technologies: ['.NET Core', 'ABA API', 'KHQR', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      },
      {
        title: 'Cross-Border WeChat Pay Integration',
        description: 'Enabled Chinese tourists to pay via WeChat Pay at Cambodian businesses through TenPay Global × Bakong bridge. T+1 settlement to local bank accounts.',
        technologies: ['React', '.NET Core', 'WeChat Pay API', 'Blockchain'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      },
      {
        title: 'AI-Powered Reconciliation System',
        description: 'Automated daily reconciliation across 5 restaurant locations and 4 payment providers. Reduced manual accounting from 3 hours to 5 minutes per day.',
        technologies: ['Python', 'AI/ML', 'Wing API', 'Docker'],
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop',
      },
    ],
    cta: 'Discuss Your Project',
  },
  about: {
    title: 'From Global Finance to Cambodian Growth',
    paragraphs: [
      'My name is <strong>Oleg Matyakubov</strong>. I am a senior software developer with over nine years of experience building enterprise-level financial systems in Europe.',
      "In 2025, I moved to Phnom Penh to apply my expertise to help local businesses and startups thrive in the digital economy. My passion is creating technology that is not only powerful but also reliable and easy to use.",
      "Having worked with major financial institutions, I understand the critical importance of security, performance, and user trust. Now, I bring these enterprise-level standards to Cambodian businesses at affordable rates.",
      'Whether you need a simple website or a complex payment integration, I approach every project with the same commitment to excellence and attention to detail.',
    ],
    cta: "Let's Work Together",
    skills: [
      { name: '.NET / C#', label: 'Core Platform' },
      { name: 'React', label: 'Frontend' },
      { name: 'Blockchain', label: 'Smart Contracts' },
      { name: 'Payment APIs', label: 'ABA / Wing / KHQR' },
    ],
  },
  contact: {
    title: 'Ready to Take Your Business Online?',
    subtitle: "Let's have a chat about your project. The first consultation is always free.",
    form: {
      name: 'Your Name *',
      namePlaceholder: 'John Doe',
      email: 'Email Address *',
      emailPlaceholder: 'john@business.com',
      business: 'Your Business Name',
      businessPlaceholder: 'ABC Company Ltd.',
      message: 'Message *',
      messagePlaceholder: 'Tell me about your project...',
      submit: 'Send Message',
    },
    directContact: 'Direct Contact',
    channels: [
      { type: 'email', label: 'contact@khmertech.dev', href: 'mailto:contact@khmertech.dev' },
      { type: 'telegram', label: '@khmertechdev', href: 'https://t.me/khmertechdev' },
    ],
    office: {
      title: 'Office Location',
      lines: [
        'Based in Phnom Penh, Cambodia',
        'Available for meetings throughout the city',
        'Remote collaboration worldwide',
      ],
    },
    nextSteps: {
      title: 'What Happens Next?',
      steps: [
        "I'll respond within 24 hours",
        "We'll schedule a free consultation",
        "You'll receive a detailed proposal",
        'We start building your success',
      ],
    },
  },
  footer: {
    copyright: '© 2025 khmertech.dev | Your Partner for Digital Growth in Cambodia',
  },
};

export default en;
