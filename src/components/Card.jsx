import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-12 h-12 p-2 rounded-xl bg-midnight/80 ring ring-white/10 shadow-lg cursor-grab hover:ring-white/30 hover-animation"
      src={image}
      style={style}
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.8}
    />
  ) : (
    <motion.div
      className="absolute px-5 py-2 text-sm sm:text-base font-semibold text-center rounded-full ring ring-white/10 shadow-xl bg-midnight/80 backdrop-blur-md text-neutral-200 cursor-grab whitespace-nowrap select-none hover:ring-white/30 hover-animation"
      style={style}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.8}
    >
      {text}
    </motion.div>
  );
};

export default Card;
