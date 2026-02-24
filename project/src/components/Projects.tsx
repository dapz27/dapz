import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// IMPORT GAMBAR SESUAI LIST FILE DI VS CODE KAMU (Screenshot 2026-02-16 164357.jpg)
import imgCrossVal from './path/cross_validation.png';
import imgKlasifikasi from './path/produkklasifikasi.png';
import imgKmeansResult from './path/kmeansclustering.jpg';
import imgKmeans from './path/kmeansimplementation.jpg';
import imgPengolahan from './path/salesdataprocessing.jpg';
import imgRegression from './path/regressionanalisis.png';
import imgUjiCoba1 from './path/dataexploration.webp';
import imgUjiCoba2 from './path/ujicobamagangday2.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Cross Validation Analysis',
      description: 'Analisis evaluasi model menggunakan Cross Validation untuk membandingkan performa Linear Regression vs Decision Tree.',
      image: imgCrossVal,
      tags: ['Python', 'Scikit-Learn', 'Model Evaluation', 'Data Science'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'Product Classification',
      description: 'Sistem klasifikasi produk swalayan menjadi kategori "Laris", "Sedang", dan "Kurang Laris" berbasis data transaksi.',
      image: imgKlasifikasi,
      tags: ['Classification', 'Data Mining', 'Python', 'Business Logic'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'K-Means Clustering Results',
      description: 'Visualisasi hasil clustering data swalayan, menampilkan pengelompokan produk berdasarkan pola penjualan.',
      image: imgKmeansResult,
      tags: ['Clustering', 'K-Means', 'Visualization', 'Unsupervised Learning'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'K-Means Implementation',
      description: 'Implementasi algoritma K-Means dari awal untuk segmentasi data pelanggan dan produk swalayan.',
      image: imgKmeans,
      tags: ['Machine Learning', 'Python', 'Algorithm', 'Data Analysis'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'Sales Data Processing',
      description: 'Script otomatisasi pengolahan data penjualan harian swalayan, menghitung omzet, dan tren produk.',
      image: imgPengolahan,
      tags: ['Data Processing', 'Pandas', 'Automation', 'Analytics'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'Regression Analysis',
      description: 'Penerapan model Regresi untuk memprediksi total penjualan berdasarkan variabel jumlah dan harga satuan.',
      image: imgRegression,
      tags: ['Regression', 'Predictive Modeling', 'Python', 'Statistics'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'Dataset Exploration (Day 1)',
      description: 'Eksplorasi awal dataset (EDA), pengecekan tipe data, missing values, dan statistik deskriptif dasar.',
      image: imgUjiCoba1,
      tags: ['EDA', 'Pandas', 'Data Cleaning', 'Python'],
      github: 'https://github.com/dapz27',
      demo: '#',
    },
    {
      title: 'Educational Data Viz (Day 2)',
      description: 'Dashboard visualisasi data pendidikan menampilkan grafik nilai dan statistik kelulusan mahasiswa.',
      image: imgUjiCoba2,
      tags: ['Data Visualization', 'Charts', 'Dashboard', 'Education Tech'],
      github: 'https://github.com/dapz27',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
           <div>
              <h2 className="text-4xl font-bold text-white mb-2">Selected Works</h2>
              <p className="text-slate-400">Showcase of my Data Science & Development projects</p>
           </div>
           <a href="https://github.com/dapz27" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              View Github <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-300"></div>

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
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-6 group-hover:text-white transition-colors">{project.description}</p>
                    
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-white transition-all text-white backdrop-blur-sm">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className={`p-3 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-white transition-all text-white backdrop-blur-sm ${project.demo === '#' ? 'cursor-default opacity-80' : ''}`}>
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="https://github.com/dapz27" className="inline-flex items-center gap-2 text-cyan-400 font-bold border-b border-cyan-400 pb-1">
              View All on Github <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;