import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

import { LINKS, NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "./button";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prevAudioPlaying) => !prevAudioPlaying);
    setIsIndicatorActive((prevIndicatorActive) => !prevIndicatorActive);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isAudioPlaying) void audioElementRef.current?.play();
    else audioElementRef.current?.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-5">
            <a href="#hero" className="group flex items-center gap-2 transition hover:opacity-90">
              <img src="/img/logo.png" alt="Logo" className="w-10" />
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="font-zentry text-sm font-black uppercase tracking-wide text-white">
                  Parth
                </span>
                <span className="bg-red-600 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-white">
                  MARVEL
                </span>
              </div>
            </a>

            <Button
              id="join-button"
              rightIcon={TiLocationArrow}
              containerClass="marvel-join-btn md:flex hidden items-center justify-center gap-1"
            >
              Join Now
            </Button>
          </div>

          <div className="flex h-full items-center">
            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="marvel-nav-link font-general relative px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/80 transition-all duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Marvel red divider */}
              <div className="ml-4 hidden h-4 w-px bg-red-600/40 md:block" />

              <button
                onClick={toggleAudioIndicator}
                className="ml-2 flex items-center space-x-1 p-2 transition hover:opacity-75 sm:ml-4"
                title="Play Audio"
              >
                <audio
                  ref={audioElementRef}
                  src="/audio/loop.mp3"
                  className="hidden"
                  loop
                />

                {Array(4)
                  .fill("")
                  .map((_, i) => {
                    return (
                      <div
                        key={i + 1}
                        className={cn(
                          "indicator-line",
                          isIndicatorActive && "active"
                        )}
                        style={{
                          animationDelay: `${(i + 1) * 0.1}s`,
                          backgroundColor: isIndicatorActive ? "#ef4444" : "#fff",
                        }}
                      />
                    );
                  })}
              </button>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="transition hover:opacity-75"
                title="WhatsApp Us"
              >
                <FaWhatsapp className="size-5 text-white" />
              </a>

              {/* Hamburger menu button - mobile only */}
              <button
                onClick={toggleMobileMenu}
                className="flex flex-col justify-center gap-[5px] p-2 md:hidden"
                title="Menu"
              >
                <span
                  className={cn(
                    "block h-[2px] w-5 transition-all duration-300",
                    isMobileMenuOpen
                      ? "translate-y-[7px] rotate-45 bg-red-500"
                      : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-5 bg-white transition-all duration-300",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-5 transition-all duration-300",
                    isMobileMenuOpen
                      ? "-translate-y-[7px] -rotate-45 bg-red-500"
                      : "bg-white"
                  )}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu dropdown - Marvel themed */}
      <div
        className={cn(
          "absolute top-full right-0 left-0 overflow-hidden rounded-b-lg backdrop-blur-md transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "max-h-[500px] border-b border-red-600/30 bg-black/95"
            : "max-h-0"
        )}
      >
        {/* Red accent line at top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        <div className="flex flex-col items-center gap-1 py-6">
          {NAV_ITEMS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={closeMobileMenu}
              className="group relative w-48 py-2.5 text-center font-general text-xs uppercase tracking-wider text-white/70 transition-all duration-300 hover:text-white"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="relative z-10">{label}</span>
              <div className="absolute inset-0 origin-left scale-x-0 bg-red-600/10 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-red-600/30 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div className="mt-3 h-px w-24 bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

          <Button
            id="join-button-mobile"
            rightIcon={TiLocationArrow}
            containerClass="marvel-join-btn flex items-center justify-center gap-1 mt-3"
          >
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};
