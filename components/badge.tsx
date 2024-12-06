import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={twMerge(
        "text-sm text-black font-dm inline-flex font-medium leading-5 py-1 px-3 rounded-lg border border-[rgba(34,34,34,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
};
