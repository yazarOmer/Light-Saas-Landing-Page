import { logos } from "@/constants";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-10 overflow-hidden relative">
        <div className="flex h-8 gap-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
