import React, { useState, lazy, Suspense } from "react";

const ProjectDetails = lazy(() => import("./ProjectDetails"));

const Project = ({
  title,
  description,
  subDescription,
  github,
  live,
  image,
  layout,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 gap-6 transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl"
        onMouseEnter={() => setPreview({ image, layout })}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-2xl font-bold text-white group-hover:text-royal-300 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-midnight border border-white/10 text-neutral-300 shadow-xs"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer shrink-0"
        >
          View Details
          <img src="/assets/arrow-right.svg" className="size-4 group-hover:translate-x-1 transition-transform" alt="arrow" />
        </button>
      </div>

      {isHidden && (
        <Suspense fallback={null}>
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            layout={layout}
            tags={tags}
            github={github}
            live={live}
            closeModal={() => setIsHidden(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default Project;
