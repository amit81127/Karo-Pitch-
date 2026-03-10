"use client";

import { motion } from "framer-motion";

export default function Investors() {
    const logos = [
        "Peak XV", "Nexus Ventures", "Sequoia Capital", "Accel", "Elevation", "Matrix Partners",
        "Kalaari Capital", "Blume Ventures", "Lightspeed", "General Catalyst", "Tiger Global", "SoftBank"
    ];
    const duplicatedLogos = [...logos, ...logos]; // Duplicate for infinite scroll effect

    return (
        <section className="relative w-full bg-[#F5F6F8] py-24 border-y border-gray-100 overflow-hidden" id="investors">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
                        Meet Investors Looking for the <br className="hidden md:block" />
                        <span className="text-[#E11D2E] mt-2 inline-block">Next Big Startup</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Karo Pitch connects founders with a network of angel investors, venture capital firms, and ecosystem leaders looking for promising startups.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Scroll Logo Marquee */}
            <div className="relative w-full flex overflow-hidden border-y border-gray-200/50 bg-white py-8 group">
                {/* Left/Right Fade Overlays */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F5F6F8] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F5F6F8] to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex flex-row items-center gap-8 w-max group-hover:[animation-play-state:paused]"
                >
                    {duplicatedLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 h-20 w-48 rounded border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#E11D2E]/30 hover:bg-white transition-all duration-300 grayscale hover:grayscale-0 flex-shrink-0 cursor-pointer"
                        >
                            <span className="font-extrabold text-[#111827]/40 hover:text-[#E11D2E] transition-colors text-center px-2 text-lg tracking-wider uppercase">{logo}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
