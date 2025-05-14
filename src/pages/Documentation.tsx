import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Code, FileText, Network } from 'lucide-react';

const Documentation = () => {
    const sections = [
        {
            title: 'Documentation',
            path: '/docs',
            icon: <BookOpen className="w-6 h-6" />,
            description: 'Comprehensive guides and references for building on XDC Network. From basic concepts to advanced implementations.',
            tags: ['Technical Docs', 'API Reference', 'SDKs']
        },
        {
            title: 'Subnets',
            path: '/subnets',
            icon: <Network className="w-6 h-6" />,
            description: "Learn about XDC subnets - independent blockchain networks that can be customized for specific use cases while leveraging XDC Network's security.",
            tags: ['Network', 'Scaling', 'Enterprise']
        },
        {
            title: 'Tutorials',
            path: '/tutorials',
            icon: <Code className="w-6 h-6" />,
            description: 'Step-by-step guides to help you build decentralized applications, deploy smart contracts, and integrate with XDC Network.',
            tags: ['Guides', 'Examples', 'Best Practices']
        },
        {
            title: 'Whitepapers',
            path: '/whitepapers',
            icon: <FileText className="w-6 h-6" />,
            description: "Technical papers detailing XDC Network's architecture, consensus mechanism, and innovative solutions for enterprise blockchain adoption.",
            tags: ['Research', 'Technical', 'Architecture']
        }
    ];

    return (
        <div className="min-h-screen bg-[#001233]">
            <div className="pt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"
                >
                    <div className="mb-12">
                        <h1 className="mb-4 text-4xl font-bold text-[#7CFFE9] sm:text-5xl">
                            Developer Resources
                        </h1>
                        <p className="text-xl text-[#7CFFE9]/80">
                            Everything you need to build and scale on XDC Network
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-white/5 rounded-lg border border-[#7CFFE9]/10 hover:border-[#7CFFE9]/30 transition-colors"
                            >
                                <Link to={section.path} className="block">
                                    <div className="flex items-start">
                                        <div className="p-3 mr-4 bg-[#7CFFE9]/10 rounded-lg text-[#7CFFE9]">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h2 className="mb-2 text-2xl font-semibold text-[#7CFFE9]">
                                                {section.title}
                                            </h2>
                                            <p className="mb-4 text-[#7CFFE9]/70">
                                                {section.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {section.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-sm text-[#7CFFE9] bg-[#7CFFE9]/10 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Documentation; 