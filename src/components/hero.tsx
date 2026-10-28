import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import { Button } from "./button";
import { VIDEO_LINKS } from "@/constants";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const totalVideos = 3;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const VIDEO_KEYS = ["hero1", "hero2", "hero3"] as const;
  const getVideoSrc = (i: number) => {
    const key = VIDEO_KEYS[i - 1]; // Subtract 1 because the array is 0-indexed, but the video indices are 1-based
    return VIDEO_LINKS[key];
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prevVideos) => prevVideos + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) setIsLoading(false);
  }, [loadedVideos]);

  // Fallback: dismiss loading after 5s even if videos haven't loaded (mobile)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            void nextVideoRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-40 cursor-pointer overflow-hidden rounded-lg sm:size-64">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                playsInline
                id="current-video"
                className="size-40 origin-center scale-150 object-cover object-center sm:size-64"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            id="next-video"
            className="absolute-center invisible absolute z-20 size-40 object-cover object-center sm:size-64"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
          P<b>o</b>werhouse
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <div className="mb-2 flex items-center gap-1.5 sm:gap-2">
              <span className="font-general text-[9px] font-bold uppercase tracking-wide text-white/80 sm:text-[11px]">
                Parth Powerhouse
              </span>
              <span className="text-[9px] font-bold text-white/40 sm:text-[11px]">×</span>
              <span className="bg-red-600 px-1.5 py-px text-[8px] font-black uppercase tracking-wider text-white sm:px-2 sm:py-0.5 sm:text-[10px]">
                MARVEL
              </span>
              <span className="font-general text-[7px] uppercase text-white/40 sm:text-[8px]">
                EDITION
              </span>
            </div>

            <h1 className="special-font hero-heading text-blue-100">
              P<b>a</b>rth
            </h1>

            <h2 className="font-zentry text-2xl font-black uppercase text-blue-100/80 sm:text-4xl md:text-5xl">
              Powerhouse
            </h2>

            <p className="font-robert-regular mt-3 mb-5 max-w-52 text-sm text-blue-100 sm:max-w-64 sm:text-base">
              Transform Your Body <br />
              Unleash Your Potential
            </p>

            <Button
              id="start-training"
              leftIcon={TiLocationArrow}
              containerClass="bg-yellow-300 flex-center gap-1"
            >
              Start Training
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
        P<b>o</b>werhouse
      </h1>
    </section>
  );
};
