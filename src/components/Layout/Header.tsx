import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';

const navigation = [
    {
        name: 'Network',
        href: '/network',
        image: '/Network.png',
        description: 'An enterprise-grade Layer 1 blockchain built for everyone',
        items: [
            { name: 'Network Overview', href: '/network' },
            { name: 'Tech Specs', href: '/tech-specs' },
            { name: 'History', href: '/history' },
        ]
    },
    {
        name: 'Solutions',
        href: '/solutions',
        image: '/Solutions.png',
        description: 'Discover how XDC Network can transform your business',
        items: [
            { name: 'Solutions Overview', href: '/solutions' },
            { name: 'RWA Tokenization', href: '/rwa-tokenization' },
            { name: 'Trade Finance', href: '/trade-finance' },
            { name: 'Enterprise', href: '/enterprise' },
        ]
    },
    {
        name: 'Build on XDC',
        href: '/build-on-xdc',
        image: '/BuildOnXDC.png',
        description: 'Start building with powerful tools and resources',
        items: [
            { name: 'Build Overview', href: '/build-on-xdc' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Subnets', href: '/subnets' },
        ]
    },
    {
        name: 'Resources',
        href: '/resources',
        image: '/Resources.png',
        description: 'Everything you need to learn about XDC Network',
        items: [
            { name: 'Resources Overview', href: '/resources' },
            { name: 'Tutorials', href: '/tutorials' },
            { name: 'Whitepapers', href: '/whitepapers' },
            { name: 'Brand Assets', href: '/brand-assets' },
        ]
    },
    {
        name: 'Community',
        href: '/community',
        image: '/Community.png',
        description: 'Join the growing XDC Network community',
        items: [
            { name: 'Community Overview', href: '/community' },
            { name: 'Ecosystem', href: '/ecosystem' },
            { name: 'News & Insights', href: '/news' },
            { name: 'Developer Forum', href: '/forum' },
        ]
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    const handleMobileSubmenu = (name: string) => {
        setMobileSubmenu(name);
    };

    const handleBackClick = () => {
        setMobileSubmenu(null);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-[#001233] text-white">
            <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img
                                className="h-8 w-auto text-[#7CFFE9]"
                                src="/logo.svg"
                                alt="XDC Logo"
                                style={{ width: '95px', height: '34px', color: '#7CFFE9' }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href}
                                    className="px-3 py-2 text-sm font-medium text-[#7CFFE9] hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                                {activeDropdown === item.name && (
                                    <div className="absolute left-0 mt-2 w-[400px] bg-white rounded-lg shadow-xl overflow-hidden">
                                        <div className="p-6">
                                            <div className="flex gap-6">
                                                <div className="w-1/3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                                <div className="w-2/3">
                                                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                                                        {item.name}
                                                    </h3>
                                                    <p className="mb-4 text-sm text-gray-600">
                                                        {item.description}
                                                    </p>
                                                    <div className="space-y-2">
                                                        {item.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.href}
                                                                className="block text-sm text-gray-600 hover:text-[#7CFFE9] transition-colors py-1"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="relative ml-4">
                            <div className="flex items-center border border-[#7CFFE9] rounded-full px-4 py-1.5">
                                <input
                                    type="text"
                                    placeholder="Search XDC"
                                    className="bg-transparent text-sm focus:outline-none text-[#7CFFE9] placeholder-[#7CFFE9] w-32"
                                />
                                <SearchIcon className="h-5 w-5 text-[#7CFFE9] ml-2" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-[#7CFFE9] hover:text-white focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <div className="fixed inset-0 z-50 bg-white">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center px-4 py-4 border-b">
                        {mobileSubmenu ? (
                            <>
                                <button
                                    onClick={handleBackClick}
                                    className="p-2 text-black hover:text-gray-600"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <h2 className="text-xl font-normal text-black">
                                    {mobileSubmenu}
                                </h2>
                            </>
                        ) : (
                            <div className="w-full">
                                <div className="flex items-center px-4 py-2 rounded-full border border-gray-300">
                                    <input
                                        type="text"
                                        placeholder="Search XDC"
                                        className="w-full placeholder-gray-500 text-black bg-transparent focus:outline-none"
                                    />
                                    <SearchIcon className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setMobileSubmenu(null);
                            }}
                            className="p-2 text-black hover:text-gray-600"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="px-4 py-6">
                        {!mobileSubmenu ? (
                            // Main Menu
                            <div className="space-y-6">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        className="flex justify-between items-center w-full text-left"
                                        onClick={() => handleMobileSubmenu(item.name)}
                                    >
                                        <span className="text-xl text-black">{item.name}</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            // Submenu Content
                            <div className="space-y-6">
                                {navigation.find(item => item.name === mobileSubmenu)?.items.map((subItem) => (
                                    <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className="block text-lg text-black hover:text-[#7CFFE9]"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setMobileSubmenu(null);
                                        }}
                                    >
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header; 