import { Globe, ShoppingCart, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Professional Web Presence',
      description: 'Get a fast, modern, and mobile-friendly website for your restaurant, hotel, or clinic. Built on the powerful WordPress platform to attract more customers.',
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-commerce & Online Payments',
      description: 'Start selling online. I specialize in integrating secure local payment gateways like ABA Pay, Wing, and Pi Pay into your website, making it easy for customers to buy from you.',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom FinTech Solutions',
      description: 'For startups and complex businesses. I offer custom development on .NET, API integrations, and security consulting based on 9+ years of experience in financial systems.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How I Can Help Your Business Grow
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to Cambodia's business landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;