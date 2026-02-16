import { Award, BookOpen, Heart, Code, Terminal, Cpu } from 'lucide-react';
import fotoDaffa from './path/foto_daffa.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-slate-400">Get to know more about my journey</p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Card 1: Photo (Large) */}
          <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 relative rounded-3xl overflow-hidden border border-slate-800 group">
             <img 
                src={fotoDaffa} 
                alt="Muhammad Daffa Ayvien" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-6">
                 <p className="text-white font-bold text-xl">Daffa Ayvien</p>
                 <p className="text-cyan-400 text-sm">Padang, Indonesia</p>
              </div>
          </div>

          {/* Card 2: Main Description (Wide) */}
          <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal className="w-32 h-32 text-white" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-4">Mahasiswa Teknik Informatika</h3>
             <p className="text-slate-400 leading-relaxed mb-4">
               Saya adalah mahasiswa Teknik Informatika semester 6 yang memiliki passion dalam pengembangan software. 
               Berpengalaman di <span className="text-cyan-400">TechNova</span> dan <span className="text-cyan-400">PT. Wahanakarsa swandiri</span>.
             </p>
             <p className="text-slate-400 leading-relaxed">
               Mampu mengembangkan aplikasi web, mobile, dan desktop. Selalu antusias belajar teknologi baru.
             </p>
          </div>

          {/* Card 3: Stats (Tall) */}
          <div className="row-span-2 col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl flex flex-col justify-between text-white relative overflow-hidden">
             <div className="absolute -right-4 -top-4 bg-white/10 w-32 h-32 rounded-full blur-2xl"></div>
             <div>
                <Award className="w-10 h-10 mb-4 text-blue-200" />
                <h4 className="text-4xl font-bold mb-1">3.6<span className="text-xl text-blue-200">/4.0</span></h4>
                <p className="text-blue-100 text-sm">GPA Score</p>
             </div>
             <div className="mt-8">
                <BookOpen className="w-10 h-10 mb-4 text-blue-200" />
                <h4 className="text-4xl font-bold mb-1">20+</h4>
                <p className="text-blue-100 text-sm">Projects Completed</p>
             </div>
          </div>

          {/* Card 4: Specialization (Small) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-900 rounded-3xl border border-slate-800 p-6 hover:bg-slate-800 transition-colors group">
             <Cpu className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
             <h4 className="font-bold text-white">AR / VR</h4>
             <p className="text-slate-400 text-sm">Specialized Development</p>
          </div>

          {/* Card 5: Soft Skill (Small) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-6 flex items-center gap-6 hover:bg-slate-800 transition-colors">
             <div className="bg-cyan-500/10 p-4 rounded-full">
                <Heart className="w-6 h-6 text-cyan-400" />
             </div>
             <div>
                <h4 className="font-bold text-white text-lg">Problem Solver</h4>
                <p className="text-slate-400 text-sm">Passionate about solving real-world problems through code.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;