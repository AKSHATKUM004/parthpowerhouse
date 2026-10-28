import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { AnimatedTitle } from "./animated-title";
import { BentoTilt } from "./bento-tilt";
import { Button } from "./button";

gsap.registerPlugin(ScrollTrigger);

const PRICING_PLANS = [
  {
    name: "Basic",
    price: 999,
    period: "/month",
    features: [
      "Access to gym floor",
      "Locker room access",
      "1 Group class/week",
      "Basic fitness assessment",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 1999,
    period: "/month",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 Personal training/month",
      "Nutrition consultation",
      "Sauna access",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 3999,
    period: "/month",
    features: [
      "All Pro features",
      "4 Personal training sessions",
      "Custom meal plan",
      "Recovery zone access",
      "Priority booking",
      "Guest passes (2/month)",
    ],
    highlighted: false,
  },
];

const AnimatedPrice = ({ target }: { target: number }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setCurrent(Math.floor(obj.val)),
        });
      },
    });

    return () => trigger.kill();
  }, [target]);

  const formatted = current.toLocaleString();

  return <span ref={ref}>{formatted}</span>;
};

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered card entrance from bottom
      gsap.from(".pricing-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Feature list items stagger
      gsap.from(".pricing-feature", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="pricing" className="min-h-dvh w-screen bg-black pb-32">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col items-center py-20">
          <p className="font-general text-sm uppercase text-blue-50 md:text-[10px]">
            membership plans
          </p>

          <AnimatedTitle containerClass="mt-5 text-center">
            {"Ch<b>o</b>ose Your <br /> Pl<b>a</b>n"}
          </AnimatedTitle>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-7 md:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => (
            <BentoTilt
              key={plan.name}
              className="pricing-card relative overflow-hidden rounded-md transition-transform duration-300 ease-out"
            >
              <div
                className={`flex h-full flex-col justify-between border p-8 ${
                  plan.highlighted
                    ? "border-yellow-300 bg-blue-200"
                    : "border-white/20 bg-blue-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 rounded-bl-md bg-yellow-300 px-4 py-1">
                    <p className="font-general text-xs font-bold uppercase text-black">
                      Popular
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="font-zentry text-2xl font-black uppercase text-blue-50 sm:text-3xl">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-zentry text-4xl font-black text-yellow-300 sm:text-5xl">
                      <AnimatedPrice target={plan.price} />
                    </span>
                    <span className="font-general text-sm text-blue-50 opacity-50">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="pricing-feature font-circular-web flex items-center gap-3 text-sm text-blue-50"
                      >
                        <span className="text-yellow-300">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  containerClass={`mt-8 w-full flex-center btn-hover ${
                    plan.highlighted ? "bg-yellow-300" : ""
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
