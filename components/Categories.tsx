"use client";

import { motion } from "framer-motion";
import { Package, Smartphone, Briefcase, Code, Factory, Map } from "lucide-react";

const categories = [
    {
        title: "D2C Brands",
        desc: "Direct-to-consumer businesses building unique physical products and brands.",
        icon: <Package className="w-7 h-7 text-[#E11D2E]" />
    },
    {
        title: "Consumer Startups",
        desc: "Companies solving everyday consumer problems through innovative services.",
        icon: <Smartphone className="w-7 h-7 text-[#E11D2E]" />
    },
    {
        title: "MSMEs",
        desc: "Micro, Small, and Medium Enterprises looking to scale and expand.",
        icon: <Briefcase className="w-7 h-7 text-[#E11D2E]" />
    },
    {
        title: "SaaS Startups",
        desc: "Software-as-a-Service platforms catering to global or local B2B/B2C markets.",
        icon: <Code className="w-7 h-7 text-[#E11D2E]" />
    },
    {
        title: "Manufacturing Businesses",
        desc: "Hardware, equipment, and production-oriented businesses focusing on growth.",
        icon: <Factory className="w-7 h-7 text-[#E11D2E]" />
    },
    {
        title: "Bharat-focused Startups",
        desc: "Solutions tailored for the next billion internet users in rural and semi-urban India.",
        icon: <Map className="w-7 h-7 text-[#E11D2E]" />
    }
];

export default function Categories() {
    return (
        <section className="relative z-10 w-full bg-white py-24 lg:py-32 border-t border-gray-100" id="categories">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
                            Who Can Apply?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Startups from all sectors are welcome to apply and pitch to our investor network.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white border border-gray-200 rounded p-8 transition-all duration-300 group relative overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5 cursor-pointer"
                        >
                            <div className="absolute top-0 left-0 w-2 h-0 bg-[#E11D2E] transition-all duration-300 group-hover:h-full"></div>

                            <div className="w-14 h-14 bg-red-50 rounded flex items-center justify-center mb-6 z-10 border border-red-100 group-hover:bg-white group-hover:border-red-200 transition-colors">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#111827] mb-3 z-10">{cat.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed z-10">{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
