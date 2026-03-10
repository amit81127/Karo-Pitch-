"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative z-10 w-full bg-white py-24 lg:py-32 border-y border-gray-100 overflow-hidden" id="about">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Visual Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative h-full min-h-[450px] w-full bg-background-primary rounded-[2.5rem] border border-gray-100 overflow-hidden flex items-center justify-center p-8 shadow-sm group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

                        <div className="relative w-full max-w-[340px] aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl"
                            />

                            <div className="absolute inset-6 bg-white/80 rounded-3xl shadow-2xl shadow-primary/10 backdrop-blur-md border border-white flex flex-col items-center justify-center p-8 text-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out z-10">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-[#5a4cd9] mb-6 flex items-center justify-center text-white shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-black text-dark tracking-tight">KaroStartup</h4>
                                <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide uppercase">Connecting Founders</p>

                                <div className="mt-6 flex gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: '200ms' }}></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '400ms' }}></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8"
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 w-max font-semibold text-sm border border-gray-200 shadow-sm">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About The Platform
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.15] tracking-tight">
                            What is <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block mt-2">
                                Karo Pitch?
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
                            <p>
                                Karo Pitch is a startup discovery and investor pitch platform built by <strong className="font-extrabold text-dark">KaroStartup</strong>.
                            </p>
                            <p>
                                Across India, thousands of founders are building innovative businesses — from D2C brands to tech startups — but many lack access to investors and visibility.
                            </p>
                            <p>
                                Karo Pitch bridges this gap by connecting founders with investors through curated pitch events and a discovery platform, empowering founders across Bharat with access to capital, mentorship, and opportunities.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
