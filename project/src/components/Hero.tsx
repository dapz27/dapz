import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob top-0 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000 top-0 -right-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000 -bottom-32 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase animate-pulse">Available for Projects</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            Hi, Saya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Muhammad Daffa
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-cyan-100/80 font-light tracking-wide mb-8">
            Mahasiswa Teknik Informatika
          </p>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-6 text-left bg-slate-900/50 p-4 rounded-r-xl backdrop-blur-sm">
           Passionate about building the future of digital interaction. Specialized in web development, mobile apps, and <span className="text-cyan-400 font-bold">Extended Reality (AR/VR)</span>.
          </p>

          <div className="flex flex-wrap gap-5 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105 border border-white/10">
              Download CV
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/50 text-cyan-400 rounded-xl font-bold hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Explore Portfolio
            </button>
          </div>

          <div className="flex gap-8 justify-center">
            {[
              { icon: <Github className="w-8 h-8" />, href: "https://github.com", label: "Github" },
              { icon: <Linkedin className="w-8 h-8" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail className="w-8 h-8" />, href: "mailto:daffaa1712@gmail.com", label: "Email" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 border border-white/5"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative text-slate-300 group-hover:text-cyan-400">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full bg-slate-800/50 border border-white/10 text-cyan-400 hover:text-white transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;