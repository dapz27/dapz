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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah teknologi dan tools yang saya kuasai dalam pengembangan software
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">5+</h4>
            <p className="text-gray-600">Programming Languages</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">10+</h4>
            <p className="text-gray-600">Frameworks & Libraries</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <Database className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">5+</h4>
            <p className="text-gray-600">Database Systems</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">15+</h4>
            <p className="text-gray-600">Development Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
