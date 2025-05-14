import React from 'react';
import { Briefcase, Truck, Database, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { useCases } from '../../data/home';

const iconMap: Record<string, React.ReactNode> = {
  'briefcase': <Briefcase size={24} />,
  'truck': <Truck size={24} />,
  'database': <Database size={24} />,
};

const UseCases: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-lg text-gray-600">
            Discover how XDC Network is transforming industries with practical blockchain solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div 
              key={useCase.title}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                {iconMap[useCase.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <a 
                href={useCase.link} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;