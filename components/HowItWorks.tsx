"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "1",
        title: "Apply with your pitch deck",
        desc: "Submit your startup details and pitch deck through the Karo Pitch platform.",
        icon: (
            <svg className="w-8 h-8 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: "2",
        title: "Get shortlisted",
        desc: "Our team reviews applications and selects the most promising startups.",
        icon: (
            <svg className="w-8 h-8 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: "3",
        title: "Pitch live to investors",
        desc: "Shortlisted founders present their startups directly to investors.",
        icon: (
            <svg className="w-8 h-8 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "4",
        title: "Raise funding and scale",
        desc: "Connect with investors, secure funding, and grow your business.",
        icon: (
            <svg className="w-8 h-8 text-accent relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
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
        <section className="relative z-10 w-full bg-background-primary py-24 lg:py-32 overflow-hidden" id="how-it-works">

            {/* Decorative Blur Back */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-6">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Karo Pitch</span> Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        A streamlined, 4-step process designed to take you from a promising idea to a funded startup.
                    </p>
                </div>

                <div className="relative">
                    {/* Subtle Connecting Dashed Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-200 via-primary/30 to-gray-200 border-t border-dashed border-primary/40"></div>

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
                                <div className={`w-24 h-24 rounded-full bg-white border-2 hover:border-${idx === 3 ? 'accent' : 'primary'} border-${idx === 3 ? 'accent/30' : 'primary/20'} shadow-xl shadow-${idx === 3 ? 'accent' : 'primary'}/5 flex items-center justify-center mb-6 relative hover:-translate-y-2 transition-all duration-300`}>
                                    <div className={`absolute inset-2 bg-${idx === 3 ? 'accent' : 'primary'}/5 rounded-full group-hover:bg-${idx === 3 ? 'accent' : 'primary'}/10 transition-colors`}></div>
                                    {step.icon}
                                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${idx === 3 ? 'accent' : 'dark'} text-white text-sm font-bold flex items-center justify-center border-[3px] border-background-primary shadow-sm`}>
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
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
