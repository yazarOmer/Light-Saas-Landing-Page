"use client";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

import { FaArrowRight } from "react-icons/fa6";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 px-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="md:flex items-center max-w-[1200px] mx-auto">
        <div className="md:w-[478px]">
          <Badge>Version 2.0 is here</Badge>
          <h1 className="text-5xl lg:leading-[78px] md:text-7xl font-bold font-inter bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex items-center mt-[30px] gap-1">
            <Button primary>Get for free</Button>
            <Button className="bg-transparent">
              Learn More <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img
            src={cogImage.src}
            alt="cog"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-10"
            animate={{ translateY: [-30, 30] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
          />
          <motion.img
            src={cylinderImage.src}
            alt="cylinder"
            width={220}
            height={220}
            style={{
              translateY,
            }}
            className="-top-8 -left-20 hidden md:block absolute"
          />
          <motion.img
            src={noodleImage.src}
            alt="noodle"
            width={220}
            height={220}
            style={{ translateY }}
            className="hidden lg:block absolute top-[524px] left-[500px] rotate-[30deg]"
          />
        </div>
      </div>
    </section>
  );
};
