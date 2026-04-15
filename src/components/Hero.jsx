import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import LightRays from "./LightRays";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00f3ff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays opacity-50"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center max-w-4xl text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium tracking-widest uppercase mb-4"
          >
            AI/ML Engineer · Full-Stack Developer · Computer Vision
          </motion.h2>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            {"Hi, I'm".split("").map((char, index) => (
              <motion.span 
                key={`hi-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {char}
              </motion.span>
            ))}
            <br/>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
              {"Vasumani L".split("").map((char, index) => (
                <motion.span 
                  key={`name-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="inline-block hover:animate-pulse"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Building intelligent systems, scalable web applications, and automation-driven solutions. Skilled in delivering end-to-end, data-driven projects with innovation and technical proficiency.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <motion.a 
              href="/Vasumani_L_Resume.pdf"
              download="Vasumani_L_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center gap-2 hover:cursor-pointer"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            
            <div className="flex items-center gap-4">
              <SocialIcon href="https://github.com/vasumani01" icon={<Github />} hoverColor="hover:text-neon-blue" />
              <SocialIcon href="https://www.linkedin.com/in/vasumani-l/" icon={<Linkedin />} hoverColor="hover:text-neon-blue" />
              <SocialIcon href="#contact" icon={<Mail />} hoverColor="hover:text-neon-purple" />
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ icon, href, hoverColor }) {
  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`p-3 glass rounded-full text-gray-300 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${hoverColor}`}
    >
      {icon}
    </a>
  );
}
