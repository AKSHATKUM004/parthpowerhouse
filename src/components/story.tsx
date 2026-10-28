import gsap from "gsap";
import { useRef } from "react";

import { AnimatedTitle } from "./animated-title";
import { Button } from "./button";
import { RoundedCorners } from "./rounded-corners";

export const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="trainers" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          meet the team
        </p>

        <div className="relative size-full">
          <AnimatedTitle containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10">
            {"Our E<b>x</b>pert <br /> Train<b>e</b>rs"}
          </AnimatedTitle>

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/trainer.jpeg"
                  alt="Expert Trainer"
                  className="object-cover object-bottom"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-52 flex w-full justify-center px-6 sm:-mt-80 md:me-44 md:-mt-64 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="font-circular-web mt-3 max-w-xs text-center text-sm text-violet-50 sm:max-w-sm sm:text-base md:text-start">
              Led by certified professionals with decades of combined
              experience, our trainers are dedicated to helping you achieve your
              fitness goals.
            </p>

            <Button id="session-button" containerClass="mt-5">
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
