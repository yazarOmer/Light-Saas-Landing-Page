interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="px-4 py-2 bg-black rounded-lg text-white font-medium font-dm">
      {children}
    </button>
  );
};
