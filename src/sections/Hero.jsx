import HeroText from "../components/HeroText";

const Hero = () => (
  <section
    className="scroll-mt-24 flex min-h-svh items-center c-space"
    id="home"
    aria-labelledby="hero-title"
  >
    <HeroText />
  </section>
);

export default Hero;
