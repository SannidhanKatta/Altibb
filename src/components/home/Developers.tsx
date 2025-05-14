import React from 'react';
import { BookOpen, Code, Github, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { developers } from '../../data/home';

const iconMap: Record<string, React.ReactNode> = {
  'book-open': <BookOpen size={24} />,
  'code': <Code size={24} />,
  'github': <Github size={24} />,
  'message-circle': <MessageCircle size={24} />,
};

const Developers: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Decentralized Applications on XDC Network</h2>
            <p className="text-lg text-blue-100 mb-8">
              The XDC Network offers a comprehensive suite of tools and resources for developers to build secure, scalable, and interoperable applications.
            </p>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
              Join Developer Community
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {developers.map((item) => (
                <a 
                  key={item.title}
                  href={item.link}
                  className="bg-blue-700 hover:bg-blue-800 rounded-lg p-6 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Developers;