import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    color: "neon-blue",
    skills: ["Python", "Java", "JavaScript"]
  },
  {
    title: "Web Development",
    color: "neon-purple",
    skills: ["HTML", "CSS", "React", "Bootstrap", "Angular basics"]
  },
  {
    title: "AI / ML",
    color: "cyan-400",
    skills: ["Machine Learning", "OpenCV", "Data Analysis", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    title: "Tools",
    color: "gray-300",
    skills: ["Git", "GitHub", "VS Code", "Linux basics"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold inline-block"
          >
            Technical <span className="text-blue-400">Skills</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass p-6 rounded-3xl flex flex-col h-full border border-glass-border hover:shadow-neon-blue/10 transition-shadow"
            >
              <h3 className={`text-xl font-bold mb-6 text-${category.color} tracking-wide uppercase border-b border-glass-border pb-4`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    drag
                    dragSnapToOrigin
                    dragElastic={0.2}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileDrag={{ scale: 1.1, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 hover:bg-white/10 hover:border-white/30 transition-colors shadow-sm cursor-grab active:cursor-grabbing"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
