const About = () => (
  <section className="c-space section-spacing" id="about">
    <h2 className="text-heading">A bit about me</h2>

    <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-neutral-400">
        <p>
          I’m studying computer science at Parul University and am based in Mumbai. I like projects where the hard part is a real constraint: getting a CUDA kernel to run faster, recovering print jobs after a worker failure, or navigating without an internet connection.
        </p>
        <p>
          At ZM Lifestyle, I shipped React dashboard features and fixed bugs in an existing codebase as part of a five-person team.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <h3 className="text-sm font-medium text-white">What I’ve been using</h3>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="text-sm font-medium text-neutral-300">GPU systems</dt>
            <dd className="mt-1 text-sm text-neutral-500">C++17, CUDA, cuBLAS, CMake</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-neutral-300">Backend</dt>
            <dd className="mt-1 text-sm text-neutral-500">C#, .NET 10, PostgreSQL, Azure Service Bus</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-neutral-300">Mobile</dt>
            <dd className="mt-1 text-sm text-neutral-500">Kotlin, Jetpack Compose, Swift, SwiftUI</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-neutral-300">Web</dt>
            <dd className="mt-1 text-sm text-neutral-500">React, Node.js, Express, MongoDB</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

export default About;
