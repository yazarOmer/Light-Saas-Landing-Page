import logoImage from "@/assets/logosaas.png";
import menuImage from "@/assets/menu.svg";
import { Button } from "@/components/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="sticky backdrop-blur-lg top-0 z-[2]">
      <div className="flex items-center justify-between p-5 lg:px-0 max-w-[1200px] mx-auto">
        <Image src={logoImage.src} alt="logo" width={40} height={40} />
        <div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="font-dm text-black/60 hover:text-black/30 leading-6"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-dm text-black/60 hover:text-black/30 leading-6"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-dm text-black/60 hover:text-black/30 leading-6"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-dm text-black/60 hover:text-black/30 leading-6"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-dm text-black/60 hover:text-black/30 leading-6"
                >
                  Help
                </a>
              </li>
              <Button primary>Get for free</Button>
            </ul>
          </nav>
          <Image
            src={menuImage}
            alt="menu"
            width={20}
            height={20}
            className="md:hidden"
          />
        </div>
      </div>
    </div>
  );
};
