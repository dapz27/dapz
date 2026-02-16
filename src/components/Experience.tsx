import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

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
      description:
        'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement UI/UX improvements.',
      achievements: [
        'Improved page load time by 40%',
        'Implemented 15+ reusable components',
        'Contributed to 3 major feature releases',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'PT Wahanakarsa swandiri',
      period: 'Aug 2025 - Sep 2025',
      description:
        'Designed and developed a custom internal system for managing item allocation and inventory distribution. Streamlined the logistics workflow by digitizing manual processes.',
      achievements: [
        'Built and deployed the Item Allocation System for the warehouse',
        'Optimized inventory tracking and reduced data entry errors',
        'Improved the efficiency of goods distribution within the company',
      ],
    },
    {
      title: 'Marketing Executive (Contract)',
      company: 'PT. Astral Byte',
      period: 'Feb 2026 - Present',
      description:
        'Responsible for driving business growth by promoting web development services and launching the new Education Program core line. Strategizing marketing campaigns to reach potential clients.',
      achievements: [
        'Promoted custom web development solutions to potential clients',
        'Spearheaded the marketing launch for the new Education Program core line',
        'Built strategic partnerships to increase brand awareness',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Internship Completion Certificate',
      issuer: 'PT. Wahanakarsa swandiri',
      date: 'Sep 2025',
    },
    {
      title: 'Certificate of Employment (UI/UX)',
      issuer: 'TechNova Group',
      date: 'Aug 2025',
    },
    {
      title: '8th - AR/VR Innovation Challenge',
      issuer: 'Upi Yptk Festival',
      date: '2025',
    },
    {
      title: 'Certified Augmented Reality Developer',
      issuer: 'Dicoding Indonesia / Unity',
      date: '2024',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Experience & Education</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 pl-2">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Education History</h3>
          </div>
          <div className="space-y-8 relative border-l-2 border-slate-800 ml-6 pl-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute top-8 -left-[41px] w-6 h-6 bg-slate-950 border-4 border-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                    <p className="text-purple-400 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 sm:mt-0 bg-slate-800 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{edu.description}</p>
                <div className="inline-block px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-sm font-bold border border-cyan-500/20">
                    {edu.gpa}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 pl-2">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <Briefcase className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>
          <div className="space-y-8 relative border-l-2 border-slate-800 ml-6 pl-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative group bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300"
              >
                 {/* Timeline Dot */}
                 <div className="absolute top-8 -left-[41px] w-6 h-6 bg-slate-950 border-4 border-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{exp.title}</h4>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 sm:mt-0 bg-slate-800 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                      <span className="text-cyan-500 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_#06b6d4]"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-4 mb-10 pl-2">
            <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/30">
                <Award className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-pink-500/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                    <Award className="w-6 h-6 text-slate-400 group-hover:text-pink-400" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm leading-tight group-hover:text-pink-400 transition-colors">{cert.title}</h4>
                <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
                <p className="text-xs text-cyan-500 font-mono">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;