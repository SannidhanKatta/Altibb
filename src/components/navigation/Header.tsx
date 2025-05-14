import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import { mainNavItems } from '../../data/navigation';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { NavItem } from '../../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setMobileSubmenu(null);
    }
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const handleMobileSubmenu = (label: string) => {
    setMobileSubmenu(label);
  };

  const handleBackClick = () => {
    setMobileSubmenu(null);
  };

  const renderDropdownItems = (items?: NavItem[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="absolute left-0 py-1 mt-2 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  const renderMobileSubmenuContent = (item: NavItem | undefined) => {
    if (!item) return null;

    return (
      <div className="px-4 py-6">
        <div className="mb-8">
          <div className="w-full mb-6">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">{item.label}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <div className="space-y-4">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem.label}
              href={subItem.href}
              className="block text-lg text-gray-900 hover:text-blue-600"
              onClick={() => {
                setIsMenuOpen(false);
                setMobileSubmenu(null);
              }}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-transparent'
        }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">XDC</span>
              <span className="text-2xl font-bold text-gray-800">Network</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>
                {item.subItems && activeDropdown === item.label && renderDropdownItems(item.subItems)}
              </div>
            ))}
            <Button variant="primary">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex justify-center items-center p-2 text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Mobile Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b">
            {mobileSubmenu ? (
              <>
                <button
                  onClick={handleBackClick}
                  className="p-2 text-gray-700 hover:text-blue-600"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-xl font-medium text-gray-900">
                  {mobileSubmenu}
                </h2>
              </>
            ) : (
              <div className="w-full">
                <div className="flex items-center px-4 py-2 rounded-full border border-gray-300">
                  <input
                    type="text"
                    placeholder="Search XDC"
                    className="w-full placeholder-gray-500 text-gray-900 bg-transparent focus:outline-none"
                  />
                  <Menu size={20} className="text-gray-500" />
                </div>
              </div>
            )}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setMobileSubmenu(null);
              }}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="overflow-y-auto h-[calc(100vh-73px)]">
            {!mobileSubmenu ? (
              // Main Menu
              <div className="px-4 py-6 space-y-6">
                {mainNavItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => handleMobileSubmenu(item.label)}
                  >
                    <span className="text-xl text-gray-900">{item.label}</span>
                    <ChevronDown size={20} className="text-gray-500" />
                  </button>
                ))}
              </div>
            ) : (
              // Submenu Content
              renderMobileSubmenuContent(mainNavItems.find(item => item.label === mobileSubmenu))
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;