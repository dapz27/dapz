import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <h3 className="text-2xl font-bold">DAFFA<span className="text-cyan-400">.DEV</span></h3>
           <p className="text-slate-500 text-sm mt-1">Building digital experiences that matter.</p>
        </div>

        {/* LINK FOOTER DIPERBAIKI */}
        <div className="flex gap-6">
            <a href="https://github.com/dapz27" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5"/>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-daffa-ayvien-3a25783b1/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5"/>
            </a>
            <a href="mailto:daffaa1712@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5"/>
            </a>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-1">
             Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Padang
        </div>
      </div>
    </footer>
  );
};

export default Footer;