import { Shield, TrendingUp, MapPin, MessageSquare } from 'lucide-react';

const Trust = () => {
  const trustPoints = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'FinTech Expertise',
      text: 'Over 9 years building secure, high-volume payment systems. I understand the technology that keeps transactions safe.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security First',
      text: "Your business's and customers' data security is my top priority. I follow best practices for secure development.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local Market Focus',
      text: 'I live in Cambodia and understand the local business landscape and the specific challenges you face.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'No-Nonsense Approach',
      text: 'I provide clear communication and practical solutions without confusing technical jargon.',
    },
  ];

  return (
    <section id="trust" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Technology Partner in Phnom Penh
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Why businesses trust me with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-accent bg-white p-3 rounded-lg shadow-md">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-secondary">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-secondary">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-secondary">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;