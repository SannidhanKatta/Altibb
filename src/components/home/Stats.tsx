import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Container from '../ui/Container';
import { statistics } from '../../data/home';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6">
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 transform transition-all duration-500 ease-out ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.label}</h3>
              <div className="flex items-baseline flex-wrap gap-2">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                {stat.change && (
                  <div
                    className={`flex items-center text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}
                  >
                    {stat.isPositive ? (
                      <ArrowUp size={14} className="mr-0.5" />
                    ) : (
                      <ArrowDown size={14} className="mr-0.5" />
                    )}
                    {stat.change}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;