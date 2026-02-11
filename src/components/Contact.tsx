import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useI18n } from '../i18n/context';

const Contact = () => {
  const { t } = useI18n();
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

  const channelIcons: Record<string, typeof Mail> = {
    email: Mail,
    telegram: MessageCircle,
    wechat: MessageCircle,
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-secondary">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.business}
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.businessPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-4 rounded-lg hover:bg-amber-500 transition-all font-semibold flex items-center justify-center group"
                >
                  {t.contact.form.submit}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {t.contact.directContact}
                </h3>
                <div className="space-y-4">
                  {t.contact.channels.map((ch, i) => {
                    const Icon = channelIcons[ch.type] || Mail;
                    return (
                      <a
                        key={i}
                        href={ch.href}
                        target={ch.href.startsWith('http') ? '_blank' : undefined}
                        rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center text-secondary hover:text-accent transition-colors group"
                      >
                        <Icon className="w-5 h-5 mr-3 text-accent" />
                        <span>{ch.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {t.contact.office.title}
                </h3>
                <p className="text-secondary">
                  {t.contact.office.lines.map((line, i) => (
                    <span key={i}>{line}{i < t.contact.office.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>

              <div className="bg-bg-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t.contact.nextSteps.title}
                </h3>
                <ol className="space-y-2 text-secondary">
                  {t.contact.nextSteps.steps.map((step, i) => (
                    <li key={i} className="flex">
                      <span className="text-accent font-semibold mr-2">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
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
