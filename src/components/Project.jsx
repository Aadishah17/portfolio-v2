const Project = ({ title, description, subDescription, github, live, tags }) => (
  <article className="border-b border-white/10 py-8 first:pt-0 last:border-b-0">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400 sm:text-base">
          {description}
        </p>
      </div>
      <div className="flex shrink-0 gap-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source code for ${title}`}
            className="text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            GitHub ↗
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live project ${title}`}
            className="text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Live site ↗
          </a>
        )}
      </div>
    </div>

    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500" aria-label={`${title} technologies`}>
      {tags.map((tag) => (
        <li key={tag.id}>{tag.name}</li>
      ))}
    </ul>

    <details className="mt-5 max-w-3xl text-sm text-neutral-400">
      <summary className="w-fit cursor-pointer select-none marker:text-neutral-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        What I built
      </summary>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-neutral-600">
        {subDescription.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </details>
  </article>
);

export default Project;
