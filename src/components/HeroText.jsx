const HeroText = () => (
  <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-28 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
    <div>
      <p className="text-sm text-neutral-400">
        Computer science student <span aria-hidden="true">·</span> Parul University <span aria-hidden="true">·</span>{" "}
        <span className="whitespace-nowrap">expected May 2027</span>
      </p>
      <h1
        id="hero-title"
        className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        I build software from GPU kernels to offline maps.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
        My projects range from CUDA memory benchmarks and a .NET print system to Android and iOS apps.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          See my projects
        </a>
        <a
          href="/Aadi_Shah_Resume.pdf"
          download="Aadi_Shah_Resume.pdf"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Download resume
        </a>
      </div>
    </div>

    <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
        CUDADL · memory-pool benchmark
      </p>
      <div className="mt-8 flex items-end gap-3">
        <p className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">253×</p>
        <p className="pb-2 text-sm leading-snug text-neutral-400">
          lower allocation latency
        </p>
      </div>
      <div className="mt-8 space-y-3 border-t border-white/10 pt-5 font-mono text-sm">
        <div className="flex justify-between gap-4 text-neutral-400">
          <span>cudaMalloc / cudaFree</span>
          <span>3,257 ms</span>
        </div>
        <div className="flex justify-between gap-4 text-white">
          <span>stream-ordered pool</span>
          <span>12.87 ms</span>
        </div>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500">
        64 MB buffers · 1,000 allocations · RTX 5070 laptop benchmark
      </p>
    </aside>
  </div>
);

export default HeroText;
