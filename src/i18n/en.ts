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
    title: 'Secure Websites & Payment Solutions for Cambodian Businesses',
    subtitle: 'From simple online presence to custom FinTech integration, I help you get paid online, reliably and securely.',
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
        title: 'Starter Website',
        subtitle: 'Get Your Business Online',
        description: 'Perfect for restaurants, hotels, clinics, and local shops that need a professional online presence.',
        timeline: '7–10 days',
        features: [
          'Modern one-page or simple multi-page website',
          'Mobile-friendly responsive design',
          'English + Khmer content support',
          'Contact form with email notifications',
          'Call / Telegram / Facebook buttons',
          'Basic SEO setup',
          'Google Maps integration',
        ],
        highlight: false,
      },
      {
        icon: 'cart',
        title: 'Business Automation & Payments',
        subtitle: 'Less Chaos, More Sales',
        description: 'Stop losing orders in messenger chats. Accept payments online and manage bookings in one place.',
        timeline: '2–3 weeks',
        features: [
          'Everything in Starter Website',
          'Online booking / appointment system',
          'ABA PayWay integration',
          'Wing & TrueMoney support',
          'KHQR payments',
          'Simple CRM / order management',
          'Automated notifications',
        ],
        highlight: true,
      },
      {
        icon: 'code',
        title: 'FinTech & Complex Solutions',
        subtitle: 'Enterprise-Grade Development',
        description: 'Custom software for startups, financial institutions, and businesses with complex requirements.',
        timeline: 'Custom timeline',
        features: [
          'Custom .NET development',
          'API integrations',
          'High-load systems architecture',
          'Security consulting & audit',
          'Payment gateway development',
          'Compliance & regulatory support',
          '9+ years FinTech experience',
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
        title: 'Booking & Payment System for Boutique Hotel',
        description: 'Developed a comprehensive booking platform with integrated payment processing for a luxury boutique hotel in Siem Reap. Increased online bookings by 150% within 3 months.',
        technologies: ['WordPress', 'ABA Pay API', 'Custom PHP', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      },
      {
        title: 'Multi-vendor E-commerce Platform',
        description: 'Built a scalable marketplace connecting local artisans with international customers, featuring secure payment processing and inventory management.',
        technologies: ['React', '.NET Core', 'Wing API', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      },
      {
        title: 'Restaurant Chain POS Integration',
        description: 'Integrated modern POS system with online ordering platform for a popular restaurant chain, enabling seamless order management across 5 locations.',
        technologies: ['Node.js', 'Pi Pay API', 'MongoDB', 'Vue.js'],
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
      { name: '.NET', label: 'Core Platform' },
      { name: 'React', label: 'Frontend' },
      { name: 'WordPress', label: 'CMS Expert' },
      { name: 'APIs', label: 'Integration' },
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
