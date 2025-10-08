import { STATISTICS_DATA } from "@/lib/constant";
import { indi_ipo_details } from "@/lib/indi_ipo_details";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const IpoDetails = () => {
  const ipo = indi_ipo_details[0];
  return (
    <div className="p-4 m-2 max-w-7xl mx-auto bg-black/5 rounded-md">
      {/* Heading Details  */}
      <div className="flex gap-4 items-center ">
        <Image
          alt={ipo.ipo_name}
          src={ipo.ipo_image}
          height={100}
          width={100}
        />
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold">Hero MotoCorp Ltd</h1>
          <p>{ipo.ipo_description}</p>
        </div>
      </div>

      {/* issu Details and market lot size  */}
      <div>
        {/* Issue Details  */}

        <div></div>
        {/* market Lot size details  */}
        <div>
          {" "}
          <Card className="rounded-2xl p-4">
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-bold">
                Market Lot Size
              </CardTitle>
              <CardAction className="text-sm text-gray-500">
                {/* {highSeverityTicket.id} */}
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-3">
              {indi_ipo_details.map((item) => (
                <div
                  key={item.ipo_name}
                  className="flex justify-between items-start border-b pb-2"
                >
                  <span className="font-semibold text-gray-800 w-1/3">
                    {item.issue_details.lot_size}:
                  </span>
                  <span className="text-sm text-gray-700 w-2/3 text-left">
                    {item.issue_details.allotment_date}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
