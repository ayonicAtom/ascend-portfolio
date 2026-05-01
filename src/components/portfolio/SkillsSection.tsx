import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript / TypeScript", level: 90, category: "Languages" },
  { name: "Python", level: 85, category: "Languages" },
  { name: "React & Next.js", level: 88, category: "Frameworks" },
  { name: "Node.js", level: 80, category: "Frameworks" },
  { name: "PostgreSQL & MongoDB", level: 75, category: "Databases" },
  { name: "Git & CI/CD", level: 82, category: "DevOps" },
  { name: "Machine Learning (Scikit, TF)", level: 70, category: "Data Science" },
  { name: "UI/UX Design (Figma)", level: 78, category: "Design" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 md:px-16 pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="size-1.5 bg-foreground rounded-full opacity-50" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-dust">
          Technical Skills
        </span>
      </motion.div>

      <div className="max-w-3xl">
        <div className="bg-artifact p-8 md:p-12 rounded-sm ring-1 ring-foreground/5 shadow-2xl shadow-background/60">
          <div className="flex flex-col divide-y divide-foreground/5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="py-5 group cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-foreground font-medium text-sm md:text-base transition-colors group-hover:text-foreground/80">
                    {skill.name}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-dust">
                    {skill.category}
                  </span>
                </div>
                <div className="w-full h-[2px] bg-foreground/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                    className="h-full bg-foreground/30 group-hover:bg-foreground/50 transition-colors rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;