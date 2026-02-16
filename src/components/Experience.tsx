import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'S1 Teknik Informatika',
      institution: 'Universitas Putra Indonesia(Yptk)',
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan pendidikan dan pengalaman profesional saya
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{edu.description}</p>
                <p className="text-sm font-semibold text-blue-600">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-cyan-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <Award className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.title}</h4>
                <p className="text-xs text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-xs text-blue-600 font-semibold">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
