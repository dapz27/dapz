import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-8">
            <a
              href="https://github.com//dapz27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-daffa-ayvien-3a25783b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:daffaa1712@gmail.com"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by <span className="text-cyan-400 font-semibold">Muhammad Daffa Ayvien</span>
            </p>
            <p className="text-slate-600 text-xs">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;