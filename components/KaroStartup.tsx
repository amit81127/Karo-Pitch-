"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";

function CountUp({ to, duration = 2, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: duration, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, to, duration]);

    return (
        <span ref={ref} className="flex">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function KaroStartup() {
    return (
        <section className="relative z-10 w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-gray-100" id="about-us">
            {/* Subtle Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 rounded-full filter blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-red-50 text-[#E11D2E] w-max font-semibold text-sm border border-red-100 mb-2">
                            Our Parent Platform
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
                            Powered by <br className="hidden sm:block" />
                            <span className="text-[#E11D2E]">KaroStartup</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed font-normal">
                            KaroStartup is a startup media platform that shares inspiring founder stories and startup insights across India.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#E11D2E]"></div>
                                <p className="text-gray-700 font-medium">Published thousands of startup stories</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#E11D2E]"></div>
                                <p className="text-gray-700 font-medium">Built a large founder community</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#E11D2E]"></div>
                                <p className="text-gray-700 font-medium">Helped entrepreneurs learn from real journeys</p>
                            </div>
                        </div>

                        <button className="group flex items-center gap-2 text-[#E11D2E] font-bold mt-4 hover:translate-x-2 transition-transform w-fit text-sm">
                            Visit KaroStartup <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Animated Statistics Block */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-[#0F172A] rounded p-8 shadow-xl flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <h4 className="text-5xl font-black text-white mb-2 flex">
                                <CountUp to={5} duration={1.5} suffix="+" />
                            </h4>
                            <p className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors">Years supporting startups</p>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-[#E11D2E] rounded p-6 shadow-xl flex flex-col justify-center items-center text-center h-full group hover:-translate-y-2 transition-transform duration-300">
                                <h4 className="text-4xl font-black text-white mb-1 flex">
                                    <CountUp to={5000} duration={2} suffix="+" />
                                </h4>
                                <p className="text-red-100 font-medium text-sm group-hover:text-white transition-colors">Startup stories</p>
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white border border-gray-200 rounded p-6 shadow-sm flex flex-col justify-center items-center text-center h-full group hover:-translate-y-2 transition-transform duration-300 hover:border-red-200">
                                <h4 className="text-4xl font-black text-[#111827] mb-1 flex group-hover:text-[#E11D2E] transition-colors">
                                    <CountUp to={1} duration={2} suffix="M+" />
                                </h4>
                                <p className="text-gray-500 font-medium text-sm">Community reach</p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
