import logoImage from "@/assets/logosaas.png";
import menuImage from "@/assets/menu.svg";
import { Button } from "@/components/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 lg:px-20 bg-[#EAEEFE]">
      <Image src={logoImage.src} alt="logo" width={40} height={40} />
      <div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="font-dm text-black/60 leading-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-dm text-black/60 leading-6">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="font-dm text-black/60 leading-6">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="font-dm text-black/60 leading-6">
                Updates
              </a>
            </li>
            <li>
              <a href="#" className="font-dm text-black/60 leading-6">
                Help
              </a>
            </li>
            <Button>Get for free</Button>
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
  );
};
