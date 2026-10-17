import { mySocials } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-10 pb-8 text-sm text-neutral-400 c-space">
      <div className="mb-8 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Availability Status */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>Open to Software Engineering Opportunities</span>
        </div>

        {/* Middle: Social Links */}
        <div className="flex items-center gap-4">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center size-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all hover:scale-110"
            >
              <img src={social.icon} className="size-4" alt={social.name} />
            </a>
          ))}
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Aadi Shah. Built to scale.</p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
