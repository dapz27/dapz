import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // DATA SOSMED KAMU SUDAH DIPASANG DISINI
  const socialLinks = [
    { icon: Github, href: "https://github.com/dapz27", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-daffa-ayvien-3a25783b1/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:daffaa1712@gmail.com", label: "Email" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-950 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse animation-delay-2000"></div>
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-300 text-sm font-medium tracking-wide">Open to Work</span>
            </div>

            <div className="space-y-2">
                <h2 className="text-slate-400 text-xl font-medium">Hello, I'm</h2>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                  DAFFA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    AYVIEN
                  </span>
                </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Mahasiswa Teknik Informatika specialized in <span className="text-white font-semibold">Web Development</span>, <span className="text-white font-semibold">Mobile Apps</span>, and building immersive <span className="text-cyan-400 font-bold border-b-2 border-cyan-500">AR/VR Experiences</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-cyan-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 group">
                Download CV
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* LINK SOSMED DIPERBAIKI DISINI */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
               {socialLinks.map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30"
                   aria-label={social.label}
                 >
                   <social.icon className="w-6 h-6" />
                 </a>
               ))}
            </div>
          </div>

          {/* Right Visual (Abstract Tech) */}
          <div className="hidden lg:flex justify-center relative">
             <div className="relative w-[500px] h-[600px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl group">
                {/* Fake Code Interface */}
                <div className="h-full w-full bg-slate-950 rounded-lg p-6 font-mono text-sm overflow-hidden relative">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2 text-slate-500">
                        <p><span className="text-purple-400">const</span> developer = <span className="text-yellow-400">{`{`}</span></p>
                        <p className="pl-4">name: <span className="text-green-400">'Muhammad Daffa'</span>,</p>
                        <p className="pl-4">role: <span className="text-green-400">'Fullstack & AR/VR'</span>,</p>
                        <p className="pl-4">status: <span className="text-blue-400">'Ready to Deploy'</span>,</p>
                        <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Unity'</span>, <span className="text-green-400">'Next.js'</span>]</p>
                        <p><span className="text-yellow-400">{`}`}</span>;</p>
                        <div className="mt-8 p-4 bg-cyan-900/10 border border-cyan-500/20 rounded text-cyan-400">
                             <span className="animate-pulse">_ System initialized...</span> <br/>
                             <span className="animate-pulse delay-75">_ Loading creative assets...</span>
                        </div>
                    </div>
                    {/* Glowing Orb */}
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;