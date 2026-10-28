import { VIDEO_LINKS } from "@/constants";
import { TiLocationArrow } from "react-icons/ti";

import { BentoTilt } from "./bento-tilt";

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="pointer-events-none absolute top-0 left-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="tetx-xl mt-3 max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-20 sm:pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-4 py-16 sm:px-5 sm:py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Our Training Programs
          </p>

          <p className="font-circular-web max-w-md text-lg text-blue-50 opacity-50">
            Push your limits with our diverse range of training programs
            designed for every fitness level — from beginners to elite
            athletes.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-64 w-full overflow-hidden rounded-md sm:h-96 md:h-[65vh]">
          <BentoCard
            src={VIDEO_LINKS.feature1}
            title={
              <>
                Stre<b>n</b>gth
              </>
            }
            description="Build raw power with our comprehensive strength training program. Free weights, machines, and progressive overload techniques."
          />
        </BentoTilt>

        <div
          id="programs"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 md:h-[135vh] md:grid-rows-3"
        >
          <BentoTilt className="bento-tilt_1 h-64 sm:h-auto sm:row-span-1 md:col-span-1 md:row-span-2">
            <article className="relative size-full">
              <img
                src="/img/hitt.jpg"
                alt="HIIT Training"
                className="absolute top-0 left-0 size-full object-cover object-center"
              />
              <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                  <h1 className="bento-title special-font">
                    HI<b>I</b>T
                  </h1>
                  <p className="tetx-xl mt-3 max-w-64 md:text-base">
                    Torch calories and boost endurance with high-intensity
                    interval training. Maximum results in minimum time.
                  </p>
                </div>
              </div>
            </article>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-64 sm:h-auto sm:row-span-1 md:col-span-1">
            <BentoCard
              src={VIDEO_LINKS.feature3}
              title={
                <>
                  Cr<b>o</b>ssFit
                </>
              }
              description="Functional fitness that prepares you for anything. Varied movements at high intensity."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-64 sm:h-auto md:col-span-1">
            <article className="relative size-full">
              <img
                src="/img/yoga.jpg"
                alt="Yoga Training"
                className="absolute top-0 left-0 size-full object-cover object-center"
              />
              <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                  <h1 className="bento-title special-font">
                    Y<b>o</b>ga
                  </h1>
                  <p className="tetx-xl mt-3 max-w-64 md:text-base">
                    Restore balance and flexibility. Our yoga program
                    complements intense training with mindful recovery.
                  </p>
                </div>
              </div>
            </article>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-48 sm:h-auto">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <div>
                <h1 className="bento-title special-font max-w-64 text-black">
                  B<b>o</b>xing
                </h1>
                <p className="mt-2 text-sm font-semibold text-black/70">
                  Unleash your inner fighter. Coming soon to the ring.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-general text-[10px] font-bold uppercase text-black/50">
                  Launching Soon
                </p>
                <TiLocationArrow className="scale-[3] text-black" />
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-48 sm:col-span-2 sm:h-64 md:col-span-1 md:h-auto">
            <video
              src={VIDEO_LINKS.feature5}
              loop
              muted
              autoPlay
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="pointer-events-none size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
