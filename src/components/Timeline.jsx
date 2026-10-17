export const Timeline = ({ data }) => (
  <div className="c-space section-spacing">
    <h2 className="text-heading">Experience &amp; education</h2>
    <ol className="mt-8 max-w-4xl border-l border-white/10">
      {data.map((item) => (
        <li key={`${item.title}-${item.date}`} className="relative pb-10 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-neutral-500 ring-4 ring-primary"
          />
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {item.date}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{item.job}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-400 marker:text-neutral-600">
            {item.contents.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);
