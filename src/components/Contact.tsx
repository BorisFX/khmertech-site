import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - ${formData.business}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABusiness: ${formData.business}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:contact@khmertech.dev?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Take Your Business Online?
            </h2>
            <p className="text-lg text-secondary">
              Let's have a chat about your project. The first consultation is always free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="john@business.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-primary mb-2">
                    Your Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="ABC Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-4 rounded-lg hover:bg-amber-500 transition-all font-semibold flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@khmertech.dev"
                    className="flex items-center text-secondary hover:text-accent transition-colors group"
                  >
                    <Mail className="w-5 h-5 mr-3 text-accent" />
                    <span>contact@khmertech.dev</span>
                  </a>
                  <a
                    href="https://t.me/khmertechdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary hover:text-accent transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-accent" />
                    <span>@khmertechdev</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Office Location
                </h3>
                <p className="text-secondary">
                  Based in Phnom Penh, Cambodia<br />
                  Available for meetings throughout the city<br />
                  Remote collaboration worldwide
                </p>
              </div>

              <div className="bg-bg-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  What Happens Next?
                </h3>
                <ol className="space-y-2 text-secondary">
                  <li className="flex">
                    <span className="text-accent font-semibold mr-2">1.</span>
                    I'll respond within 24 hours
                  </li>
                  <li className="flex">
                    <span className="text-accent font-semibold mr-2">2.</span>
                    We'll schedule a free consultation
                  </li>
                  <li className="flex">
                    <span className="text-accent font-semibold mr-2">3.</span>
                    You'll receive a detailed proposal
                  </li>
                  <li className="flex">
                    <span className="text-accent font-semibold mr-2">4.</span>
                    We start building your success
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;