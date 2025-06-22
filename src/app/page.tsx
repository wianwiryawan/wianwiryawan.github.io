import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Portofolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
