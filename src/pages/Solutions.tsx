import { motion } from 'framer-motion';

const Solutions = () => {
    return (
        <div className="pt-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"
            >
                <h1 className="text-4xl font-bold text-[#7CFFE9] mb-8">Solutions Overview</h1>
                <p className="text-xl text-[#7CFFE9]/80">
                    Comprehensive blockchain solutions for enterprise and trade finance
                </p>
            </motion.div>
        </div>
    );
};

export default Solutions; 