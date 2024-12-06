import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export const Button = ({ children, primary, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-white hover:bg-white/10 transition-colors text-black rounded-lg font-medium font-dm inline-flex items-center gap-2 justify-center",
        primary && "bg-black text-white hover:bg-black/90",
        className
      )}
    >
      {children}
    </button>
  );
};
