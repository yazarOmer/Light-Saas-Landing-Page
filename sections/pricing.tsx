import { Button } from "@/components/button";
import { twMerge } from "tailwind-merge";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Badge } from "@/components/badge";

const pricings = [
  {
    name: "Free",
    price: 0,
    isPopular: false,
    buttonType: "primary",
    buttonLabel: "Get for free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: 9,
    isPopular: true,
    buttonType: "secondary",
    buttonLabel: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    name: "Business",
    price: 19,
    isPopular: false,
    buttonType: "primary",
    buttonLabel: "Sign up now",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="px-5 max-w-[1200px] mx-auto">
        <div className="max-w-[335px] md:max-w-[540px] w-full mx-auto">
          <h1 className="text-[30px] md:text-[54px] font-bold font-dm bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text text-center">
            Pricing
          </h1>
          <p className="font-dm text-[22px] text-[#010D3E] text-center mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="mt-10 lg:max-w-[1040px] lg:mx-auto flex flex-col lg:flex-row lg:items-end gap-6">
          {pricings.map((pricing) => (
            <div
              className={twMerge(
                "max-w-[320px] mx-auto border border-[#F1F1F1] bg-white w-full p-10 rounded-3xl drop-shadow-[0_7px_14px_rgb(234,234,234)]",
                pricing.isPopular && "bg-black"
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={twMerge(
                    "font-dm font-bold text-lg text-black/50",
                    pricing.isPopular && "text-white/50"
                  )}
                >
                  {pricing.name}
                </span>
                {pricing.isPopular && (
                  <Badge className="border-white/20 font-medium bg-[linear-gradient(to_right,_#DD7DFF,_#E1CD86,_#8BCB92,_#71C2EF,_#3BFFFF,_#DD7DFF)] text-transparent bg-clip-text">
                    Most Popular
                  </Badge>
                )}
              </div>
              <div className="mt-[30px]">
                <span
                  className={twMerge(
                    "font-dm font-bold text-4xl text-black",
                    pricing.isPopular && "text-white"
                  )}
                >{`$${pricing.price}`}</span>
                <span
                  className={twMerge(
                    "text-base font-bold font-dm text-black/50",
                    pricing.isPopular && "text-white/50"
                  )}
                >
                  /month
                </span>
              </div>
              <Button
                primary={pricing.buttonType === "primary"}
                className="w-full mt-[30px]"
              >
                {pricing.buttonLabel}
              </Button>
              <div className="mt-[32px] flex flex-col gap-6">
                {pricing.features.map((feature) => (
                  <div className="flex gap-4 items-center">
                    <IoCheckmarkSharp
                      className={twMerge(
                        "text-black",
                        pricing.isPopular && "text-white"
                      )}
                    />
                    <p
                      className={twMerge(
                        "text-black text-sm font-dm",
                        pricing.isPopular && "text-white"
                      )}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
