import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { CheckCircle2, GraduationCap, Laptop, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Laptop className="w-6 h-6 text-neon-blue" />,
    title: "Web Developer Intern — Femtosoft Technologies",
    description: "Built dynamic, responsive websites using HTML5, CSS3, and JavaScript. Reduced page load times by 25% through front-end optimization techniques.",
    date: "Jun – Jul 2025"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-neon-purple" />,
    title: "B.E. Computer Science & Engineering",
    description: "Loyola Institute of Technology, Kanyakumari, Tamil Nadu. Focused on AI, Machine Learning, and modern software development.",
    date: "2022 – 2026"
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: "AI/ML & Deep Learning Certifications",
    description: "Certified in AI/ML (2024) and Deep Learning (2025) from Feathers Softwares. Mastered neural networks, computer vision, and model deployment.",
    date: "2024 – 2025"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
    title: "C Programming Certification — NSDCA",
    description: "National Skill Development Certification Authority recognized proficiency in C programming fundamentals and systems-level development.",
    date: "2023"
  }
];

export function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold inline-block"
          >
            Experience & <span className="text-indigo-400">Certifications</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Animated Timeline Line (hidden on mobile, visible on md+) */}
          <motion.div 
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="hidden md:block absolute left-[3.25rem] top-8 bottom-8 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-cyan-400 rounded-full z-0"
          />

          <div className="space-y-8 relative z-10">
            {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className="glass p-6 md:p-8 rounded-3xl border border-glass-border flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple opacity-50 transition-opacity"></div>
              
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300 mt-2 md:mt-0 w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
