import React from 'react';
import { Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import { footerLinks } from '../../data/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">XDC</span>
              <span className="text-2xl font-bold text-white">Network</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              XDC Network is an enterprise-ready hybrid blockchain that combines the power of public and private blockchains with interoperable smart contracts.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/XDCFoundation" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/xinfin/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/XDC-Community" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://t.me/xinfin" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} XDC Network. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-500 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-white text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;