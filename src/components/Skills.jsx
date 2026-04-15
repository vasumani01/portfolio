import { motion } from "framer-motion";
import { Code2, BrainCircuit, LayoutTemplate, Database, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    color: "neon-blue",
    icon: <Code2 className="w-7 h-7" />,
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    title: "AI & Machine Learning",
    color: "neon-purple",
    icon: <BrainCircuit className="w-7 h-7" />,
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Deep Learning", icon: null },
      { name: "Computer Vision", icon: null }
    ]
  },
  {
    title: "Frontend",
    color: "cyan-400",
    icon: <LayoutTemplate className="w-7 h-7" />,
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    title: "Backend & Databases",
    color: "green-400",
    icon: <Database className="w-7 h-7" />,
    skills: [
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "REST APIs", icon: null },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQL", icon: null },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "gray-300",
    icon: <Cloud className="w-7 h-7" />,
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/ff6666" }
    ]
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto"
        >
          {SKILL_CATEGORIES.map((category, idx) => {
            const colSpanClass = idx < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`glass p-6 md:p-8 rounded-[2rem] border border-glass-border flex flex-col items-center text-center transition-all ${colSpanClass}`}
              >
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-${category.color} shadow-inner`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-white tracking-widest uppercase">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-auto w-full">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-2 flex items-center gap-2 rounded-xl bg-black/50 border border-white/5 text-sm text-gray-200 font-medium tracking-wide shadow-sm"
                    >
                      {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
