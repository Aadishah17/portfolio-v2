import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Full-Stack", "Mobile", "Backend", "AI-Integrated", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-24 text-center md:mt-36 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-royal/30 bg-royal/10 text-royal-300 text-xs font-semibold w-fit"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for New Projects & Roles
        </motion.div>

        <motion.h1
          className="text-4xl font-semibold tracking-tight text-white/90"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          Hi, I'm <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent font-bold">Aadi Shah</span>
        </motion.h1>

        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-5xl font-semibold text-neutral-300 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="my-1"
          >
            <FlipWords
              words={words}
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-lavender text-7xl lg:text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-400 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Modern & Scalable Systems
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-8 z-20"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-royal to-lavender text-white shadow-lg shadow-royal/25 hover:shadow-royal/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Explore My Work
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="/Aadi_Shah_Resume.pdf"
              download="Aadi_Shah_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume PDF
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-5 md:hidden c-space items-center">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-royal/30 bg-royal/10 text-royal-300 text-xs font-semibold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          Open to Opportunities
        </motion.div>

        <motion.p
          className="text-3xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aadi Shah
        </motion.p>

        <div className="flex flex-col items-center">
          <motion.p
            className="text-4xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>

          <motion.p
            className="text-3xl font-bold text-neutral-400 mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Applications
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full max-w-xs z-20"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a
              href="#work"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-royal to-lavender text-white shadow-md shadow-royal/20 active:scale-95 transition-all"
            >
              View Projects
            </a>
            <a
              href="/Aadi_Shah_Resume.pdf"
              download="Aadi_Shah_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white active:scale-95 transition-all"
            >
              Resume PDF
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
