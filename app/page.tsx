import { Hero } from "@/components/Hero";
import { IPOAccordion } from "@/components/home-page/ipo-accordion";
import { IPOResource } from "@/components/home-page/ipo-resource";
import { IpoReview } from "@/components/home-page/ipo-review";
import { IpoCard } from "@/components/IpoCard";

export default function Home() {
  return (
    <div className="p-2 m-2">
      
      <Hero />
      <IpoCard />
      <IPOResource />
      <IpoReview />
      <IPOAccordion />
      
    </div>
  );
}
