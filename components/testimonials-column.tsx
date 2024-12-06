import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface TestimonialsColumnProps {
  testimonials: {
    name: string;
    mail: string;
    image: StaticImageData;
    text: string;
  }[];
  className?: string;
}

export const TestimonialsColumn = ({
  testimonials,
  className,
}: TestimonialsColumnProps) => {
  return (
    <div
      className={twMerge(
        "items-center w-[365px] flex flex-col gap-6 pt-10 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent)]",
        className
      )}
    >
      {testimonials.map(({ name, mail, image, text }) => (
        <div
          key={name}
          className="flex flex-col w-[325px] rounded-3xl p-10 border border-[#222222]/10 drop-shadow-[0_7px_14px_rgb(234,234,234)] bg-white"
        >
          <p className="font-dm text-black text-left">{text}</p>
          <div className="flex items-center mt-5 gap-2">
            <Image src={image} alt="avatar" width={40} height={40} />
            <div className="flex flex-col items-start">
              <span className="font-dm font-medium">{name}</span>
              <span className="font-dm font-normal">{mail}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
