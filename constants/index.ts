import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

export const pricings = [
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

export const logos = [
  {
    img: acmeLogo,
    name: "Acme Logo",
  },
  {
    img: quantumLogo,
    name: "Quantum Logo",
  },
  {
    img: echoLogo,
    name: "Echo Logo",
  },
  {
    img: celestialLogo,
    name: "Celestial Logo",
  },
  {
    img: pulseLogo,
    name: "Pulse Logo",
  },
  {
    img: apexLogo,
    name: "Apex Logo",
  },
];

export const testimonials = [
  {
    name: "Jamie Rivera",
    mail: "@jamietechguru00",
    image: avatar1,
    text: "As a seasoned developer always on the lookout for innovative designs this template instantly grabbed my attention.",
  },
  {
    name: "Josh Smith",
    mail: "@jjsmith",
    image: avatar2,
    text: "Our team's productivity has skyrocketed since we started using this tool.",
  },
  {
    name: "Morgan Lee",
    mail: "@moeganleewhiz",
    image: avatar3,
    text: "This app has completely transformed how I manage my projects and deadlines.",
  },
  {
    name: "Casey Jordan",
    mail: "@caseyj",
    image: avatar4,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
  },
  {
    name: "Taylor Kim",
    mail: "@taylorkimm",
    image: avatar5,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
  },
  {
    name: "Riley Smith",
    mail: "@rileysmith1",
    image: avatar6,
    text: "The customizability and integration capabilities of this app are top-notch.",
  },
  {
    name: "Jordan Patels",
    mail: "@jpatelsdesign",
    image: avatar7,
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
  },
  {
    name: "Sam Dawson",
    mail: "@dawsontechtips",
    image: avatar8,
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
  },
  {
    name: "Casey Harper",
    mail: "@casey09",
    image: avatar9,
    text: "Its user-friendly interface and robust features support our diverse needs.",
  },
];
