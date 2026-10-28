import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { AnimatedTitle } from "./animated-title";
import { BentoTilt } from "./bento-tilt";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: "Rahul M.",
    role: "Member for 2 years",
    quote:
      "Parth Powerhouse transformed not just my body but my entire mindset. The trainers here push you beyond what you think is possible.",
  },
  {
    name: "Priya S.",
    role: "Member for 1 year",
    quote:
      "The HIIT classes are incredible. I've never felt stronger or more confident. This gym changed my life.",
  },
  {
    name: "Amit K.",
    role: "Member for 3 years",
    quote:
      "Best gym equipment in the city, hands down. The atmosphere is unmatched and the community keeps you motivated.",
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Cards slide in from alternating sides
      gsap.from(".testimonial-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Stars twinkle in sequentially
      gsap.from(".testimonial-star", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "back.out(3)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Quote text fades in
      gsap.from(".testimonial-quote", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      });

      // Author info slides up
      gsap.from(".testimonial-author", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="min-h-dvh w-screen bg-black pb-32">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col items-center py-20">
          <p className="font-general text-sm uppercase text-blue-50 md:text-[10px]">
            success stories
          </p>

          <AnimatedTitle containerClass="mt-5 text-center">
            {"Wh<b>a</b>t Our <br /> Memb<b>e</b>rs Say"}
          </AnimatedTitle>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-7 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <BentoTilt
              key={testimonial.name}
              className="testimonial-card relative overflow-hidden rounded-md transition-transform duration-300 ease-out"
            >
              <div className="flex h-full flex-col justify-between border border-white/20 bg-blue-200 p-8">
                <div>
                  <div className="mb-4 flex gap-1">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <span
                          key={i}
                          className="testimonial-star text-lg text-yellow-300"
                        >
                          &#9733;
                        </span>
                      ))}
                  </div>

                  <p className="testimonial-quote font-circular-web text-lg leading-relaxed text-blue-50 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="testimonial-author mt-8 border-t border-white/10 pt-6">
                  <p className="font-zentry text-xl font-black uppercase text-blue-50">
                    {testimonial.name}
                  </p>
                  <p className="font-general text-xs uppercase text-blue-50 opacity-50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
