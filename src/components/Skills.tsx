import { useState } from 'react';
import { Code, Database, Smartphone,  Server, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <Layers className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools', icon: <Wrench className="w-4 h-4" /> },
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
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
           <div>
             <h2 className="text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
             <p className="text-slate-400">Tools and technologies I use to build the future</p>
           </div>
           
           {/* Tab Navigation */}
           <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
             {categories.map((category) => (
               <button
                 key={category.id}
                 onClick={() => setActiveCategory(category.id)}
                 className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                   activeCategory === category.id
                     ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50'
                     : 'text-slate-400 hover:text-white hover:bg-slate-800'
                 }`}
               >
                 {category.icon}
                 {category.name}
               </button>
             ))}
           </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    <Code className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
                 </div>
                 <span className="text-2xl font-bold text-slate-700 group-hover:text-cyan-500/50 transition-colors">{skill.level}%</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              
              {/* Custom Progress Line */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                   style={{ width: `${skill.level}%` }}
                 ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;