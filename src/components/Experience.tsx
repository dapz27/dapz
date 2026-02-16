import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'S1 Teknik Informatika',
      institution: 'Universitas Putra Indonesia (YPTK)',
      period: '2023 - Present',
      description: 'Focus on Software Engineering, Web Development, and Artificial Intelligence',
      gpa: 'GPA: 3.6/4.0',
    },
    {
      degree: 'SMA IPS',
      institution: 'SMA Negeri 8 Mandau',
      period: '2020 - 2023',
      description: 'Science major with focus on Social and Economy',
      gpa: 'Average: 95/100',
    },
  ];

  const experience = [
    {
      title: 'UI & UX',
      company: 'TechNova Group',
      period: 'Mei 2025 - Aug 2025',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team.',
      achievements: ['Improved page load time by 40%', 'Implemented 15+ reusable components', 'Contributed to 3 major feature releases'],
    },
    {
      title: 'Web Developer Intern',
      company: 'PT Wahanakarsa swandiri',
      period: 'Aug 2025 - Sep 2025',
      description: 'Designed and developed a custom internal system for managing item allocation and inventory distribution.',
      achievements: ['Built and deployed the Item Allocation System', 'Optimized inventory tracking', 'Improved efficiency'],
    },
    {
      title: 'Marketing Executive',
      company: 'PT. Astral Byte',
      period: 'Feb 2026 - Present',
      description: 'Responsible for driving business growth by promoting web development services.',
      achievements: ['Promoted custom web development solutions', 'Spearheaded marketing launch', 'Built strategic partnerships'],
    },
  ];

  const certifications = [
    { title: 'Internship Completion', issuer: 'PT. Wahanakarsa', date: 'Sep 2025' },
    { title: 'Certificate of Employment', issuer: 'TechNova Group', date: 'Aug 2025' },
    { title: '8th - AR/VR Challenge', issuer: 'Upi Yptk Festival', date: '2025' },
    { title: 'AR Developer', issuer: 'Dicoding / Unity', date: '2024' },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <Briefcase className="w-8 h-8 text-cyan-400" />
                    <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
                </div>
                
                <div className="relative border-l-2 border-slate-800 ml-3 space-y-12">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-10 group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:scale-125 transition-all"></div>
                            
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 group-hover:border-cyan-500/30 transition-all">
                                <span className="text-cyan-400 text-sm font-mono mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                <p className="text-slate-400 mb-4">{exp.company}</p>
                                <p className="text-slate-300 text-sm mb-4">{exp.description}</p>
                                <div className="space-y-2">
                                    {exp.achievements.slice(0,2).map((item, i) => (
                                        <div key={i} className="flex gap-2 text-sm text-slate-400">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-500/50 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education & Certs */}
            <div className="space-y-16">
                <div>
                     <div className="flex items-center gap-3 mb-10">
                        <GraduationCap className="w-8 h-8 text-blue-400" />
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                    </div>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900 transition-colors">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                    <p className="text-slate-400">{edu.institution}</p>
                                    <p className="text-blue-400 text-sm font-bold mt-1">{edu.gpa}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                     <div className="flex items-center gap-3 mb-8">
                        <Award className="w-8 h-8 text-purple-400" />
                        <h2 className="text-3xl font-bold text-white">Certifications</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors">
                                <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                                <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
                                <p className="text-purple-400 text-xs mt-2">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;