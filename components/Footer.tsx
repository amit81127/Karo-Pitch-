"use client";

export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 pt-20 pb-10 text-white relative z-20 w-full">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding & Socials */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                                <span className="text-white font-bold text-2xl leading-none">K</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">Karo Pitch</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Connecting India's top founders with leading investors. Empowering the Bharat startup ecosystem through guided visibility and access to capital.
                        </p>
                        <div className="flex gap-4 border-t border-white/10 pt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Platform</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">For Startups</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">For Investors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">How it Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Success Stories</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">KaroStartup</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium">Trust & Safety</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; 2026 Karo Pitch. Built for Bharat's founders.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        Made with <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> in India
                    </div>
                </div>
            </div>
        </footer>
    );
}
