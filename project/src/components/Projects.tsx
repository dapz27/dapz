import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Platform e-commerce lengkap dengan fitur cart, payment gateway, dan admin dashboard. Dibangun menggunakan React, Node.js, dan PostgreSQL.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Aplikasi manajemen tugas dengan fitur real-time collaboration, notifications, dan analytics. Menggunakan Next.js dan Supabase.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Mobile Fitness Tracker',
      description:
        'Aplikasi mobile untuk tracking aktivitas fitness, kalori, dan progress workout. Dibangun dengan React Native dan Firebase.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Dashboard analitik untuk social media dengan data visualization dan reporting. Menggunakan Vue.js dan Python Flask.',
      image: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'Flask', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'AR/VR Interactive Experience',
      description:
        'Aplikasi Augmented Reality untuk edukasi interaktif dan Virtual Reality tour. Dibangun menggunakan Unity 3D dan Vuforia SDK untuk pengalaman immersive.',
      image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=800', // Gambar orang menggunakan VR headset
      tags: ['Unity 3D', 'C#', 'Vuforia', 'Blender'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Aplikasi cuaca dengan prediksi 7 hari, maps integration, dan beautiful UI. Menggunakan React dan OpenWeather API.',
      image: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'API Integration', 'Maps', 'PWA'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa project yang telah saya kerjakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-semibold">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-semibold">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
