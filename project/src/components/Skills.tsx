import { useState } from 'react';
import { Code, Database, Smartphone, Globe, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <Globe className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Wrench className="w-5 h-5" /> },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'PHP', level: 65 },
    ],
    mobile: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 75 },
      { name: 'Android', level: 70 },
      { name: 'iOS', level: 65 },
    ],
    database: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'Supabase', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'Postman', level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border ${
                activeCategory === category.id
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="space-y-8">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <div
                key={skill.name}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                  <span className="text-cyan-400 font-mono font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)] relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50 blur-[2px]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { icon: Code, count: "5+", label: "Programming Languages" },
                { icon: Globe, count: "10+", label: "Frameworks & Libraries" },
                { icon: Database, count: "5+", label: "Database Systems" },
                { icon: Wrench, count: "15+", label: "Development Tools" }
            ].map((stat, idx) => (
              <div key={idx} className="relative group p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-cyan-500 hover:to-purple-600 transition-all duration-500">
                <div className="text-center p-8 bg-slate-900 rounded-xl h-full relative z-10 transition-colors group-hover:bg-slate-900/90">
                    <stat.icon className="w-12 h-12 text-cyan-500 mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-3xl font-extrabold text-white mb-2">{stat.count}</h4>
                    <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;