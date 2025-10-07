import { IPO_CARD_DATA } from "@/lib/constant";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export const IpoCard = () => {
  return (
    <section>
      <div className="bg-gray-300/20 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  justify-between place-items-center p-4">
          {IPO_CARD_DATA.map((ipo, index) => (
            <Card key={index} className="w-full max-w-sm mb-4 ">
              <CardHeader className="items-center justify-center  space-y-2">
                <Image
                  src={ipo.imageUrl}
                  alt={ipo.title}
                  width={50}
                  height={50}
                  className="object-cover"
                />

                <CardTitle>{ipo.title}</CardTitle>

                <CardAction>
                  <div>
                    <span className="font-bold text-2xl text-green-600">
                      {" "}
                      ₹{15000}
                    </span>
                    <span className="items-center">/{ipo.lotSize}</span>
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent>
                <CardDescription>Price Band: {ipo.priceBand}</CardDescription>
                <CardDescription>Open Date: {ipo.openDate}</CardDescription>
                <CardDescription>Close Date: {ipo.closeDate}</CardDescription>
                <CardDescription>Issue Size: {ipo.issueSize}</CardDescription>
                <CardDescription>Issue Type: {ipo.issueType}</CardDescription>
                <CardDescription>
                  Listing Date: {ipo.listingDate}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
