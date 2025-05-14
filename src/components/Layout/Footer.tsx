import { Link } from 'react-router-dom';

const footerNavigation = {
    about: [
        { name: 'History', href: '/history' },
        { name: 'Disclaimer & Terms of Use', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
    ],
    resources: [
        { name: 'Brand Assets', href: '/brand-assets' },
        { name: 'Get in touch', href: '/contact' },
        { name: 'Project PR Support', href: '/pr-support' },
    ],
    use: [
        { name: 'Ecosystem', href: '/ecosystem' },
        { name: 'XDC.dev', href: 'https://xdc.dev' },
        { name: 'XDC Network Forum', href: '/forum' },
    ],
    social: [
        { name: 'LinkedIn', href: '#', icon: 'linkedin' },
        { name: 'YouTube', href: '#', icon: 'youtube' },
        { name: 'X', href: '#', icon: 'twitter' },
        { name: 'GitHub', href: '#', icon: 'github' },
        { name: 'Spotify', href: '#', icon: 'spotify' },
        { name: 'iHeart', href: '#', icon: 'iheart' },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">About XDC</h3>
                        <ul className="mt-4 space-y-4">
                            {footerNavigation.about.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
                        <ul className="mt-4 space-y-4">
                            {footerNavigation.resources.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Use XDC</h3>
                        <ul className="mt-4 space-y-4">
                            {footerNavigation.use.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Stay tuned on</h3>
                        <div className="mt-4 flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <i className={`fab fa-${item.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-gray-400 text-sm text-center">
                        ©{new Date().getFullYear()} XDC Foundation, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 