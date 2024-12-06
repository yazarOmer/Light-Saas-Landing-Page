import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

import Image from "next/image";

const logos = [
  {
    img: acmeLogo,
    name: "Acme Logo",
  },
  {
    img: quantumLogo,
    name: "Quantum Logo",
  },
  {
    img: echoLogo,
    name: "Echo Logo",
  },
  {
    img: celestialLogo,
    name: "Celestial Logo",
  },
  {
    img: pulseLogo,
    name: "Pulse Logo",
  },
  {
    img: apexLogo,
    name: "Apex Logo",
  },
];

export const LogoTicker = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-10 overflow-hidden relative">
        <div className="flex h-8 gap-14 before:content-[''] before:absolute before:h-full before:w-20 before:bg-gradient-to-r before:from-[#EAEEFE] before:to-transparent before:left-0 before:top-0 after:content-[''] after:absolute after:h-full after:w-20 after:bg-gradient-to-l after:from-[#EAEEFE] after:to-transparent after:right-0 after:top-0">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.img}
              alt={logo.name}
              className="h-full w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
