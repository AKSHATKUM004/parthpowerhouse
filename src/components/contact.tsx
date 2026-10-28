import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { Button } from "./button";

gsap.registerPlugin(ScrollTrigger);

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax floating effect on left images
      gsap.to(".contact-img-left", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Parallax floating effect on right images (opposite direction)
      gsap.to(".contact-img-right", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // CTA text reveal
      gsap.from(".contact-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-label",
          start: "top 85%",
        },
      });

      // Main heading scale-up entrance
      gsap.from(".contact-heading", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
        },
      });

      // Button pop-in
      gsap.from(".contact-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".contact-btn",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="my-20 min-h-96 w-screen px-4 sm:px-10"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="contact-img-left absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            alt="Contact bg 1"
            clipClass="contact-clip-path-1"
          />

          <ImageClipBox
            src="/img/contact-2.webp"
            alt="Contact bg 2"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="contact-img-right absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80">
          <div className="absolute opacity-40 md:scale-125" style={{ clipPath: "polygon(20% 0%, 100% 10%, 90% 100%, 0% 80%)" }}>
            <img src="/img/parth-contact.jpeg" alt="Trainer shadow" className="object-cover" />
          </div>

          <div className="sword-man-clip-path md:scale-125 overflow-hidden">
            <img src="/img/parth-contact.jpeg" alt="Trainer" className="object-cover object-top" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="contact-label font-general text-[10px] uppercase">
            Join Parth Powerhouse
          </p>

          <p className="contact-heading special-font font-zentry mt-10 w-full text-3xl leading-[0.9] sm:text-5xl md:text-[6rem]">
            Let&apos;s b<b>u</b>ild your
            <br /> str<b>o</b>ngest <br /> self t<b>o</b>gether
          </p>

          <div className="contact-btn">
            <Button containerClass="mt-10 cursor-pointer btn-hover">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
