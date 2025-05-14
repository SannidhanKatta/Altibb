import { motion } from 'framer-motion';

const Network = () => {
    return (
        <div className="pt-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                <h1 className="text-4xl font-bold text-[#7CFFE9] mb-8">Network Overview</h1>
                <p className="text-xl text-[#7CFFE9]/80">
                    An enterprise-grade Layer 1 blockchain built for everyone
                </p>
            </motion.div>
        </div>
    );
};

export default Network; 