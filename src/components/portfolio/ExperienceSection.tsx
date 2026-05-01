import { motion } from "framer-motion";

interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  type: "work" | "education";
}

const experiences: Experience[] = [
  {
    period: "2023 — Present",
    role: "BSc Computer Science",
    organization: "University Name",
    description:
      "Pursuing a degree with focus on software engineering, data structures, and artificial intelligence. Dean's List recipient with a 3.8 GPA.",
    type: "education",
  },
  {
    period: "Summer 2025",
    role: "Software Engineering Intern",
    organization: "Tech Company",
    description:
      "Developed microservices for the platform's notification system, reducing latency by 40%. Collaborated with a cross-functional team of 12 engineers.",
    type: "work",
  },
  {
    period: "2024 — Present",
    role: "Teaching Assistant",
    organization: "CS Department",
    description:
      "Assisting in Introduction to Algorithms. Conducting weekly office hours and grading assignments for 150+ students.",
    type: "work",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    organization: "University Tech Club",
    description:
      "Built and maintained the club's website and internal tools. Led a team of 4 developers using React and Firebase.",
    type: "work",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-16 pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="size-1.5 bg-foreground rounded-full opacity-50" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-dust">
          Journey & Experience
        </span>
      </motion.div>

      <div className="max-w-4xl">
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-foreground/5 last:border-0 hover:border-foreground/15 transition-colors"
            >
              <div className="md:col-span-3 flex items-start gap-3">
                <div className="mt-2 size-1.5 rounded-full bg-dust/30 group-hover:bg-foreground/50 transition-colors shrink-0" />
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-dust block">
                    {exp.period}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-dust/50 block mt-1">
                    {exp.type === "education" ? "Education" : "Experience"}
                  </span>
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1 tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-dust text-sm mb-3 italic font-serif">
                  {exp.organization}
                </p>
                <p className="text-dust text-sm leading-relaxed max-w-[50ch]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;