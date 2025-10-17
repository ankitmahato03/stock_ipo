import { IPO_CARD_DATA } from "@/lib/constant";
import clsx from "clsx";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const IpoCard = () => {
  const upperPrice = parseInt(
    IPO_CARD_DATA[0].priceBand.split(" - ")[1].replace("₹", "")
  );
  return (
    <section>
      <div className="bg-gray-300/20 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  justify-between place-items-center p-4">
          {IPO_CARD_DATA.map((ipo, index) => (
            <Card
              key={index}
              className="w-full max-w-sm mb-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <CardHeader className=" w-full items-center justify-center  space-y-2">
                <Image
                  src={ipo.imageUrl}
                  alt={ipo.title}
                  width={50}
                  height={50}
                  className="object-cover"
                />
                <div className="">
                  <CardTitle className=" ">{ipo.title}</CardTitle>
                  <CardTitle
                    className={clsx("text-lg font-bold", {
                      "text-green-600": ipo.status === "OPEN",
                      "text-red-600": ipo.status === "CLOSED",
                      "text-yellow-600": ipo.status === "UPCOMMING",
                    })}
                  >
                    {ipo.status}
                  </CardTitle>
                </div>
                <CardAction className="">
                  <div>
                    <span className="font-bold text-2xl text-green-600">
                      {" "}
                      ₹{upperPrice * ipo.lotSize}{" "}
                    </span>
                    <span className="items-center">/{ipo.lotSize}</span>
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-1">
                <CardDescription>
                  Price Band:{" "}
                  <span className=" font-bold text-black ">
                    {ipo.priceBand}
                  </span>
                </CardDescription>
                <CardDescription>
                  Open Date:{" "}
                  <span className=" font-bold text-black ">{ipo.openDate}</span>
                </CardDescription>
                <CardDescription>
                  Close Date:{" "}
                  <span className=" font-bold text-black ">
                    {ipo.closeDate}
                  </span>
                </CardDescription>
                <CardDescription>
                  Issue Size:{" "}
                  <span className=" font-bold text-black ">
                    {ipo.issueSize}
                  </span>
                </CardDescription>
                <CardDescription>
                  Issue Type:{" "}
                  <span className=" font-bold text-black ">
                    {ipo.issueType}
                  </span>
                </CardDescription>
                <CardDescription>
                  Listing Date:{" "}
                  <span className=" font-bold text-black ">
                    {" "}
                    {ipo.listingDate}
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
