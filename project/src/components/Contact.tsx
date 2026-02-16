import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'daffaa1712@gmail.com',
      link: 'mailto:daffaa1712@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+62 895 2352 1290',
      link: 'tel:+6289523521290',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Padang, Indonesia',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, link: 'https://github.com//dapz27', name: 'GitHub' },
    { icon: <Linkedin className="w-6 h-6" />, link: 'https://www.linkedin.com/in/muhammad-daffa-ayvien-3a25783b1/', name: 'LinkedIn' },
    { icon: <Instagram className="w-6 h-6" />, link: 'https://instagram.com//dxpzz_', name: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6 shadow-[0_0_10px_#06b6d4]"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
                <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group border border-transparent hover:border-cyan-500/30"
                    >
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                        {info.icon}
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm mb-1">{info.title}</p>
                        <p className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{info.value}</p>
                    </div>
                    </a>
                ))}
                </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h4 className="text-xl font-bold mb-6">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold mb-2 text-cyan-300">Open for Opportunities</h4>
              <p className="text-slate-300 text-sm">
                Saya terbuka untuk internship, freelance projects, dan kolaborasi menarik lainnya.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300 group-focus-within:text-cyan-400 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300 group-focus-within:text-cyan-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-300 group-focus-within:text-cyan-400 transition-colors">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300 group-focus-within:text-cyan-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 resize-none transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;