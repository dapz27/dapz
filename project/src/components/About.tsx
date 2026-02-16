import {  Award, BookOpen, Heart } from 'lucide-react';
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
  <img 
    src={fotoDaffa} 
    alt="Muhammad Daffa Ayvien" 
    className="w-full h-full object-cover" 
  />
</div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Mahasiswa Teknik Informatika
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika semester 6 yang memiliki passion dalam
              pengembangan software dan teknologi. Saya selalu antusias untuk belajar teknologi
              baru dan menerapkannya dalam proyek-proyek yang meaningful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan pengalaman dalam berbagai bahasa pemrograman dan framework, saya mampu
              mengembangkan aplikasi web, mobile, dan desktop. saya berpengalaman di technova dan pt.wahana jayakarsa dalam pengembangan web development
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
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
