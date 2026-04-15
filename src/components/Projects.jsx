import { motion } from "framer-motion";
import { Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Face Detection System",
    description: "Built a real-time face detection system using Python and OpenCV capable of identifying faces from webcam input.",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/vasumani01",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Emotion Detection",
    description: "Machine learning model that detects human emotions from facial expressions accurately.",
    tech: ["Machine Learning", "Python"],
    github: "https://github.com/vasumani01",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Sports Performance Analysis",
    description: "Computer vision project to analyze sports performance metrics using OpenCV.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/vasumani01",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React with modern UI animations and a futuristic theme.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vasumani01",
    color: "from-orange-500/20 to-yellow-500/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-indigo-400">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 50 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { 
                    delay: idx * 0.1, 
                    type: "spring", 
                    stiffness: 80,
                    staggerChildren: 0.1,
                    delayChildren: idx * 0.1 + 0.2
                  } 
                }
              }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2, z: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-3xl overflow-hidden group relative flex flex-col h-full border border-glass-border hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              <div className="p-8 flex-grow flex flex-col z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </motion.div>

                <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </motion.h3>
                
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </motion.p>

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
