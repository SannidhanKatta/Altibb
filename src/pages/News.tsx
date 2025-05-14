import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const News = () => {
    const newsItems = [
        {
            title: 'XDC Weekly May 4 - May 10, 2025',
            image: '/xdc-week.png',
            description: 'Stay updated with the latest developments, partnerships, and achievements in the XDC ecosystem.',
            tags: ['News', 'Weekly Update'],
            date: 'May 10, 2025'
        },
        {
            title: 'XDC Network Announces Major Protocol Upgrade',
            image: '/xdc-week.png',
            description: 'The upcoming protocol upgrade brings enhanced performance, security features, and new capabilities to the network.',
            tags: ['Technology', 'Network Update'],
            date: 'May 8, 2025'
        },
        {
            title: 'New Strategic Partnership Announcement',
            image: '/xdc-week.png',
            description: 'XDC Network partners with leading financial institutions to expand its real-world asset tokenization capabilities.',
            tags: ['Partnership', 'RWA'],
            date: 'May 6, 2025'
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
                            Latest News
                        </h1>
                        <p className="text-xl text-[#7CFFE9]/80">
                            Stay up to date with the latest developments in the XDC ecosystem
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="overflow-hidden bg-white/5 rounded-lg"
                            >
                                <Link to={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <div className="relative">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover w-full aspect-video"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-sm text-[#7CFFE9] bg-[#7CFFE9]/10 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className="mb-3 text-xl font-semibold text-[#7CFFE9] sm:text-2xl">
                                            {item.title}
                                        </h2>

                                        <p className="mb-4 text-[#7CFFE9]/70">
                                            {item.description}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-[#7CFFE9]/50">
                                                {item.date}
                                            </span>
                                            <motion.span
                                                whileHover={{ x: 5 }}
                                                className="flex items-center text-[#7CFFE9] group"
                                            >
                                                Read more
                                                <svg
                                                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14 5L21 12M21 12L14 19M21 12H3"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </motion.span>
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

export default News; 