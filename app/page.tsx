import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IpoCard } from "@/components/IpoCard";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-2 m-2">
      <Navbar />
      <Hero />
      <IpoCard />
      <Footer />
    </div>
  );
}
