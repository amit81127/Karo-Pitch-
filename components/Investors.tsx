"use client";

import { motion } from "framer-motion";

export default function Investors() {
    const logos = Array.from({ length: 12 }, (_, i) => `Venture Fund ${i + 1}`);

    return (
        <section className="relative z-10 w-full bg-background-primary py-24 border-y border-gray-100 overflow-hidden" id="investors">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-6">
                        Meet Investors Looking for the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2 inline-block">Next Big Startup</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Karo Pitch connects founders with a network of angel investors, venture capital firms, and ecosystem leaders looking for promising startups.
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                    {logos.map((logo, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                            whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                            className="bg-white h-24 rounded-xl border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group grayscale"
                        >
                            <span className="font-bold text-gray-400 group-hover:text-primary transition-colors text-center px-2">{logo}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
