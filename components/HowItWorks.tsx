"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, Video, TrendingUp } from "lucide-react";

const steps = [
    {
        id: "1",
        title: "Apply with your pitch deck",
        desc: "Submit your startup details and pitch deck through the Karo Pitch platform.",
        icon: <Send className="w-8 h-8 text-[#E11D2E] relative z-10" />,
    },
    {
        id: "2",
        title: "Get shortlisted by KaroStartup",
        desc: "Our team reviews applications and selects the most promising startups.",
        icon: <CheckCircle className="w-8 h-8 text-[#E11D2E] relative z-10" />,
    },
    {
        id: "3",
        title: "Pitch live to investors",
        desc: "Shortlisted founders present their startups directly to investors.",
        icon: <Video className="w-8 h-8 text-[#E11D2E] relative z-10" />,
    },
    {
        id: "4",
        title: "Raise funding and scale",
        desc: "Connect with investors, secure funding, and grow your business.",
        icon: <TrendingUp className="w-8 h-8 text-[#FF3B3B] relative z-10" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
    return (
        <section className="relative w-full bg-[#F5F6F8] py-24 lg:py-32 overflow-hidden" id="how-it-works">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        A structured platform where startups can pitch directly to investors.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Animated Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 border-t border-dashed border-gray-300">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                            className="absolute top-[-1px] left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E11D2E] to-transparent origin-left"
                        ></motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10"
                    >
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`w-28 h-28 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 relative transition-colors duration-300 group-hover:border-red-200 group-hover:shadow-red-500/10 cursor-pointer`}
                                >
                                    <div className={`absolute inset-3 bg-red-50 rounded group-hover:bg-red-100 transition-colors`}></div>
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: [-10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded bg-[#111827] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm transition-colors group-hover:bg-[#E11D2E]`}>
                                        {step.id}
                                    </div>
                                </motion.div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3 transition-colors group-hover:text-[#E11D2E]">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
