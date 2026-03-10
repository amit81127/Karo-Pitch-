"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background-primary z-10" id="home">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 -left-10 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-20"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20"
                />
                <div className="absolute inset-0 bg-[#80808008] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
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
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 w-max mx-auto lg:mx-0 font-semibold text-sm shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            Empowering India's Next Unicorns
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.1] text-dark tracking-tight">
                            Pitch Your Startup to <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">India’s Top Investors</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            Karo Pitch is a platform where founders from across India — especially from Tier-2 and Tier-3 cities — can present their startups to investors and unlock funding opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <button className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-[#5a4cd9] transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-2 group shadow-xl">
                                Apply to Pitch
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 bg-white text-dark text-lg font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
                                Explore Startups
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Floating Content */}
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
                            className="absolute z-20 w-[95%] sm:w-[85%] max-w-[420px] bg-white/90 rounded-[2rem] p-8 shadow-2xl shadow-primary/10 border border-white/60 backdrop-blur-md"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-white/50 shadow-sm relative overflow-hidden">
                                        <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center z-10 shadow-md">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-dark text-xl">TechNova AI</h3>
                                        <p className="text-sm text-gray-500 font-semibold mt-0.5">B2B SaaS • Pre-Seed</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold shadow-sm">
                                    Trending
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Target Raise</span>
                                    <span className="font-extrabold text-dark text-base">₹1.5Cr</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full w-[65%]"></div>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-primary font-bold">65% Committed</span>
                                    <span className="text-gray-500 font-medium">12 days left</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-dark text-white rounded-2xl font-semibold hover:bg-dark/90 transition-all shadow-xl shadow-dark/10 group flex justify-center flex-row gap-2">
                                View Pitch Deck
                            </button>
                        </motion.div>

                        {/* Accent Card */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-30 top-10 right-0 lg:-right-10 w-64 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl shadow-gray-200 border border-white/60 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm text-dark">Meeting Scheduled</h4>
                                    <p className="text-xs text-gray-500 font-medium mt-0.5">Nexus Ventures • 2 PM</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
