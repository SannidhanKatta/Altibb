import { motion } from 'framer-motion';

const Enterprise = () => {
    return (
        <div className="pt-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                <h1 className="text-4xl font-bold text-[#7CFFE9] mb-8">Enterprise Solutions</h1>
                <p className="text-xl text-[#7CFFE9]/80">
                    Secure, scalable blockchain infrastructure for enterprise applications
                </p>
            </motion.div>
        </div>
    );
};

export default Enterprise; 