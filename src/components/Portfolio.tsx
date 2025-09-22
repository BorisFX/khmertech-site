import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
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
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Recent success stories from Cambodian businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-bg-light text-sm text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center text-accent hover:text-amber-500 font-semibold transition-colors group"
          >
            Discuss Your Project
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;