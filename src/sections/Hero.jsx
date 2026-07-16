import React, { lazy, Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";

const AstronautCanvas = lazy(() => import("../components/AstronautCanvas"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/10 backdrop-blur-xs">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-royal border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-semibold tracking-wider text-neutral-400">Loading 3D Scene...</p>
            </div>
          </div>
        }>
          <AstronautCanvas isMobile={isMobile} />
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;
