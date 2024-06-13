"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Hero from "@/components/Home/Hero";
import Poems from "@/components/Home/Poems";
import OurMission from "@/components/Home/OurMission";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Contact from "@/components/Home/Contact";
import Articles from "@/components/Home/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 2.5, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <div className="overflow-x-hidden font-dm-sans">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
        <Hero />
      </motion.div>

      <div className="space-y-40">
        <Poems />
        <OurMission />
        <WhatWeDo />
        <Contact />
        <Articles />
      </div>

      <Footer />
    </div>
  );
}
