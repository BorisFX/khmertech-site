export interface Translations {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    stats: { value: string; label: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    localFocus: string;
    packages: {
      title: string;
      subtitle: string;
      description: string;
      timeline: string;
      features: string[];
      highlight: boolean;
      icon: 'globe' | 'cart' | 'code';
    }[];
    popularLabel: string;
    ctaButton: string;
    footer: string;
    footerSuffix: string;
  };
  trust: {
    title: string;
    subtitle: string;
    points: { title: string; text: string; icon: 'trending' | 'shield' | 'mappin' | 'message' }[];
    stats: { value: string; label: string }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: {
      title: string;
      description: string;
      technologies: string[];
      image: string;
    }[];
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    cta: string;
    skills: { name: string; label: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      business: string;
      businessPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    directContact: string;
    channels: { type: string; label: string; href: string }[];
    office: {
      title: string;
      lines: string[];
    };
    nextSteps: {
      title: string;
      steps: string[];
    };
  };
  footer: {
    copyright: string;
  };
}
