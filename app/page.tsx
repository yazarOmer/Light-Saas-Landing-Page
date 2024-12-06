import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { Navbar } from "@/sections/navbar";
import { Pricing } from "@/sections/pricing";
import { Product } from "@/sections/product";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Product />
      <Pricing />
    </>
  );
}
