import { SLIDING_HERO_DATA } from "@/lib/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center gap-4 m-2">
      <Carousel className="w-full relative">
        {/* Carousel Slides */}
        <CarouselContent>
          {SLIDING_HERO_DATA.map((items, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[300px] overflow-hidden rounded-md">
                {/* Background Image */}
                <Image
                  src={items.imageUrl}
                  alt={items.title}
                  fill
                  className="object-fill rounded-md"
                />

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-white bg-opacity-80 text-black px-6 py-4 rounded-full text-center shadow-md">
                  <h2 className="text-lg font-bold">{items.title}</h2>
                  <p className="text-sm">{items.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons - placed outside CarouselContent */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200" />
      </Carousel>
    </div>
  );
};
