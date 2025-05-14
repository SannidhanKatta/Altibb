import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, XIcon } from '@heroicons/react/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BackgroundIllustration from '../components/home/BackgroundIllustration';
import ForestIllustration from '../components/home/ForestIllustration';
import { useEscapeKey } from '../hooks/useEscapeKey';

const Home: React.FC = () => {
  const [showBlockchainInfo, setShowBlockchainInfo] = useState(false);

  const closeModal = useCallback(() => {
    setShowBlockchainInfo(false);
  }, []);

  useEscapeKey(closeModal);

  return (
    <div className="min-h-screen bg-[#001233]">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative justify-center items-center min-h-screen text-white">
        <BackgroundIllustration className="z-0" />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#001233]/80 via-[#001233]/60 to-[#001233]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-7xl font-serif mb-8 text-[#7CFFE9]"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Success Depends on<br />Your Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl mb-12 text-[#7CFFE9]/90"
          >
            Discover a low cost, fast and reliable blockchain built for everyone — a network of possibilities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/build-on-xdc"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-[#7CFFE9] border border-[#7CFFE9] rounded-md hover:bg-[#7CFFE9] hover:text-[#001233] transition-all duration-300"
            >
              Get started with XDC
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with Forest Illustration */}
      <section className="relative z-10 bg-[#001233]">
        <ForestIllustration />
        <div className="relative z-20 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-6 text-4xl sm:text-5xl font-normal text-[#7CFFE9] max-w-5xl text-center leading-tight">
              XDC Network is an enterprise-grade, open-source blockchain protocol
            </h2>
            <p className="text-xl text-[#7CFFE9] opacity-80 max-w-4xl text-center mb-12">
              An EVM-compatible chain with smart contract capabilities, it is uniquely suited to revolutionize, decentralize, and liquify the trade finance industry through the tokenization of real-world assets and financial instruments.
            </p>

            <div className="flex flex-col gap-4 items-center sm:flex-row">
              <Link
                to="/network"
                className="group relative flex items-center px-8 py-3 border border-[#7CFFE9] rounded hover:bg-[#7CFFE9] hover:text-[#001233] transition-all duration-300"
              >
                <motion.span
                  className="text-base font-medium text-[#7CFFE9] group-hover:text-[#001233]"
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore the Network
                </motion.span>
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRightIcon className="w-5 h-5 text-[#7CFFE9] group-hover:text-[#001233] transition-colors" />
                </motion.div>
              </Link>

              <motion.button
                onClick={() => setShowBlockchainInfo(true)}
                className="flex items-center px-6 py-3 transition-opacity group hover:opacity-80"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mr-2 w-6 h-6 border border-[#7CFFE9] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-[#7CFFE9] rounded-full" />
                </motion.div>
                <span className="text-base font-medium text-[#7CFFE9]">
                  WHAT IS A BLOCKCHAIN?
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Blockchain Info Modal */}
        <AnimatePresence>
          {showBlockchainInfo && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-center justify-center"
                onClick={closeModal}
              />
              <div className="fixed inset-0 z-[9999] overflow-y-auto">
                <div className="flex justify-center items-center p-4 min-h-screen">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-[90%] sm:max-w-[440px] md:max-w-[500px] bg-white rounded-xl p-5 sm:p-6 mx-auto"
                  >
                    <div className="relative">
                      <motion.button
                        onClick={closeModal}
                        className="absolute -top-2 -right-2 p-2 text-gray-500 rounded-full transition-colors hover:text-gray-700 hover:bg-gray-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <XIcon className="w-5 h-5" />
                      </motion.button>

                      <h3 className="mb-3 text-xl font-normal text-gray-900 sm:text-2xl sm:mb-4">
                        What is a blockchain?
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        A blockchain is a decentralized network of stored database transactions on a block that is linked through a cryptographically recorded hash of the previous block's transactions.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Solutions Sections */}
        <section className="bg-[#F5F7FA]">
          <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 py-12 lg:flex-row lg:gap-12 sm:py-16 lg:py-24">
              {/* VR Man Illustration on Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:sticky lg:top-24 lg:self-start lg:w-1/3"
              >
                <div className="bg-[#E8EDF3] p-6 sm:p-8 rounded-lg">
                  <img
                    src="/vr-man.png"
                    alt="Enterprise VR Illustration"
                    className="w-full h-auto"
                  />
                  <div className="mt-6 sm:mt-8">
                    <h3 className="mb-2 text-3xl font-normal text-gray-900 sm:text-4xl">Get Started</h3>
                    <p className="font-serif text-xl italic text-gray-900 sm:text-2xl">With XDC</p>
                  </div>
                </div>
              </motion.div>

              {/* Three Sections Container - Stacked Vertically */}
              <div className="flex flex-col gap-12 w-full lg:gap-16 lg:w-2/3">
                {/* Enterprise Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <h2 className="mb-4 text-3xl font-normal text-gray-900 sm:mb-6 sm:text-4xl">
                    Enterprise
                  </h2>
                  <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
                    The XDC Network is a groundbreaking blockchain with impressive speed, scalability, low fees, and military-grade security. Using XDC Network, businesses can improve their record keeping, exchange data and transfer assets more efficiently and more securely.
                  </p>
                  <Link
                    to="/enterprise"
                    className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 transition-all duration-300 sm:px-8 sm:py-4 group hover:bg-gray-50 w-fit"
                  >
                    <span className="text-sm font-medium text-gray-900 sm:text-base">
                      Explore Enterprise Solutions
                    </span>
                    <ArrowRightIcon className="ml-2 w-4 h-4 text-gray-900 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>

                {/* Trade Finance Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <h2 className="mb-4 text-3xl font-normal text-gray-900 sm:mb-6 sm:text-4xl">
                    Trade Finance
                  </h2>
                  <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
                    The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.
                  </p>
                  <Link
                    to="/trade-finance"
                    className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 transition-all duration-300 sm:px-8 sm:py-4 group hover:bg-gray-50 w-fit"
                  >
                    <span className="text-sm font-medium text-gray-900 sm:text-base">
                      Explore Trade Finance
                    </span>
                    <ArrowRightIcon className="ml-2 w-4 h-4 text-gray-900 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>

                {/* Developers & Creators Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <h2 className="mb-4 text-3xl font-normal text-gray-900 sm:mb-6 sm:text-4xl">
                    Developers & Creators
                  </h2>
                  <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
                    The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM tool set, developers can carry their skills from other chains onto the XDC Network.
                  </p>
                  <Link
                    to="/developers"
                    className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 transition-all duration-300 sm:px-8 sm:py-4 group hover:bg-gray-50 w-fit"
                  >
                    <span className="text-sm font-medium text-gray-900 sm:text-base">
                      Start creating with XDC
                    </span>
                    <ArrowRightIcon className="ml-2 w-4 h-4 text-gray-900 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Powered by XDC Section */}
        <section className="py-24 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-normal text-gray-900">
                Powered by XDC
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 justify-items-center items-center md:grid-cols-5">
              {[
                { src: '/Poweredby/1.png', alt: 'TradeTEQ' },
                { src: '/Poweredby/2.png', alt: 'Securitize' },
                { src: '/Poweredby/1.png', alt: 'Plug and Play' },
                { src: '/Poweredby/2.png', alt: 'RWA.xyz' },
                { src: '/Poweredby/1.png', alt: 'Ankr' }
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className="relative group">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain w-full h-auto max-h-12 filter grayscale transition-all duration-300 hover:grayscale-0"
                    />
                    <motion.div
                      className="absolute inset-0 transition-colors duration-300 bg-black/5 group-hover:bg-transparent"
                      whileHover={{ opacity: 0 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RWA Movement Section */}
        <section className="relative bg-[#001F1B] text-white overflow-hidden min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/cover.png"
              alt="XDC Network Cover"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001F1B]/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-12 text-5xl font-normal leading-tight sm:text-6xl">
                  How XDC has proved itself a pioneer in the RWA movement and beyond
                </h2>

                <div className="mb-12 space-y-4">
                  <p className="text-xl text-white/90">XDC Network</p>
                  <p className="text-xl text-white/90">Milestone: 5 Years</p>
                  <p className="text-xl text-white/90">Advancing RWA</p>
                  <p className="text-xl text-white/90">Tokenization</p>
                </div>

                <Link
                  to="/rwa-milestone"
                  className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-medium text-white rounded border-2 transition-colors duration-300 border-white/30 hover:bg-white/10"
                >
                  <span>READ NOW</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Happening Section */}
        <section className="py-12 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between items-start pb-4 mb-8 border-b sm:flex-row sm:items-center sm:mb-16"
            >
              <h2 className="mb-4 text-3xl font-normal text-gray-900 sm:text-4xl sm:mb-0">
                What's Happening
              </h2>
              <div className="text-base text-gray-500 sm:text-xl">
                1/77
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  }
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100 !w-2 !h-2',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#7CFFE9]',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="!pb-12 relative"
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to="/news" className="block group">
                        <div className="overflow-hidden mb-4 rounded-lg sm:mb-6">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src="/xdc-week.png"
                            alt="XDC Weekly"
                            className="w-full aspect-[1.5] object-cover bg-[#001F4D] rounded-lg transform transition-transform"
                          />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-normal text-gray-900 group-hover:text-[#0b111059] transition-colors">
                            XDC Weekly May 4 - May 10, 2025
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs sm:text-sm bg-[#001F4D] text-white rounded">
                              News
                            </span>
                            <span className="px-2 py-1 text-xs sm:text-sm bg-[#001F4D] text-white rounded">
                              Weekly Update
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows - Updated styling */}
                <motion.button
                  whileHover={{ x: -5 }}
                  className="swiper-button-prev !flex !text-[#001F4D] !left-0 !w-10 !h-10 !bg-white/80 hover:!bg-white !rounded-full !shadow-lg !transition-all !z-10"
                ></motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="swiper-button-next !flex !text-[#001F4D] !right-0 !w-10 !h-10 !bg-white/80 hover:!bg-white !rounded-full !shadow-lg !transition-all !z-10"
                ></motion.button>

                {/* Pagination Dots */}
                <div className="swiper-pagination !bottom-0"></div>
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* Blockchain Learning Section */}
        <section className="relative bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] bg-[#001F4D]"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="/download.avif"
                alt="Blockchain Learning"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#001F4D]/10 to-[#001F4D]/80" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 lg:px-16"
            >
              <div className="max-w-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 text-5xl font-normal text-[#1A1A1A]"
                >
                  Blockchain Learning
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-12 text-3xl font-serif italic text-[#1A1A1A] opacity-80"
                >
                  Open for Everyone
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-16 text-lg text-[#1A1A1A] opacity-70 leading-relaxed"
                >
                  Our community encourages collaboration between a diverse range of developers, participants, and stakeholders in the expanding XDC ecosystem.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-8 space-y-6 border-t border-gray-200"
                >
                  <motion.button
                    whileHover={{ x: 10 }}
                    onClick={() => setShowBlockchainInfo(true)}
                    className="flex items-center pb-6 w-full text-left border-b border-gray-200 group"
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg font-normal text-[#1A1A1A] group-hover:text-[#696969] transition-colors">
                        What is a blockchain?
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="transition-transform transform group-hover:translate-x-1"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>

                  <Link
                    to="/network"
                    className="flex items-center pb-6 w-full text-left border-b border-gray-200 group"
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg font-normal text-[#1A1A1A] group-hover:text-[#696969] transition-colors">
                        Explore the Network
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="transition-transform transform group-hover:translate-x-1"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Heard Enough Section */}
        <section className="relative">
          <Link
            to="/build"
            className="block group relative bg-[#F5F7FA] overflow-hidden"
          >
            {/* Background overlay that slides up */}
            <div className="absolute inset-0 bg-[#001233] transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" />

            <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h2 className="text-4xl sm:text-5xl font-normal text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                    Heard enough?
                  </h2>
                  <p className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                    Start building with XDC today
                  </p>
                </div>

                <div className="transition-transform duration-500 transform group-hover:translate-x-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <path
                      d="M14 5L21 12M21 12L14 19M21 12H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;