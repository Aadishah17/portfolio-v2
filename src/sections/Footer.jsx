import { mySocials } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-10 pb-8 text-sm text-neutral-400 c-space">
      <div className="mb-8 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
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

        <div className="flex items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Aadi Shah</p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
