import { useEffect, useRef, useState } from "react";
import * as GIO from "giojs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  { e: "NL", i: "CN", v: 2000000 },
  { e: "NL", i: "DE", v: 4000000 },
  { e: "NL", i: "FR", v: 3000000 },
  { e: "NL", i: "GB", v: 3600000 },
  { e: "NL", i: "RU", v: 2200000 },
  { e: "NL", i: "IN", v: 1800000 },
  { e: "NL", i: "BR", v: 1600000 },
  { e: "NL", i: "ZA", v: 1400000 },
  { e: "NL", i: "IT", v: 1200000 },
  { e: "NL", i: "ES", v: 1000000 },
  { e: "NL", i: "AU", v: 800000 },
  { e: "NL", i: "CA", v: 600000 },
];

export default function OurMission() {
  const gioRef = useRef<HTMLDivElement>(null);
  const [initialize, setInitialize] = useState<boolean>(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    setInitialize(true);
  }, []);

  useEffect(() => {
    if (initialize && gioRef.current) {
      const controller = new GIO.Controller(gioRef.current, {
        control: {
          stats: false,
          disableUnmentioned: true,
          lightenMentioned: false,
          inOnly: false,
          outOnly: true,
          initCountry: "NL",
          halo: true,
          transparentBackground: true,
          autoRotation: true,
          rotationRatio: 0.2,
        },
        color: {
          surface: 1744048,
          selected: 2141154,
          in: 16777215,
          out: 2141154,
          halo: 1,
        },
        brightness: {
          ocean: 1,
          mentioned: 1,
          related: 1,
        },
      });

      controller.addData(data);
      controller.init();

      return () => {
        controller.dispose?.();
      };
    }
  }, [initialize]);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-16">
          <div className="relative -ml-1">
            <h1 className="relative z-10 text-9xl">Our Mission</h1>
            <span className="outline-text absolute left-2 top-2 text-nowrap text-9xl">
              Our Mission
            </span>
          </div>
        </div>

        <div className="relative mx-auto grid h-[560px] max-w-7xl grid-cols-10 items-center bg-boxes-pattern text-xl">
          <div className="col-span-5 -mt-20 space-y-8">
            <p>
              <span className="text-2xl">At</span> Surfsynch B.V., a proud Dutch
              company, we empower businesses globally through innovative
              consulting, cutting-edge development, and creative approaches.
            </p>

            <p>
              <span className="text-2xl">Our</span> mission is to drive
              sustainable growth and digital transformation, working together
              with clients to shape the future and meet the unique needs of
              businesses worldwide.
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="group relative size-32 overflow-hidden rounded-full bg-black text-white duration-300 hover:scale-125"
              >
                <div>
                  <span className="font-extralight">About Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="mx-auto size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute -bottom-2 -left-2 size-10 rounded-full bg-sky-500 duration-300 group-hover:scale-150"></div>
              </button>

              <div className="outline-text absolute bottom-10 left-10 -z-10 text-nowrap text-9xl font-bold opacity-80">
                ABOUT US
              </div>
            </div>
          </div>

          <div
            ref={gioRef}
            className="pointer-events-none absolute -right-96 -top-60"
            style={{ width: "100%", height: "1000px" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
