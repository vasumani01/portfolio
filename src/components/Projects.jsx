import { motion } from "framer-motion";
import { Github, Cpu, Bot, AppWindow, Brain, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Face Recognition System",
    description: "Designed and deployed a real-time face recognition system for high-security environments, enabling automated identity verification, centralized monitoring, and blacklist-based alerts with 95%+ accuracy. Built with scalable REST APIs and a PostgreSQL-backed architecture.",
    tech: ["Python", "OpenCV", "FastAPI", "PostgreSQL", "TensorFlow"],
    github: "https://github.com/vasumani01/AI-Face-Recognition",
    color: "blue",
    icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  {
    title: "AI SEO Agent",
    description: "Architected a self-hosted AI automation agent to generate and publish 4+ SEO-optimized blogs per month. Integrated search analytics, generative AI, and automated workflows with editorial approval via Telegram and seamless cloud-based publishing.",
    tech: ["n8n", "Docker", "OpenAI API", "PostgreSQL", "Supabase", "Telegram"],
    github: "https://github.com/vasumani01/AI--SEO--agent",
    color: "purple",
    icon: <Bot className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Employee Management System",
    description: "Built a full-featured, responsive web application to streamline employee data management and organizational workflows. Scalable platform handling 100+ employee records, deployed on Vercel with CI/CD pipeline for fast load times and continuous delivery.",
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Vercel"],
    github: "https://github.com/vasumani01",
    color: "emerald",
    icon: <AppWindow className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Emotion Detection",
    description: "Machine learning model that detects human emotions from facial expressions using deep learning. Trained on image datasets to accurately classify emotions in real-time for human-computer interaction applications.",
    tech: ["Python", "Machine Learning", "Deep Learning", "Jupyter Notebook"],
    github: "https://github.com/vasumani01/Emotion-Detection",
    color: "orange",
    icon: <Brain className="w-6 h-6 text-orange-400" />
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
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-3xl overflow-hidden group relative flex flex-col h-full border border-glass-border transition-shadow shadow-lg"
            >
              {/* Subtle accent glow line at the top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-${project.color}-500 opacity-50`}></div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col z-10">
                
                {/* Header: Icon + Title */}
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 border-b border-white/10 pb-6">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl bg-${project.color}-500/10 flex items-center justify-center border border-${project.color}-500/20 shadow-inner`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Body: Description */}
                <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </motion.p>

                {/* Footer: Tech Stack + Links */}
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col gap-8 mt-auto">
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-sm font-medium px-4 py-1.5 rounded-lg bg-black/40 text-gray-200 border border-white/5 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm font-semibold text-gray-400 transition-colors uppercase tracking-widest"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
