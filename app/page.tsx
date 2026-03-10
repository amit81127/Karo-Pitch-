

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center bg-background-primary">
      {/* Background with soft gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Soft grid decoration */}
        <div className="absolute inset-0 bg-[#80808008] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full mb-20 md:mb-0">
        <nav className="absolute top-0 left-0 w-full pt-8 pb-4 flex justify-between items-center z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-2xl leading-none">K</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-dark">Karo Pitch</span>
          </div>
          <div className="hidden md:flex gap-10 text-base font-medium text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">For Startups</a>
            <a href="#" className="hover:text-primary transition-colors">For Investors</a>
            <a href="#" className="hover:text-primary transition-colors">How it works</a>
          </div>
          <div className="flex gap-4">
            <button className="hidden md:block px-5 py-2.5 text-base font-medium text-dark hover:text-primary transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 text-base font-medium bg-dark text-white rounded-full hover:bg-dark/90 transition-all shadow-xl shadow-dark/20 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-32 pb-16">
          {/* Left Column: Text content */}
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left z-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 w-max mx-auto lg:mx-0 font-semibold text-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Empowering India's Next Unicorns
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.1] text-dark tracking-tight">
              Pitch Your Startup to <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">India’s Top Investors</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Karo Pitch is a platform where founders from across India can present their startups to investors, gain visibility, and raise funding rapidly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 lg:mt-6">
              <button className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-[#5a4cd9] transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-2 group">
                Apply to Pitch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white text-dark text-lg font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
                Explore Startups
              </button>
            </div>

            <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background-primary flex items-center justify-center bg-gray-100 font-bold text-xs text-gray-500 overflow-hidden shadow-sm relative">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Investor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-base font-medium text-gray-600">
                Join <span className="text-dark font-extrabold text-lg">500+</span> founders exploring
              </p>
            </div>
          </div>

          {/* Right Column: Animated UI */}
          <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0 z-10">
            {/* Main floating card */}
            <div className="absolute w-[95%] sm:w-[85%] max-w-[420px] bg-white/90 rounded-[2rem] p-8 shadow-2xl shadow-primary/10 border border-white/60 backdrop-blur-md z-20 animate-float">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-white/50 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center z-10 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-dark text-xl">TechNova AI</h3>
                    <p className="text-sm text-gray-500 font-semibold mt-0.5">B2B SaaS • Pre-Seed</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-green-50/80 text-green-600 rounded-full text-xs font-bold border border-green-100 shadow-sm">
                  Trending
                </div>
              </div>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Empowering tier-two manufacturers with predictive AI analytics. Reducing downtime by 40%.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Target Raise</span>
                  <span className="font-extrabold text-dark text-base">₹1.5Cr</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 inset-shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full w-[65%] shadow-sm relative">
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">65% Committed</span>
                  <span className="text-gray-500 font-medium">12 days left</span>
                </div>
              </div>

              <button className="w-full py-4 bg-dark text-white rounded-2xl font-semibold hover:bg-dark/90 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-dark/10 group flex justify-center items-center gap-2">
                View Pitch Deck
                <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            {/* Secondary floating card 1 (Top right) */}
            <div className="absolute top-2 right-0 lg:-right-10 w-64 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-white/60 z-10 animate-float-delay hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-dark">Meeting Scheduled</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Nexus Ventures • 2 PM</p>
                </div>
              </div>
            </div>

            {/* Secondary floating card 2 (Bottom left) */}
            <div className="absolute bottom-20 -left-6 lg:left-0 w-60 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-white/60 z-30 animate-float-delay hidden sm:block delay-700">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-500">Investor Views</span>
                  <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    12%
                  </span>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[40, 70, 45, 90, 65, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group cursor-pointer" style={{ height: `${h}%` }}>
                      {i === 5 && (
                        <div className="absolute inset-0 bg-primary rounded-t-sm shadow-sm">
                          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-dark text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            244 Views
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background decoration elements */}
            <div className="absolute right-10 top-20 w-3 h-3 rounded-full bg-accent/40 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute left-10 bottom-40 w-4 h-4 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative z-10 w-full bg-white py-24 lg:py-32 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Image/Visual */}
            <div className="order-2 lg:order-1 relative h-full min-h-[450px] w-full bg-background-primary rounded-[2.5rem] border border-gray-100 overflow-hidden flex items-center justify-center p-8 shadow-sm group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

              {/* Abstract decorative composition */}
              <div className="relative w-full max-w-[340px] aspect-square">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

                <div className="absolute inset-6 bg-white/80 rounded-3xl shadow-2xl shadow-primary/10 backdrop-blur-md border border-white flex flex-col items-center justify-center p-8 text-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-[#5a4cd9] mb-6 flex items-center justify-center text-white shadow-xl shadow-primary/30 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-black text-dark tracking-tight">KaroStartup</h4>
                  <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide uppercase">Connecting Founders</p>

                  <div className="mt-6 flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 w-max font-semibold text-sm border border-gray-200 shadow-sm">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About The Platform
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.15] tracking-tight">
                What is <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block mt-2">
                  Karo Pitch?
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h2>

              <div className="space-y-6 text-lg lg:text-xl text-gray-600 leading-relaxed font-normal">
                <p>
                  Karo Pitch is an initiative by <strong className="font-extrabold text-dark">KaroStartup</strong> designed to help founders across India connect directly with investors.
                </p>
                <p>
                  Thousands of entrepreneurs are building real businesses but lack access to funding and visibility. Often, the barrier isn't the quality of the startup, but simply the lack of the right connections—especially outside major tech hubs.
                </p>
                <p>
                  Karo Pitch bridges this gap through curated pitch events and a startup discovery platform, leveling the playing field for ambitious early-stage founders from Tier-2 and Tier-3 cities.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-10 md:gap-16 border-t border-gray-100 pt-10">
                <div className="group">
                  <h5 className="text-4xl font-black text-dark tracking-tighter group-hover:text-primary transition-colors">10k+</h5>
                  <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide">FOUNDERS REACHED</p>
                </div>
                <div className="hidden sm:block w-px bg-gray-100 self-stretch"></div>
                <div className="group">
                  <h5 className="text-4xl font-black text-dark tracking-tighter group-hover:text-accent transition-colors">200+</h5>
                  <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide">ACTIVE INVESTORS</p>
                </div>
                <div className="hidden sm:block w-px bg-gray-100 self-stretch"></div>
                <div className="group">
                  <h5 className="text-4xl font-black text-dark tracking-tighter group-hover:text-primary transition-colors">Tier-2/3</h5>
                  <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide">STRONG FOCUS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
