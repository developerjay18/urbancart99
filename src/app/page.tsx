import Hero from "@/components/Hero";
import Importance from "@/components/Importance";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Importance />
      <Products />
      <Testimonials />
    </main>
  );
}
