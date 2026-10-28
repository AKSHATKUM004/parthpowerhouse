import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const PreRegister = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    gsap.fromTo(
      ".success-msg",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  };

  useGSAP(
    () => {
      gsap.from(".marvel-badge", {
        scale: 0,
        rotation: -15,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".register-title span", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".register-form", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Panther glow pulse
      gsap.to(".panther-glow", {
        opacity: 0.15,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Panther mask subtle float
      gsap.to(".panther-mask", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animate the energy lines
      gsap.to(".energy-line", {
        scaleX: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-screen overflow-hidden bg-[#0a0a0a] py-16 sm:py-24"
    >
      {/* Black Panther vibranium suit pattern - SVG background */}
      <div className="absolute inset-0">
        <svg
          className="h-full w-full opacity-[0.07]"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="vibranium" x="0" y="0" width="120" height="140" patternUnits="userSpaceOnUse">
              {/* Central diamond */}
              <polygon points="60,5 110,35 110,95 60,125 10,95 10,35" fill="none" stroke="#8B5CF6" strokeWidth="1" />
              {/* Inner lines */}
              <line x1="60" y1="5" x2="60" y2="125" stroke="#8B5CF6" strokeWidth="0.5" />
              <line x1="10" y1="35" x2="110" y2="95" stroke="#8B5CF6" strokeWidth="0.5" />
              <line x1="110" y1="35" x2="10" y2="95" stroke="#8B5CF6" strokeWidth="0.5" />
              {/* Small accent triangles */}
              <polygon points="60,5 35,20 60,35" fill="#8B5CF6" opacity="0.3" />
              <polygon points="60,5 85,20 60,35" fill="#8B5CF6" opacity="0.2" />
              <polygon points="60,125 35,110 60,95" fill="#8B5CF6" opacity="0.2" />
              <polygon points="60,125 85,110 60,95" fill="#8B5CF6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vibranium)" />
        </svg>
      </div>

      {/* Panther energy glow - purple radial */}
      <div
        className="panther-glow absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] sm:h-[800px] sm:w-[800px]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 30%, transparent 70%)",
        }}
      />

      {/* Kinetic energy lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="energy-line absolute h-px origin-left scale-x-0"
            style={{
              top: `${12 + i * 12}%`,
              left: "-5%",
              width: "110%",
              transform: `rotate(${-2 + i * 0.5}deg) scaleX(0)`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#7c3aed" : "#a855f7"}, transparent)`,
              opacity: 0.15,
            }}
          />
        ))}
      </div>

      {/* Panther claw marks - SVG */}
      <svg
        className="absolute top-4 left-4 h-24 w-20 opacity-10 sm:top-8 sm:left-8 sm:h-40 sm:w-32"
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 10 Q25 75, 15 140" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 5 Q45 70, 38 145" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
        <path d="M60 8 Q63 72, 58 142" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M80 12 Q82 68, 78 138" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <svg
        className="absolute right-4 bottom-4 h-24 w-20 rotate-180 opacity-10 sm:right-8 sm:bottom-8 sm:h-40 sm:w-32"
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 10 Q25 75, 15 140" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 5 Q45 70, 38 145" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
        <path d="M60 8 Q63 72, 58 142" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M80 12 Q82 68, 78 138" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Panther mask silhouette - center watermark */}
      <svg
        className="panther-mask absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] sm:h-96 sm:w-96"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Panther face outline */}
        <path d="M100 20 L40 60 L25 90 L30 130 L55 160 L100 180 L145 160 L170 130 L175 90 L160 60 Z" fill="#7c3aed" opacity="0.5" />
        {/* Eyes */}
        <path d="M60 85 L80 75 L90 85 L80 95 Z" fill="#0a0a0a" />
        <path d="M140 85 L120 75 L110 85 L120 95 Z" fill="#0a0a0a" />
        {/* Nose bridge */}
        <path d="M95 95 L100 110 L105 95" stroke="#0a0a0a" strokeWidth="2" fill="none" />
        {/* Forehead lines */}
        <line x1="100" y1="30" x2="100" y2="70" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="70" y1="50" x2="90" y2="75" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="130" y1="50" x2="110" y2="75" stroke="#0a0a0a" strokeWidth="1" />
        {/* Ear accents */}
        <path d="M40 60 L30 35 L55 50" fill="#7c3aed" opacity="0.6" />
        <path d="M160 60 L170 35 L145 50" fill="#7c3aed" opacity="0.6" />
      </svg>

      <div className="container relative z-10 mx-auto px-4 sm:px-10">
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col items-center">
            {/* Wakanda badge */}
            <div className="marvel-badge mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-purple-500 sm:w-12" />
              <div className="border border-purple-500/60 px-3 py-1" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(139,92,246,0.05))" }}>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
                  Pre-Registration
                </span>
              </div>
              <div className="h-px w-8 bg-purple-500 sm:w-12" />
            </div>

            {/* Title */}
            <h2 className="register-title mb-2 overflow-hidden text-center">
              <span className="special-font font-zentry inline-block text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
                Be&nbsp;The&nbsp;
              </span>
              <span className="special-font font-zentry inline-block text-3xl font-black uppercase sm:text-4xl md:text-5xl" style={{ color: "#a855f7" }}>
                First
              </span>
            </h2>

            <p className="mb-5 text-center text-sm text-white/40 sm:text-base">
              Wakanda-level fitness awaits — join the Marvel Edition
            </p>

            {/* Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="register-form flex w-full max-w-lg flex-col gap-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    required
                    className="font-general flex-1 border-b-2 border-white/20 bg-transparent px-1 py-3 text-xs uppercase tracking-widest text-white outline-none transition-colors placeholder:text-white/30 focus:border-purple-500"
                  />
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    required
                    className="font-general flex-1 border-b-2 border-white/20 bg-transparent px-1 py-3 text-xs uppercase tracking-widest text-white outline-none transition-colors placeholder:text-white/30 focus:border-purple-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="font-general w-full border-b-2 border-white/20 bg-transparent px-1 py-3 text-xs uppercase tracking-widest text-white outline-none transition-colors placeholder:text-white/30 focus:border-purple-500"
                />

                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    className="group relative overflow-hidden border-2 border-purple-600 bg-purple-600 px-10 py-3 text-xs font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-transparent hover:text-purple-400 sm:px-14 sm:py-4 sm:text-sm"
                  >
                    <span className="relative z-10">Register Now</span>
                    <div className="absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </div>

                <p className="mt-1 text-center text-[10px] uppercase tracking-wider text-white/25">
                  Limited spots available for founding members
                </p>
              </form>
            ) : (
              <div className="success-msg flex flex-col items-center gap-3">
                <svg
                  className="h-14 w-14 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-zentry text-2xl font-black uppercase text-white sm:text-3xl">
                  You're In!
                </h3>
                <p className="text-sm text-white/50">
                  We'll contact you with exclusive early access details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
