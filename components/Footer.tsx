"use client";

import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] border-t border-gray-800 pt-20 pb-10 text-white relative z-20 w-full">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding & Socials */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-white font-black text-2xl tracking-tighter">
                                Karo<span className="text-[#E11D2E]">Pitch</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Connecting India's top founders with leading investors. Built by the community at KaroStartup.
                        </p>
                        <div className="flex gap-4 border-t border-gray-800 pt-6">
                            <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E11D2E] hover:text-white hover:border-[#E11D2E] transition-all group">
                                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E11D2E] hover:text-white hover:border-[#E11D2E] transition-all group">
                                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E11D2E] hover:text-white hover:border-[#E11D2E] transition-all group">
                                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Platform</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">For Startups</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">For Investors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">How it Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">Success Stories</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">KaroStartup</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">Careers</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-[#FF3B3B] flex gap-2 items-center transition-colors text-sm font-medium"><Mail className="w-4 h-4" /> Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#FF3B3B] transition-colors text-sm font-medium">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Karo Pitch — Built for Bharat's Founders.
                    </p>
                </div>
            </div>
        </footer>
    );
}
