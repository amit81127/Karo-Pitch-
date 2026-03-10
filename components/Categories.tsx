"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "D2C Brands",
        desc: "Direct-to-consumer businesses building unique physical products and brands with high growth potential.",
        icon: (
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        title: "Consumer Startups",
        desc: "Companies solving everyday consumer problems through innovative services, apps, or platforms.",
        icon: (
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        title: "MSMEs",
        desc: "Micro, Small, and Medium Enterprises looking to scale operations, digitize, or expand into new markets.",
        icon: (
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: "SaaS Startups",
        desc: "Software-as-a-Service platforms catering to global or local B2B/B2C markets with scalable business models.",
        icon: (
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Manufacturing Businesses",
        desc: "Hardware, equipment, and production-oriented businesses focusing on domestic or export opportunities.",
        icon: (
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "Bharat-focused Startups",
        desc: "Solutions specifically tailored for the next billion internet users in rural and semi-urban India.",
        icon: (
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export default function Categories() {
    return (
        <section className="relative z-10 w-full bg-white py-24 lg:py-32 border-t border-gray-100" id="categories">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                            Startups From All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sectors Welcome</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Founders from Tier-2 and Tier-3 cities building the next generation of businesses for Bharat.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((cat, idx) => {
                        const isAlt = idx % 2 !== 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden flex flex-col hover:shadow-2xl ${isAlt ? 'hover:shadow-accent/10 hover:border-accent/30' : 'hover:shadow-primary/10 hover:border-primary/30'} cursor-pointer`}
                            >
                                <div className={`absolute right-0 top-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 group-hover:scale-[2.5] transition-transform duration-700 ${isAlt ? 'bg-accent/5' : 'bg-primary/5'}`}></div>
                                <div className={`w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 z-10 transition-colors ${isAlt ? 'group-hover:bg-accent/10' : 'group-hover:bg-primary/10'}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3 z-10">{cat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed z-10">{cat.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
