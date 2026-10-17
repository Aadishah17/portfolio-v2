import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 12, stiffness: 60 });
  const springY = useSpring(y, { damping: 12, stiffness: 60 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 24);
    y.set(e.clientY + 24);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-royal">
          Featured Engineering Work
        </span>
        <h2 className="text-heading">Selected Projects</h2>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 h-[1px] w-full" />

      <div className="divide-y divide-white/5">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`fixed top-0 left-0 z-50 object-cover rounded-2xl shadow-2xl pointer-events-none border border-white/20 ring-1 ring-white/10 backdrop-blur-md hidden lg:block ${
            preview.layout === "portrait" ? "w-48 h-84" : "w-84 h-54"
          }`}
          src={preview.image}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
