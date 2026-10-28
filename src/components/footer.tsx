import { SOCIAL_LINKS } from "@/constants";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative w-screen overflow-visible text-white" style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
      {/* Deadpool peeking over - centered on mobile, right on desktop */}
      <div className="absolute -top-[60px] left-1/2 z-10 -translate-x-1/2 sm:-top-14 md:-top-20 md:left-auto md:right-16 md:translate-x-0 lg:-top-32 lg:right-24">
        <img
          src="/img/deadpool.png"
          alt="Deadpool"
          className="h-24 w-auto object-contain drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)] sm:h-24 md:h-28 lg:h-32"
        />
      </div>

      {/* Red accent line at top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="container mx-auto px-5 pt-10 pb-4 sm:px-8 sm:pt-8 md:pt-5">
        {/* Main content */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Brand + contact */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="text-sm font-bold tracking-wide">
              PARTH POWERHOUSE{" "}
              <span className="bg-red-600 px-1.5 py-px text-[8px] font-black uppercase tracking-wider">
                MARVEL
              </span>
            </h3>
            <div className="flex flex-col items-center gap-1 text-xs text-white/60 md:flex-row md:flex-wrap md:gap-x-4">
              <a href="tel:+916207641454" className="flex items-center gap-1 transition hover:text-red-400">
                <FaPhone className="size-2.5" />
                +91 6207641454
              </a>
              <a href="mailto:parthpowerhouse@gmail.com" className="flex items-center gap-1 transition hover:text-red-400">
                <FaEnvelope className="size-2.5" />
                parthpowerhouse@gmail.com
              </a>
            </div>
            <span className="flex items-start gap-1 text-center md:text-left">
              <FaMapMarkerAlt className="mt-0.5 size-2.5 shrink-0 text-red-500/60" />
              <span className="max-w-56 text-[10px] leading-tight text-white/40 sm:max-w-64">
                Middle of Neelam Hospital & Palki Marriage Hall, Jodhardih More, Chas Bokaro, 827013
              </span>
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-5">
            {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg text-white/70 transition-colors duration-300 hover:text-red-500"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright + links */}
          <div className="flex flex-col items-center gap-1 text-xs md:items-end">
            <p className="text-white/60">
              &copy; <strong className="text-white/80">PARTH POWERHOUSE</strong> {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-white/40">
              <a href="#" className="transition hover:text-red-400">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="transition hover:text-red-400">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 mb-3 h-px w-full bg-white/10" />

        {/* Developed by watermark */}
        <div className="flex justify-center">
          <a
            href="https://stackup.digital"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/25 transition-all duration-300 hover:text-red-400"
          >
            Developed by{" "}
            <span className="font-bold text-white/40 transition-colors duration-300 group-hover:text-red-400">
              STACK-UP
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
