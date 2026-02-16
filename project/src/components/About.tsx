import { Award, BookOpen, Heart } from 'lucide-react';
import fotoDaffa from './path/foto_daffa.jpeg';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'GPA 3.6/4.0',
      description: 'Maintaining excellent academic performance',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '20+ Projects',
      description: 'Completed various software projects',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Passionate about solving real-world problems',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 inline-block">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-slate-700/50 shadow-2xl">
              <img 
                src={fotoDaffa} 
                alt="Muhammad Daffa Ayvien" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0" 
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]"></span>
                Mahasiswa Teknik Informatika
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg border-l border-slate-700 pl-4 hover:border-cyan-500 transition-colors duration-300">
                Saya adalah mahasiswa Teknik Informatika semester 6 yang memiliki passion dalam
                pengembangan software dan teknologi. Saya selalu antusias untuk belajar teknologi
                baru dan menerapkannya dalam proyek-proyek yang meaningful.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg border-l border-slate-700 pl-4 hover:border-purple-500 transition-colors duration-300">
                Dengan pengalaman dalam berbagai bahasa pemrograman dan framework, saya mampu
                mengembangkan aplikasi web, mobile, dan desktop. Saya berpengalaman di TechNova dan PT. Wahanakarsa swandiri dalam pengembangan web development.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_5px_20px_rgba(6,182,212,0.15)]"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-700/50 text-cyan-400 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;