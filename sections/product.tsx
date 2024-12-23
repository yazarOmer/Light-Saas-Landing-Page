"use client";
import { Badge } from "@/components/badge";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Product = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="py-24 text-center">
      <div className="px-5 lg:px-20">
        <div className="max-w-[335px] md:max-w-[540px] w-full mx-auto">
          <Badge>Boost your productivity</Badge>
          <h1 className="section-title">
            A more effective way to track progress
          </h1>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10 max-w-[335px] md:max-w-[728px] lg:max-w-[1040px] w-full mx-auto">
          <Image src={productImage} alt="product" className="w-auto" />
          <motion.img
            src={pyramid.src}
            alt="pyramid"
            width={262}
            height={262}
            className="hidden md:block absolute left-[630px] lg:left-[920px] -top-[129px]"
            style={{ translateY }}
          />
          <motion.img
            src={tube.src}
            alt="tube"
            width={248}
            height={248}
            className="hidden md:block absolute -left-[150px] top-[150px] lg:top-[320px]"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
