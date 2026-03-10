"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden z-20 w-full text-center" id="apply">
            {/* Deep Gradient Background with Animation */}
            <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-dark to-dark bg-[length:200%_200%]"
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay z-0"></div>

            {/* Floating blurred animated circles */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full filter blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/40 rounded-full filter blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"
            />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white/90 text-sm font-semibold shadow-2xl">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                        Applications open for upcoming cohorts
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                        Ready to Pitch Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#A180FF]">Startup?</span>
                    </h2>

                    <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join founders from across India and present your startup to investors through Karo Pitch. Get the funding, visibility, and mentorship you need to build the next big thing from India.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-dark hover:bg-gray-100 text-lg font-bold rounded-full transition-colors flex justify-center items-center gap-2"
                        >
                            Apply Now
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 text-lg font-bold rounded-full transition-colors flex justify-center items-center gap-2 group"
                        >
                            Partner With Us
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
