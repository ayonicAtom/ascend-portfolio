import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-16 py-8 flex items-center justify-between"
    >
      <div className="font-serif text-xl tracking-tight text-foreground">
        Your Name
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative text-[10px] tracking-[0.2em] uppercase text-dust hover:text-foreground transition-colors duration-300 flex items-center gap-3 group"
          >
            <span
              className={`h-px bg-dust/30 transition-all duration-300 ${
                hoveredItem === item ? "w-6 bg-foreground" : "w-3"
              }`}
            />
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;