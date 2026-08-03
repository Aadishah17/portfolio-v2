"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-royal">
          Career & Education
        </span>
        <h2 className="text-heading">Work Experience</h2>
      </div>

      <div ref={ref} className="relative pb-16 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-36 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center size-8 rounded-full -left-[14px] bg-primary border border-white/20 shadow-md">
                <div className="size-3 rounded-full bg-royal animate-pulse" />
              </div>

              <div className="flex-col hidden gap-1 md:flex md:pl-16 text-neutral-300">
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <h4 className="text-base font-semibold text-neutral-400">{item.job}</h4>
              </div>
            </div>

            <div className="relative w-full pl-12 pr-2 md:pl-4">
              <div className="block mb-4 md:hidden">
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-sm font-semibold text-neutral-400">{item.job}</h4>
              </div>

              <div className="space-y-3 p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-midnight/80 to-navy/50 backdrop-blur-md shadow-lg">
                {item.contents.map((content, idx) => (
                  <p className="text-sm text-neutral-300 leading-relaxed flex items-start gap-2.5" key={idx}>
                    <span className="text-royal font-bold text-base shrink-0">▹</span>
                    <span>{content}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-0 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-royal via-lavender to-aqua rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
