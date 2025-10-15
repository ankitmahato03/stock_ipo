import { Button } from "@/components/ui/button";
import { ipoData } from "@/lib/constant";
import Image from "next/image";
import React from "react";

export const IpoReview: React.FC = () => {
  return (
    <section className="bg-gray-300/20 mt-2 rounded-lg p-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          IPO Analysis and Review
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with the latest IPO reviews and analyses.
        </p>

        {/* IPO Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ipoData.map((ipo) => (
            <div
              key={ipo.id}
              className="bg-white rounded-2xl shadow-md border hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
            >
              <div className="w-full h-48 relative mb-5">
                <Image
                  src={ipo.img}
                  alt={ipo.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
                {ipo.tag}
              </span>

              <h3 className="text-lg font-semibold text-center text-gray-900 mb-6">
                {ipo.title}
              </h3>

              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
              >
                <a href={ipo.link}>Continue Reading</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
