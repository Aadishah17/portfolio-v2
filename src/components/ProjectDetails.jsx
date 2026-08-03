import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  layout,
  tags,
  github,
  live,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-md bg-black/60 p-4 sm:p-6">
      <motion.div
        className="relative max-w-3xl w-full border shadow-2xl rounded-3xl bg-gradient-to-br from-midnight via-primary to-navy border-white/15 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute p-2.5 rounded-full top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors z-20 cursor-pointer text-white"
        >
          <img src="/assets/close.svg" className="size-5" alt="close" />
        </button>

        {layout === "portrait" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 gap-6 sm:gap-8 items-center">
            {/* Left side: Phone screenshot frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative rounded-3xl border border-white/15 bg-midnight/90 p-2 shadow-2xl w-44 sm:w-52">
                <img
                  src={image}
                  alt={title}
                  className="rounded-2xl w-full h-auto object-contain border border-white/10"
                />
              </div>
            </div>
            {/* Right side: details */}
            <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
              <div>
                <h3 className="mb-2 text-2xl sm:text-3xl font-extrabold text-white">{title}</h3>
                <p className="mb-4 text-neutral-300 text-sm leading-relaxed">{description}</p>
                <div className="max-h-56 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {subDescription.map((subDesc, index) => (
                    <p className="text-xs sm:text-sm font-normal text-neutral-400 leading-relaxed flex items-start gap-2" key={index}>
                      <span className="text-royal font-bold">•</span>
                      <span>{subDesc}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2 items-center">
                  {tags.map((tag) => (
                    tag.path ? (
                      <img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        title={tag.name}
                        className="rounded-lg size-8 hover:scale-110 transition-transform"
                      />
                    ) : (
                      <span
                        key={tag.id}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tag.name}
                      </span>
                    )
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-all"
                    >
                      GitHub
                      <img src="/assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-royal to-lavender text-white shadow-md hover:opacity-90 transition-all"
                    >
                      View Live / Release
                      <img src="/assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Landscape layout */
          <div className="p-6 sm:p-8">
            <img
              src={image}
              alt={title}
              className="w-full rounded-2xl max-h-64 object-cover border border-white/10 mb-6"
            />
            <h3 className="mb-2 text-2xl sm:text-3xl font-extrabold text-white">{title}</h3>
            <p className="mb-4 text-neutral-300 text-sm leading-relaxed">{description}</p>
            <div className="max-h-48 overflow-y-auto space-y-2 pr-2 mb-6">
              {subDescription.map((subDesc, index) => (
                <p className="text-xs sm:text-sm font-normal text-neutral-400 leading-relaxed flex items-start gap-2" key={index}>
                  <span className="text-royal font-bold">•</span>
                  <span>{subDesc}</span>
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 items-center">
                {tags.map((tag) => (
                  tag.path ? (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      title={tag.name}
                      className="rounded-lg size-8 hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span
                      key={tag.id}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag.name}
                    </span>
                  )
                ))}
              </div>

              <div className="flex items-center gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-all"
                  >
                    GitHub
                    <img src="/assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                  </a>
                )}
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-royal to-lavender text-white shadow-md hover:opacity-90 transition-all"
                  >
                    Live Demo
                    <img src="/assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
