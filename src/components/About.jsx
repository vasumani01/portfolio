import { motion } from "framer-motion";
import { BrainCircuit, Code2, LayoutTemplate, Server } from "lucide-react";

const ABOUT_HIGHLIGHTS = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-neon-purple mb-4" />,
    title: "AI & Computer Vision",
    description: "Building intelligent systems with TensorFlow, OpenCV, and deep learning for real-world applications like face recognition."
  },
  {
    icon: <Code2 className="w-8 h-8 text-neon-blue mb-4" />,
    title: "Full-Stack Developer",
    description: "Crafting modern, responsive web apps with React.js, HTML5, CSS3, and JavaScript — from UI to deployment on Vercel & Netlify."
  },
  {
    icon: <Server className="w-8 h-8 text-cyan-400 mb-4" />,
    title: "Backend & APIs",
    description: "Developing scalable REST APIs with FastAPI, backed by PostgreSQL and Supabase databases for production-grade systems."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-yellow-400 mb-4" />,
    title: "Automation & DevOps",
    description: "Automating workflows with n8n, Docker, and CI/CD pipelines — deploying AI agents and streamlining development processes."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Detail-oriented and highly motivated professional with hands-on experience in artificial intelligence 
            and modern software development. Proven ability to build intelligent systems, scalable web applications, 
            and automation-driven solutions. Currently pursuing B.E. in Computer Science at Loyola Institute of Technology, 
            Kanyakumari, Tamil Nadu (2022–2026).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_HIGHLIGHTS.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: [0, -10, 0] }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.5, delay: idx * 0.1 },
                y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.2 }
              }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass p-8 rounded-3xl border border-glass-border hover:border-neon-blue/50 transition-colors group"
            >
              <motion.div 
                className="transform transition-transform"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, ease: "backOut" }}
              >
                {col.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:via-cyan-300 group-hover:to-neon-blue group-hover:bg-[length:200%_auto] group-hover:animate-gradient transition-all">
                {col.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
