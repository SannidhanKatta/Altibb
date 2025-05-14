import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll value
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-[#7CFFE9] rounded-full shadow-lg cursor-pointer hover:bg-[#7CFFE9]/90 transition-colors hidden md:block"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp className="w-6 h-6 text-[#001233]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default GoToTop; 