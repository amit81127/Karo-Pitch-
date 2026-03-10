

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-background-primary">
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

      {/* How It Works Section */}
      <section className="relative z-10 w-full bg-background-primary py-24 lg:py-32 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-60 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
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
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-200 via-primary/30 to-gray-200 z-0 border-t border-dashed border-primary/40"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary/20 shadow-xl shadow-primary/5 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 group-hover:border-primary transition-all duration-300">
                  <div className="absolute inset-2 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                  <svg className="w-10 h-10 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark text-white text-sm font-bold flex items-center justify-center border-4 border-background-primary shadow-sm">1</div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Apply with Pitch Deck</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                  Submit your detailed pitch deck and fill out our comprehensive startup evaluation form.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary/20 shadow-xl shadow-primary/5 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 group-hover:border-primary transition-all duration-300">
                  <div className="absolute inset-2 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                  <svg className="w-10 h-10 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark text-white text-sm font-bold flex items-center justify-center border-4 border-background-primary shadow-sm">2</div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Get Shortlisted</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                  Our expert panel reviews your application. Top startups are selected by KaroStartup for the final pitch.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary/20 shadow-xl shadow-primary/5 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 group-hover:border-primary transition-all duration-300">
                  <div className="absolute inset-2 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                  <svg className="w-10 h-10 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark text-white text-sm font-bold flex items-center justify-center border-4 border-background-primary shadow-sm">3</div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Pitch Live to Investors</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                  Present your vision directly to an exclusive room of active angel investors and VCs.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-accent/30 shadow-xl shadow-accent/10 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 group-hover:border-accent transition-all duration-300">
                  <div className="absolute inset-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"></div>
                  <svg className="w-10 h-10 text-accent relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center border-4 border-background-primary shadow-sm">4</div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Raise & Scale</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                  Secure the capital and strategic connections you need to scale your startup across Bharat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="relative z-10 w-full bg-white py-24 lg:py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                Who Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Apply?</span>
              </h2>
              <p className="text-lg text-gray-600">
                Founders from Tier-2 and Tier-3 cities building the next generation of businesses for Bharat.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Category 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">D2C Brands</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Direct-to-consumer businesses building unique physical products and brands with high growth potential.
              </p>
            </div>

            {/* Category 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Consumer Startups</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Companies solving everyday consumer problems through innovative services, apps, or platforms.
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">MSMEs</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Micro, Small, and Medium Enterprises looking to scale operations, digitize, or expand into new markets.
              </p>
            </div>

            {/* Category 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">SaaS Startups</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Software-as-a-Service platforms catering to global or local B2B/B2C markets with scalable business models.
              </p>
            </div>

            {/* Category 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Manufacturing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hardware, equipment, and production-oriented businesses focusing on domestic or export opportunities.
              </p>
            </div>

            {/* Category 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Bharat-Focused</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Solutions specifically tailored for the next billion internet users in rural and semi-urban India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="relative z-10 w-full bg-background-primary py-24 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-6">
              Meet Investors Looking for the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2 inline-block">Next Big Startup</span>
            </h2>
            <p className="text-lg text-gray-600">
              Top angel investors, venture funds, and syndicates actively participate in Karo Pitch events to discover and fund promising high-growth startups from across India.
            </p>
          </div>

          {/* Logo Marquee or Horizontal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="bg-white h-24 rounded-xl border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group grayscale hover:grayscale-0">
                <span className="font-bold text-gray-400 group-hover:text-primary transition-colors">Venture Fund {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="relative z-10 w-full bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Startups</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover some of the innovative companies that are building for Bharat and beyond.
              </p>
            </div>
            <button className="px-6 py-2.5 bg-gray-50 text-dark font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors shrink-0 shadow-sm">
              View All Startups
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Startup 1 - GreenKart */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold">G</span>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">D2C</div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">GreenKart</h3>
                <p className="font-medium text-primary text-sm mb-4">D2C Grocery Platform</p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Delivering farm-fresh standard and exotic groceries directly to consumers within 4 hours. Building a sustainable supply chain.
                </p>
              </div>
            </div>

            {/* Startup 2 - SkillForge */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold">S</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">EdTech</div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">SkillForge</h3>
                <p className="font-medium text-accent text-sm mb-4">AI Learning Platform</p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  An AI-driven personalized learning assistant helping tier-2 city students upskill for the modern tech industry with local language support.
                </p>
              </div>
            </div>

            {/* Startup 3 - UrbanMitti */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#F59E0B]/10 transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold">U</span>
                  </div>
                  <div className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full border border-amber-100">Consumer</div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-[#F59E0B] transition-colors">UrbanMitti</h3>
                <p className="font-medium text-[#F59E0B] text-sm mb-4">Handmade Sustainable Decor</p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Empowering rural artisans by bringing their handmade, sustainable terra-cotta home decor products to urban millennial households.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About KaroStartup */}
      <section className="relative z-10 w-full bg-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 mix-blend-screen filter blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 mix-blend-screen filter blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 text-white w-max font-semibold text-sm border border-white/20 mb-6 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Our Parent Platform
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Powered by <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5CE7]">KaroStartup</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                Karo Pitch is an initiative by KaroStartup, a leading startup media platform. We have published thousands of inspiring founder stories and built one of the largest, most active founder communities across India.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                <h4 className="text-5xl font-black text-white mb-2 group-hover:scale-110 transform origin-left transition-transform">5000+</h4>
                <p className="text-gray-400 font-medium">Startup Stories</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 filter blur-xl rounded-full"></div>
                <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-white mb-2 group-hover:scale-110 transform origin-left transition-transform relative z-10">1M+</h4>
                <p className="text-gray-400 font-medium relative z-10">Community Reach</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors sm:col-span-2 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-5xl font-black text-white mb-2 group-hover:scale-105 transform origin-left transition-transform">5+ Years</h4>
                  <p className="text-gray-400 font-medium">Supporting Indian Startups</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 lg:py-32 relative overflow-hidden z-20 w-full text-center">
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-dark z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay z-0"></div>

        {/* Floating circles */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full filter blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full filter blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white/90 text-sm font-semibold shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
            Applications open for upcoming cohorts
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Ready to Pitch Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#A180FF]">Startup?</span>
          </h2>

          <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Take the leap. Get the funding, visibility, and mentorship you need to build the next big thing from India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="px-8 py-4 bg-white text-dark hover:bg-gray-100 text-lg font-bold rounded-full transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 flex justify-center items-center gap-2">
              Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 text-lg font-bold rounded-full transition-all flex justify-center items-center gap-2 group">
              Partner With Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              &copy; {new Date().getFullYear()} Karo Pitch by KaroStartup. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              Made with <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> in India
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
