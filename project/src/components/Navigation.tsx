import { useState, useEffect } from 'react';
import { Menu, X, Code2, Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'w-[90%] md:w-auto' : 'w-full md:w-auto'
        }`}
      >
        <div 
          className={`mx-auto px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
            isScrolled 
              ? 'bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
              : 'bg-transparent border-transparent'
          }`}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('#home')}>
              <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block text-lg font-bold text-white tracking-wide">
                DAFF<span className="text-cyan-400">.DEV</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-cyan-400 -translate-x-1/2 group-hover:w-1/2 transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="flex items-center gap-2 px-5 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                    <Zap className="w-4 h-4" />
                    <span>Hire Me</span>
                </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl text-white font-bold hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2 bg-white/10 rounded-full"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;