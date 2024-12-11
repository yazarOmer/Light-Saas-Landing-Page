"use client";
import { Button } from "@/components/button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="px-5 max-w-[1200px] mx-auto">
        <div className="max-w-[540px] mx-auto">
          <h1 className="font-dm font-bold text-[30px] md:text-[54px] bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text text-center">
            Sign up for free today
          </h1>
          <p className="mt-5 font-dm text-[22px] text-[#010D3E] text-center ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Button primary>Get for free</Button>
            <Button className="bg-transparent">
              Learn More <GoArrowRight className="text-black" />
            </Button>
          </div>
          <div className="relative">
            <motion.img
              src={starImage.src}
              alt="star"
              width={360}
              height={360}
              className="hidden md:block absolute -left-[356px] -top-[405px]"
              style={{ translateY }}
            />
            <motion.img
              src={springImage.src}
              alt="spring"
              width={363}
              height={363}
              className="hidden md:block absolute left-[520px] -top-[270px]"
              style={{ translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
