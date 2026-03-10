"use client";

import { motion } from "framer-motion";

const startups = [
    {
        name: "GreenKart",
        category: "D2C Grocery",
        desc: "Farm-fresh groceries sourced directly from local farmers.",
        letter: "G",
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        iconBg: "bg-green-100"
    },
    {
        name: "SkillForge",
        category: "EdTech SaaS",
        desc: "AI-powered learning platform helping students build real-world tech skills.",
        letter: "S",
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        iconBg: "bg-blue-100"
    },
    {
        name: "UrbanMitti",
        category: "D2C Home Decor",
        desc: "Sustainable handmade decor crafted by Indian artisans.",
        letter: "U",
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        iconBg: "bg-orange-100"
    }
];

export default function Startups() {
    return (
        <section className="relative z-10 w-full bg-white py-24 lg:py-32" id="startups">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
                            Featured <span className="text-[#E11D2E]">Startups</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover some of the innovative companies that are building for Bharat and beyond.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-6 py-2.5 bg-gray-50 text-[#111827] font-semibold rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors shrink-0 shadow-sm relative overflow-hidden group"
                    >
                        <span className="relative z-10">All Startups</span>
                        <div className="absolute inset-0 bg-[#E11D2E]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    </motion.button>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {startups.map((startup, idx) => (
                        <motion.div
                            key={idx}
                            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#E11D2E]/10 transition-all duration-300 cursor-pointer flex flex-col group relative overflow-hidden`}
                        >
                            <div className="flex justify-between items-start mb-6 w-full relative z-10">
                                <div className={`w-14 h-14 ${startup.iconBg} rounded flex items-center justify-center border ${startup.border} group-hover:scale-110 transition-transform duration-300`}>
                                    <span className={`text-2xl font-black ${startup.text}`}>{startup.letter}</span>
                                </div>
                                <div className={`px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded border border-gray-200`}>
                                    {startup.category.split(" ")[0]}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#111827] mb-1 relative z-10 group-hover:text-[#E11D2E] transition-colors">
                                {startup.name}
                            </h3>
                            <p className={`font-semibold ${startup.text} text-sm mb-4 relative z-10`}>{startup.category}</p>

                            <div className="text-gray-500 leading-relaxed text-sm mt-auto border-t border-gray-100 pt-4 relative z-10 flex justify-between items-center group-hover:text-gray-700 transition-colors">
                                <p className="pr-4">{startup.desc}</p>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E11D2E]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Subtle accent border at bottom on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E11D2E] to-[#FF3B3B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
