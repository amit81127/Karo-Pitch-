"use client";

import { motion } from "framer-motion";
import { Info, Users, MapPin } from "lucide-react";

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
                        className="order-2 lg:order-1 relative h-full min-h-[450px] w-full bg-[#F5F6F8] rounded border border-gray-100 overflow-hidden flex items-center justify-center p-8 shadow-sm group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E11D2E]/5 via-transparent to-[#FF3B3B]/5 pointer-events-none"></div>

                        <div className="relative w-full max-w-[340px] aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-[#E11D2E]/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
                            />

                            <div className="absolute inset-6 bg-white shadow-xl border border-gray-100 flex flex-col items-center justify-center p-8 text-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out z-10 rounded">
                                <div className="w-20 h-20 rounded-full bg-red-50 text-[#E11D2E] mb-6 flex items-center justify-center border border-red-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    <Users className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-black text-[#111827] tracking-tight">KaroStartup Hub</h4>
                                <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide uppercase">Connecting Ecosystem</p>

                                <div className="mt-6 flex gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#E11D2E]/40 animate-pulse"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#E11D2E]/70 animate-pulse" style={{ animationDelay: '200ms' }}></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#E11D2E] animate-pulse" style={{ animationDelay: '400ms' }}></span>
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
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gray-50 text-gray-600 w-max font-semibold text-sm border border-gray-200 shadow-sm rounded">
                            <Info className="w-4 h-4 text-[#E11D2E]" />
                            About The Platform
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.15] tracking-tight">
                            What is <br className="hidden sm:block" />
                            <span className="text-[#E11D2E]">Karo Pitch?</span>
                        </h2>

                        <div className="space-y-6 text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
                            <p>
                                Karo Pitch is an initiative by <strong className="font-extrabold text-[#111827]">KaroStartup</strong>, designed to help early-stage founders across India connect with investors.
                            </p>
                            <div className="flex gap-4 p-4 bg-red-50 border-l-4 border-[#E11D2E] text-gray-700 rounded-r">
                                <MapPin className="w-6 h-6 shrink-0 text-[#E11D2E]" />
                                <p className="m-0 text-base">Thousands of entrepreneurs are building innovative businesses but struggle with visibility and access to capital.</p>
                            </div>
                            <p>
                                Karo Pitch solves this by creating a structured platform where startups can pitch directly to investors through curated pitch events.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
