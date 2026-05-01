import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

interface Project {
  id: string;
  label: string;
  year: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  aspect: string;
  colSpan: string;
}

const projects: Project[] = [
  {
    id: "01",
    label: "Academic Project",
    year: "2025",
    title: "AI-Powered Study Companion",
    description:
      "A machine learning application that analyzes study patterns and generates personalized revision schedules using spaced repetition algorithms.",
    image: project1,
    tags: ["Python", "TensorFlow", "React"],
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-9 md:col-start-1",
  },
  {
    id: "02",
    label: "Open Source",
    year: "2024",
    title: "Developer Toolkit CLI",
    description:
      "A command-line tool that automates boilerplate setup, linting, and deployment pipelines for student developer teams.",
    image: project2,
    tags: ["TypeScript", "Node.js", "CLI"],
    aspect: "aspect-square",
    colSpan: "md:col-span-5 md:col-start-8",
  },
  {
    id: "03",
    label: "Research",
    year: "2024",
    title: "Data Visualization Dashboard",
    description:
      "An interactive analytics platform visualizing campus sustainability metrics, built for the university's environmental research lab.",
    image: project3,
    tags: ["D3.js", "React", "PostgreSQL"],
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-6 md:col-start-2",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
    className={`${project.colSpan} group relative block`}
  >
    <div className="relative z-10 flex flex-col gap-8">
      <div
        className={`w-full ${project.aspect} bg-artifact rounded-sm overflow-hidden ring-1 ring-foreground/5 group-hover:ring-foreground/15 transition-all duration-700 relative shadow-2xl shadow-background/40`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-60 grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-background/30 backdrop-blur-[2px]">
          <span className="px-8 py-4 border border-foreground/20 hover:border-foreground/50 rounded-full text-xs tracking-widest uppercase bg-artifact/90 text-foreground transition-colors shadow-lg cursor-pointer">
            View Project
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 px-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-dust uppercase mb-3">
            <span>{project.id} / {project.label}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl mb-2 text-foreground leading-tight tracking-tight">
            {project.title}
          </h2>
          <p className="text-dust text-sm max-w-[40ch] leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap shrink-0">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.15em] text-dust uppercase border border-foreground/10 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-16 pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="size-1.5 bg-foreground rounded-full opacity-50" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-dust">
          Selected Projects
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-40 gap-x-12 items-start">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;