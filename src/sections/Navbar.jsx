import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experiences" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navigation({ activeSection, onClickItem }) {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");
        return (
          <li key={item.name} className="relative max-sm:w-full max-sm:text-center">
            <a
              href={item.href}
              onClick={onClickItem}
              className={`relative px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200 block ${
                isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.name}
              {isActive && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-royal via-lavender to-aqua rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

        const sections = navItems.map((item) => item.href.replace("#", ""));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection((prev) => (prev !== sections[i] ? sections[i] : prev));
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-primary/70 border-b border-white/10 shadow-lg shadow-black/20 py-2"
          : "backdrop-blur-md bg-primary/30 py-3"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white group"
          >
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:text-white transition-colors">
              Aadi Shah
            </span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none sm:hidden transition-colors"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="size-6"
              alt="toggle menu"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block sm:hidden overflow-hidden border-b border-white/10 bg-primary/95 backdrop-blur-2xl"
          >
            <nav className="py-6 c-space">
              <Navigation
                activeSection={activeSection}
                onClickItem={() => setIsOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
