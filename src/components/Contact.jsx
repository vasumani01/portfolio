import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold inline-block"
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-glass-border">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, project inquiries, or any 
                questions related to AI/ML and software development.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:vasumani1922@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="font-semibold">vasumani1922@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+916383769127" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="font-semibold">+91 63837 69127</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="font-semibold">Vallioor, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <a href="https://github.com/vasumani01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/50 group-hover:bg-white/10 transition-all">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">GitHub</p>
                    <p className="font-semibold">vasumani01</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/vasumani-l/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                    <p className="font-semibold">Vasumani L</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 glass p-8 rounded-3xl border border-glass-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  id="message" 
                  rows="4" 
                  placeholder="Your message here..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all resize-none"
                  required
                ></motion.textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="submit" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 hover:from-blue-600 to-cyan-500 hover:to-cyan-600 text-white font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
