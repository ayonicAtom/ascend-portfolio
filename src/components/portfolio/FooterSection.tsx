import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer id="contact" className="px-6 md:px-16 mt-16 border-t border-foreground/5 pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
      >
        <div className="max-w-[35ch]">
          <div className="font-serif text-2xl md:text-3xl text-foreground/90 leading-tight mb-4 tracking-tight">
            Let's connect and build
            <br />
            <span className="italic text-dust">something meaningful</span>.
          </div>
          <p className="text-dust text-sm leading-relaxed mt-4">
            Always open to collaborations, research opportunities, and interesting conversations.
          </p>
        </div>

        <nav className="flex flex-col gap-4 text-[10px] tracking-[0.2em] text-dust uppercase">
          <a
            href="mailto:your.email@university.edu"
            className="hover:text-foreground transition-colors flex items-center gap-4 group"
          >
            <span className="h-px w-4 bg-dust/30 group-hover:w-8 group-hover:bg-foreground transition-all duration-300" />
            Email
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors flex items-center gap-4 group"
          >
            <span className="h-px w-4 bg-dust/30 group-hover:w-8 group-hover:bg-foreground transition-all duration-300" />
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors flex items-center gap-4 group"
          >
            <span className="h-px w-4 bg-dust/30 group-hover:w-8 group-hover:bg-foreground transition-all duration-300" />
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors flex items-center gap-4 group"
          >
            <span className="h-px w-4 bg-dust/30 group-hover:w-8 group-hover:bg-foreground transition-all duration-300" />
            Resume / CV
          </a>
        </nav>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-foreground/5">
        <p className="text-[10px] tracking-[0.15em] uppercase text-dust/40">
          © 2026 · Designed & built with care
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;