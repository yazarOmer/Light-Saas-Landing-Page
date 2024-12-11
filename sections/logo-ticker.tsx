"use client";
import { logos } from "@/constants";
import Image from "next/image";
import { motion } from "motion/react";

export const LogoTicker = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-10 overflow-hidden relative">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex h-8 gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.img}
                alt={logo.name}
                className="h-full w-auto"
              />
            ))}
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.img}
                alt={logo.name}
                className="h-full w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
