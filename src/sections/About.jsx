import { useRef, lazy, Suspense } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const Globe = lazy(() =>
  import("../components/globe").then((m) => ({ default: m.Globe }))
);

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.webp"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aadi Shah</p>
            <p className="subtext">
              I am a software developer and computer science student passionate about engineering modern full-stack web architectures, mobile client systems, and AI-integrated solutions.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500 font-bold opacity-20 select-none">
              BUILD TO SCALE
            </p>
            <Card
              style={{ rotate: "-5deg", top: "5%", left: "5%" }}
              text="MERN Stack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "12%", left: "35%" }}
              text="Jetpack Compose"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-8deg", top: "8%", left: "68%" }}
              text="Gemini API"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "30%", left: "15%" }}
              text="REST APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "32%", left: "52%" }}
              text="OOP & DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "8deg", top: "50%", left: "30%" }}
              text="MVVM & Hilt"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "48%", left: "60%" }}
              text="Machine Learning"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "70%", left: "8%" }}
              text="AWS Cloud"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "12deg", top: "72%", left: "42%" }}
              text="Docker & Git"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "5deg", top: "68%", left: "70%" }}
              text="Python & C++"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-5deg", top: "88%", left: "22%" }}
              text="Swift & Kotlin"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "8deg", top: "85%", left: "58%" }}
              text="Java & JavaScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "45%", left: "2%" }}
              text="MySQL & MongoDB"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and ready to work anywhere (except Antarctica! ❄️)
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Suspense fallback={<div className="size-[30rem] flex items-center justify-center text-neutral-400 text-sm">Loading Globe...</div>}>
              <Globe />
            </Suspense>
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <CopyEmailButton />
              <a
                href="/Aadi_Shah_Resume.pdf"
                download="Aadi_Shah_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-full border border-white/10 bg-midnight hover:bg-midnight/80 hover-animation cursor-pointer text-white w-[12rem] text-center"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[55%]">
            <p className="headText">Tech Stack</p>
            <div className="subtext mt-2 space-y-1 text-xs">
              <p><strong>Languages:</strong> Java, Python, JS/TS, C++, Kotlin, SQL, Swift, Dart</p>
              <p><strong>Frameworks:</strong> React, Next.js, Node, Express, Redux, Jetpack Compose, Tailwind</p>
              <p><strong>Databases:</strong> MySQL, MongoDB, Firebase, Supabase</p>
              <p><strong>Tools:</strong> Git, Docker, Android Studio, VS Code, Postman, AWS</p>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
