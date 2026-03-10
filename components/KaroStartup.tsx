"use client";

import { motion } from "framer-motion";

export default function KaroStartup() {
    return (
        <section className="relative z-10 w-full bg-dark text-white py-24 lg:py-32 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 mix-blend-screen filter blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 mix-blend-screen filter blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 text-white w-max font-semibold text-sm border border-white/20 mb-6 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                            Our Parent Platform
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Powered by <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5CE7]">KaroStartup</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
                            KaroStartup is one of India’s leading startup storytelling platforms that shares founder journeys and startup insights.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            Karo Pitch is the next step in supporting founders beyond storytelling by helping them access real investment opportunities.
                        </p>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                            <h4 className="text-5xl font-black text-white mb-2 group-hover:scale-110 transform origin-left transition-transform">5000+</h4>
                            <p className="text-gray-400 font-medium">Startup stories published</p>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 filter blur-xl rounded-full"></div>
                            <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-white mb-2 group-hover:scale-110 transform origin-left transition-transform relative z-10">1M+</h4>
                            <p className="text-gray-400 font-medium relative z-10">Founder community reach</p>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors sm:col-span-2 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-5xl font-black text-white mb-2 group-hover:scale-105 transform origin-left transition-transform">1000+</h4>
                                <p className="text-gray-400 font-medium">Entrepreneurs featured</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
