"use client";

import { motion } from "framer-motion";

const startups = [
    {
        name: "GreenKart",
        category: "D2C Grocery",
        desc: "Farm-fresh groceries sourced directly from local farmers.",
        letter: "G",
        theme: "green",
        gradient: "from-green-400 to-emerald-600",
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-100"
    },
    {
        name: "SkillForge",
        category: "EdTech SaaS",
        desc: "AI-powered learning platform helping students build real-world tech skills.",
        letter: "S",
        theme: "blue",
        gradient: "from-blue-400 to-indigo-600",
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100"
    },
    {
        name: "UrbanMitti",
        category: "D2C Home Decor",
        desc: "Sustainable handmade decor crafted by Indian artisans.",
        letter: "U",
        theme: "amber",
        gradient: "from-amber-400 to-orange-600",
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-100"
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Startups</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover some of the innovative companies that are building for Bharat and beyond.
                        </p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-6 py-2.5 bg-gray-50 text-dark font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors shrink-0 shadow-sm"
                    >
                        View All Startups
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {startups.map((startup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${startup.bg} rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 z-0`}></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${startup.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        <span className="text-3xl font-extrabold">{startup.letter}</span>
                                    </div>
                                    <div className={`px-3 py-1 ${startup.bg} ${startup.text} text-xs font-bold rounded-full border ${startup.border}`}>
                                        {startup.category.split(" ")[0]}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-dark mb-2 transition-colors">
                                    {startup.name}
                                </h3>
                                <p className={`font-medium ${startup.text} text-sm mb-4`}>{startup.category}</p>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {startup.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
