import { motion } from "framer-motion";
import { BrainCircuit, Code2, LayoutTemplate, Lightbulb } from "lucide-react";

const ABOUT_HIGHLIGHTS = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-neon-purple mb-4" />,
    title: "AI/ML Enthusiast",
    description: "Passionate about building intelligent systems and deploying machine learning models."
  },
  {
    icon: <Code2 className="w-8 h-8 text-neon-blue mb-4" />,
    title: "Python Developer",
    description: "Experienced in crafting efficient backends, scripts, and data processing pipelines."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-cyan-400 mb-4" />,
    title: "Frontend Developer",
    description: "Creating modern, interactive, and beautiful user interfaces with React."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />,
    title: "Problem Solver",
    description: "Enjoying tackling complex challenges with elegant and robust code solutions."
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
            I am a Computer Science Engineering student passionate about Artificial Intelligence, 
            Machine Learning, and modern web development. I enjoy building intelligent systems, 
            solving real-world problems with code, and continuously improving my technical skills.
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
