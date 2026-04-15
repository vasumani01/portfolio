import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { CheckCircle2, GraduationCap, Laptop, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-neon-blue" />,
    title: "AI/ML Course Completed",
    description: "Mastered fundamental concepts of Machine Learning, Deep Learning, and Neural Networks.",
    date: "Recent"
  },
  {
    icon: <Laptop className="w-6 h-6 text-neon-purple" />,
    title: "Building Real-World ML Projects",
    description: "Developed and deployed functional models like Face Detection and Emotion Recognition systems.",
    date: "Ongoing"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
    title: "Learning Modern Frontend",
    description: "Acquired skills in React, Vite, and Tailwind CSS to build dynamic and responsive interfaces.",
    date: "Continuous"
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: "Practicing Coding Challenges",
    description: "Actively solving algorithmic problems to enhance analytical and problem-solving abilities.",
    date: "Daily"
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
            Learning <span className="text-indigo-400">Journey</span>
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
              whileHover={{ scale: 1.02, x: idx % 2 === 0 ? 10 : -10 }}
              className="glass p-6 md:p-8 rounded-3xl border border-glass-border flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
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
