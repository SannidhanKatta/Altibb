import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { newsItems } from '../../data/home';

const News: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest News</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest developments in the XDC ecosystem</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline">View All News</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500 ease-out"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <a href={item.link} className="hover:text-blue-600 transition-colors">
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <a href={item.link} className="text-blue-600 font-medium hover:text-blue-700">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;