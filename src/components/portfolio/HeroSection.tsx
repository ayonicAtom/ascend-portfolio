import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="about" className="max-w-[60ch] mb-32 md:mb-48 pt-12 relative z-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="size-1.5 bg-foreground rounded-full opacity-50" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-dust">
          Portfolio · 2026
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className="font-serif text-4xl sm:text-5xl md:text-7xl tracking-tight text-balance leading-[1.1] mb-10 text-foreground"
      >
        Crafting digital experiences through code & creativity.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="text-dust text-lg md:text-xl text-pretty leading-relaxed font-light max-w-[45ch]"
      >
        I'm a Computer Science student passionate about building intuitive interfaces, 
        exploring data science, and contributing to open-source projects. Currently pursuing 
        my degree and seeking impactful internship opportunities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-6 text-xs uppercase tracking-[0.15em] text-dust"
      >
        <div className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-dust/50" />
          <span>University Student</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-dust/50" />
          <span>Class of 2027</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-dust/50" />
          <span>Open to Internships</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;