"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden z-20 w-full text-center group" id="apply">
            {/* Animated Gradient Background */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#E11D2E] via-[#FF3B3B] to-[#b31422] bg-[length:200%_200%]"
            />

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 bg-[#000000] opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

            {/* Floating blurred animated circles map */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#111827] rounded-full filter blur-[120px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"
            />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center w-full"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded text-white text-sm font-semibold shadow-xl">
                        Applications open for upcoming cohorts
                    </div>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                        Ready to Pitch Your <br className="hidden md:block" />
                        Startup?
                    </h2>

                    <p className="text-xl text-red-50 font-medium opacity-90 mb-12 max-w-2xl text-center leading-relaxed">
                        Join founders from across India and present your startup to investors through Karo Pitch. Get the funding and visibility you need.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 relative w-full items-center">

                        {/* Primary Button with pulse glow */}
                        <div className="relative group/btn w-max">
                            <div className="absolute -inset-1 bg-white rounded opacity-20 group-hover/btn:opacity-50 blur-lg transition-opacity duration-500 animate-pulse"></div>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-8 py-4 bg-[#0F172A] text-white text-lg font-bold rounded transition-colors flex justify-center items-center gap-3 shadow-xl z-10 w-full sm:w-auto overflow-hidden group/text"
                            >
                                <span className="relative z-10">Apply Now</span>
                                <ArrowRight className="w-5 h-5 group-hover/text:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/text:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                            </motion.button>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white text-lg font-bold rounded transition-all flex justify-center items-center gap-2 relative overflow-hidden group/outline"
                        >
                            <span className="relative z-10">Partner With Us</span>
                            <MessageSquare className="w-5 h-5 group-hover/outline:-translate-y-1 transition-transform relative z-10" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
