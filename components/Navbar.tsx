"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
    });

    const navLinks = ["Home", "How It Works", "Startups", "Investors", "About"];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
                    ? "bg-[#0F172A]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
                    : "bg-[#0F172A] border-b border-transparent"
                }`}
        >
            <div className={`container mx-auto px-6 max-w-7xl flex items-center justify-between transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center cursor-pointer">
                        <span className="text-white font-black text-2xl tracking-tighter hover:scale-105 transition-transform origin-left">
                            Karo<span className="text-[#E11D2E]">Pitch</span>
                        </span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E11D2E] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 text-sm font-bold bg-[#E11D2E] text-white rounded hover:bg-[#FF3B3B] transition-colors shadow-[0_0_15px_rgba(225,29,46,0.3)] hover:shadow-[#E11D2E]/50 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Apply to Pitch</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                    </motion.button>
                </div>

                {/* Mobile Menu Button  */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none hover:text-[#E11D2E] transition-colors"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl py-6 flex flex-col items-center gap-6"
                >
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="font-medium text-gray-300 hover:text-white transition-colors text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="px-8 py-4 w-3/4 max-w-xs text-base font-bold bg-[#E11D2E] text-white rounded shadow-lg hover:shadow-red-500/50 transition-all active:scale-95">
                        Apply to Pitch
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
