import { CallToAction } from "@/sections/call-to-action";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { Navbar } from "@/sections/navbar";
import { Pricing } from "@/sections/pricing";
import { Product } from "@/sections/product";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Product />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
