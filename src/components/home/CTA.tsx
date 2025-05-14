import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Get Started with XDC Network?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the growing ecosystem of developers, enterprises, and users building the future of global trade and finance on XDC Network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">Start Building</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;