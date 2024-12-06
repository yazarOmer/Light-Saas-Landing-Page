import { Badge } from "@/components/badge";
import { TestimonialsColumn } from "@/components/testimonials-column";
import { testimonials } from "@/constants";

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center px-5 max-w-[600px] mx-auto">
        <Badge>Testimonials</Badge>
        <h1 className="font-dm font-bold text-[30px] md:text-[54px] bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text text-center mt-5">
          What our users say
        </h1>
        <p className="font-dm text-[22px] text-center text-[#010D3E] mt-5">
          From intuitive design to powerful features, our app has become an
          essential tool for users around the world.
        </p>
      </div>
      <div className="flex justify-center">
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:flex"
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:flex"
        />
      </div>
    </section>
  );
};
