import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan fitur cart, payment gateway, dan admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur real-time collaboration, notifications, dan analytics.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Aplikasi mobile untuk tracking aktivitas fitness, kalori, dan progress workout.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard analitik untuk social media dengan data visualization dan reporting.',
      image: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'Flask', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'AR/VR Interactive Experience',
      description: 'Aplikasi Augmented Reality untuk edukasi interaktif dan Virtual Reality tour.',
      image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Unity 3D', 'C#', 'Vuforia', 'Blender'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplikasi cuaca dengan prediksi 7 hari, maps integration, dan beautiful UI.',
      image: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'API Integration', 'Maps', 'PWA'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
           <div>
              <h2 className="text-4xl font-bold text-white mb-2">Selected Works</h2>
              <p className="text-slate-400">Showcase of my latest development projects</p>
           </div>
           <a href="https://github.com" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              View Github <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tags.slice(0,3).map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs font-bold text-cyan-400 bg-cyan-900/30 border border-cyan-500/30 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-6 group-hover:text-white transition-colors">{project.description}</p>
                    
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-white transition-all text-white backdrop-blur-sm">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-white transition-all text-white backdrop-blur-sm">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="https://github.com" className="inline-flex items-center gap-2 text-cyan-400 font-bold border-b border-cyan-400 pb-1">
              View All on Github <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;