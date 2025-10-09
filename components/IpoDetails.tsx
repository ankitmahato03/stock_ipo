import { STATISTICS_DATA } from "@/lib/constant";
import { indi_ipo_details } from "@/lib/indi_ipo_details";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export const IpoDetails = () => {
  const ipo = indi_ipo_details[0];
  const keys = Object.keys(ipo.issue_details);
  const market_lot_keys = Object.keys(ipo.market_lot_size);
  type IssueDetailsKeys = keyof typeof ipo.issue_details;
  type MarketLotKeys = keyof typeof ipo.market_lot_size;

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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Issue Details  */}

        <div>
          <Card className="rounded-2xl p-4">
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-bold">
                {ipo.ipo_name} IPO Issue Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {keys.map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-start border-b pb-2"
                >
                  <span className="font-semibold text-gray-800 w-1/3">
                    {item}
                  </span>
                  <span className="text-sm text-gray-700 w-2/3 text-left">
                    {ipo.issue_details[item as IssueDetailsKeys]}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        {/* market Lot size details  */}
        <div>
          {/* <Card className="rounded-2xl p-4">
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-bold">
                Market Lot Size
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {market_lot_keys.map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-start border-b pb-2"
                >
                  <span className="font-semibold text-gray-800 w-1/3">
                    {item}
                  </span>
                  <span className="text-sm text-gray-700 w-2/3 text-left">
                    {ipo.market_lot_size.bNII_min[item as MarketLotKeys]}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card> */}

          <Card className="rounded-2xl p-4">
            <CardHeader className="">
              <CardTitle className="text-xl font-bold">
                Market Lot Size
              </CardTitle>
            </CardHeader>
            <CardDescription className="max-w-md ">
              <p>
                Investors can bid for a minimum of 13 shares and in multiples
                thereof. The following table depicts the minimum and maximum
                investment by Retail Investors and HNI in terms of shares and
                amount.
              </p>
            </CardDescription>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application</TableHead>
                    <TableHead>Lots</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { label: "Retail (min)", key: "retail_min" },
                    { label: "Retail (max)", key: "retail_max" },
                    { label: "SHNI (min)", key: "sNII_min" },
                    { label: "SHNI (max)", key: "sNII_max" },
                    { label: "BHNI (min)", key: "bNII_min" },
                  ].map(({ label, key }) => {
                    const data =
                      ipo.market_lot_size[
                        key as keyof typeof ipo.market_lot_size
                      ];
                    return (
                      <TableRow key={key}>
                        <TableCell>{label}</TableCell>
                        <TableCell>{data.lots}</TableCell>
                        <TableCell>{data.shares}</TableCell>
                        <TableCell>{data.amount}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
