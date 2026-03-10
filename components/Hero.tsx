"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, TrendingUp, Handshake } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#F5F6F8] z-10" id="home">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 -left-10 w-[500px] h-[500px] bg-[#E11D2E] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.05]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#FF3B3B] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.05]"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-white text-[#E11D2E] w-max mx-auto lg:mx-0 font-semibold text-sm shadow-sm border-l-4 border-[#E11D2E]">
                            <TrendingUp className="w-4 h-4" />
                            Empowering India's Next Unicorns
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-[#111827]">
                            Pitch Your Startup to <br className="hidden lg:block" />
                            <span className="text-[#E11D2E]">India’s Top Investors</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            Karo Pitch is a platform where founders from across India — especially from Tier-2 and Tier-3 cities — can pitch their startups directly to investors and gain funding opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <button className="px-8 py-4 bg-[#E11D2E] text-white text-lg font-semibold rounded hover:bg-[#FF3B3B] transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/20 flex items-center justify-center gap-2 group shadow-md">
                                Apply to Pitch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white text-[#111827] text-lg font-semibold rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
                                Explore Startups
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Floating Content - Clean Media Style Hero */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[550px] lg:h-[650px] w-full flex items-center justify-center lg:justify-end"
                    >
                        {/* Primary Card */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-20 w-[95%] sm:w-[85%] max-w-[420px] bg-white rounded-xl p-8 shadow-2xl border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 relative overflow-hidden">
                                        <Lightbulb className="w-8 h-8 text-[#E11D2E]" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[#111827] text-xl">BharatInnovate</h3>
                                        <p className="text-sm text-gray-500 font-semibold mt-0.5">AgriTech • Seed</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 bg-green-50 text-green-700 rounded text-xs font-bold border border-green-100">
                                    Trending
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Target Raise</span>
                                    <span className="font-extrabold text-[#111827] text-base">₹2.0Cr</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div className="bg-[#E11D2E] h-full rounded-full w-[80%]"></div>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-[#E11D2E] font-bold">80% Committed</span>
                                    <span className="text-gray-500 font-medium">5 days left</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-[#0F172A] text-white rounded font-semibold hover:bg-gray-800 transition-all shadow-md group flex justify-center flex-row gap-2 items-center text-sm">
                                Join Sync Presentation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Accent Card */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-30 top-20 right-0 lg:-right-10 w-64 bg-white rounded-xl p-5 shadow-xl border border-gray-100 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center border border-blue-100">
                                    <Handshake className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-[#111827]">New Investor Match</h4>
                                    <p className="text-xs text-gray-500 font-medium mt-0.5">Nexus Venture P.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
