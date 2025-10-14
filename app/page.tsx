import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IPOResource } from "@/components/home-page/ipo-resource";
import { IpoCard } from "@/components/IpoCard";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-2 m-2">
      <Navbar />
      <Hero />
      <IpoCard />
      <IPOResource />
      <Footer />
    </div>
  );
}
