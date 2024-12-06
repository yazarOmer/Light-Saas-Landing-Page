import { FaArrowRight } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="bg-black text-white w-full py-3 text-xs text-center font-inter font-normal flex items-center justify-center">
      <span className="text-sm text-white/60 font-normal hidden md:inline-flex font-dm mr-2 leading-5">
        Streamline your workflow and boost your productivity.
      </span>
      <span>Get started for free</span>
      <FaArrowRight className="text-white ml-1" />
    </header>
  );
};
