import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IPOAccordion } from "@/components/home-page/ipo-accordion";
import { IPOResource } from "@/components/home-page/ipo-resource";
import { IpoReview } from "@/components/home-page/ipo-review";
import { IpoCard } from "@/components/IpoCard";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-2 m-2">
      <Navbar />
      <Hero />
      <IpoCard />
      <IPOResource />
      <IpoReview />
      <IPOAccordion />
      <Footer />
    </div>
  );
}
