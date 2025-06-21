import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Portofolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
