import { motion } from 'framer-motion';

const BrandAssets = () => {
    return (
        <div className="min-h-screen bg-[#001233]">
            <div className="pt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                >
                    <h1 className="text-4xl font-bold text-[#7CFFE9] mb-8">Brand Assets</h1>
                    <p className="text-xl text-[#7CFFE9]/80">
                        Official XDC Network logos, graphics, and brand guidelines
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default BrandAssets; 