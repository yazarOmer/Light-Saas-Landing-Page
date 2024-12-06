import Image from "next/image";
import logo from "@/assets/logosaas.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaPinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black w-full py-10">
      <div className="px-5 flex flex-col items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <ul className="flex flex-col md:flex-row gap-6 text-center text-sm text-[#BCBCBC] mt-6">
          <li>About</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Help</li>
          <li>Careers</li>
        </ul>

        <ul className="flex items-center gap-4 justify-center mt-6">
          <li>
            <RiTwitterXLine className="text-[#BCBCBC] size-6" />
          </li>
          <li>
            <FaInstagram className="text-[#BCBCBC] size-6" />
          </li>
          <li>
            <IoLogoLinkedin className="text-[#BCBCBC] size-6" />
          </li>
          <li>
            <FaPinterest className="text-[#BCBCBC] size-6" />
          </li>
          <li>
            <FaYoutube className="text-[#BCBCBC] size-6" />
          </li>
        </ul>
        <p className="text-sm font-dm text-[#BCBCBC] mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
