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
      tags: ['Next.js', 'Supabase', 'TypeScript', 'TailwindCSS'],
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
      image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Berikut adalah beberapa project yang telah saya kerjakan dengan sentuhan teknologi modern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                
                {/* Overlay Links on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-full text-white hover:bg-purple-500 hover:scale-110 transition-all"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs rounded-full font-semibold border border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
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