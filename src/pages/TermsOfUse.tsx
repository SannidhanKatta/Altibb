import { motion } from 'framer-motion';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-[#001233]">
            <div className="pt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"
                >
                    <h1 className="text-4xl font-bold text-[#7CFFE9] mb-8">Disclaimer & Terms of Use</h1>
                    <p className="text-xl text-[#7CFFE9]/80">
                        Important information about using XDC Network services and platforms
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfUse;