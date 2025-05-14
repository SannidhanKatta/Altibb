import React from 'react';
import { Building, Leaf, Plug, Zap } from 'lucide-react';
import Container from '../ui/Container';
import { features } from '../../data/home';

const iconMap: Record<string, React.ReactNode> = {
  'building': <Building size={24} />,
  'leaf': <Leaf size={24} />,
  'plug': <Plug size={24} />,
  'zap': <Zap size={24} />,
};

const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose XDC Network?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A hybrid blockchain platform that addresses the limitations of traditional
            blockchain solutions for enterprise use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;