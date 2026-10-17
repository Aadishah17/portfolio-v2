const certifications = [
  {
    title: "App Development with Swift – Associate",
    issuer: "Certiport · 925/1000",
    date: "October 2026",
  },
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "September 2025",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "September 2025",
  },
];

const Achievements = () => (
  <section className="c-space section-spacing" id="achievements">
    <h2 className="text-heading">A few more things</h2>
    <div className="mt-8 grid max-w-4xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div className="border-t border-white/10 pt-5">
        <h3 className="text-sm font-medium text-neutral-400">LeetCode</h3>
        <p className="mt-5 text-5xl font-semibold tracking-tight text-white">1,780</p>
        <p className="mt-1 text-sm text-neutral-500">Highest contest rating</p>
        <p className="mt-5 text-sm text-neutral-300">470+ problems solved</p>
        <a
          href="https://leetcode.com/u/Aadi__17"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-neutral-400 underline decoration-white/20 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          LeetCode profile ↗
        </a>
      </div>

      <div className="border-t border-white/10 pt-5">
        <h3 className="text-sm font-medium text-neutral-400">Certifications</h3>
        <ul className="mt-5 divide-y divide-white/10">
          {certifications.map((certification) => (
            <li key={certification.title} className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">{certification.title}</p>
                <p className="mt-1 text-xs text-neutral-500">{certification.issuer}</p>
              </div>
              <time className="text-xs text-neutral-500">{certification.date}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Achievements;
