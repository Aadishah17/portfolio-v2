import React, { lazy, Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";

const AstronautCanvas = lazy(() => import("../components/AstronautCanvas"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <ParallaxBackground />
      
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/10 backdrop-blur-xs">
            <div className="flex flex-col items-center gap-3">
              <div className="size-10 border-4 border-royal border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-semibold tracking-wider text-neutral-400">Loading 3D Experience...</p>
            </div>
          </div>
        }>
          <AstronautCanvas isMobile={isMobile} />
        </Suspense>
      </figure>

      {/* Floating Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-white/50 transition-colors">
          <div className="w-1.5 h-2.5 bg-royal rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
