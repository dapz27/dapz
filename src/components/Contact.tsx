import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // DATA SOSMED CONTACT
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dapz27', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-daffa-ayvien-3a25783b1/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/dxpzz_', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h2 className="text-5xl font-bold text-white mb-6">Let's Work <br/><span className="text-cyan-400">Together.</span></h2>
                    <p className="text-slate-400 text-lg">
                        Have a project in mind? Looking for a partner? I'm available for new challenges.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                            <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">Email me at</p>
                            <a href="mailto:daffaa1712@gmail.com" className="font-semibold hover:text-cyan-400 transition-colors">daffaa1712@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                            <Phone className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">Call me at</p>
                            <a href="tel:+6289523521290" className="font-semibold hover:text-cyan-400 transition-colors">+62 895 2352 1290</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">Base location</p>
                            <p className="font-semibold">Padang, Indonesia</p>
                        </div>
                    </div>
                </div>

                {/* ICON SOSMED YANG SUDAH DIPERBAIKI */}
                <div className="flex gap-4">
                     {socialLinks.map((social, i) => (
                         <a 
                           key={i} 
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-110"
                           aria-label={social.label}
                         >
                             <social.icon className="w-5 h-5" />
                         </a>
                     ))}
                </div>
            </div>

            {/* Right: Form (Tetap Gacor) */}
            <div className="lg:col-span-3 bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 relative">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Your Name</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange} required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Email Address</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange} required
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400">Subject</label>
                        <input
                            type="text" name="subject" value={formData.subject} onChange={handleChange} required
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="Project Proposal"
                        />
                    </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400">Message</label>
                        <textarea
                            name="message" value={formData.message} onChange={handleChange} required rows={5}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group">
                        Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;