import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { indi_ipo_details } from "@/lib/indi_ipo_details";

const ipo = indi_ipo_details[0];

type MarketLotKeys = keyof (typeof indi_ipo_details)[0]["market_lot_size"];

export const IpoIssueDetailsAndLotSize = ({
  ipo,
}: {
  ipo: (typeof indi_ipo_details)[0];
}) => {
  const keys = Object.keys(ipo.issue_details);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {/* Issue Details */}
      <div>
        <Card className="rounded-2xl p-4">
          <CardHeader className="mb-4">
            <CardTitle className="text-xl font-bold">
              {ipo.ipo_name} IPO Issue Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(ipo.issue_details).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="capitalize font-bold">
                      {key.replace(/_/g, " ")}
                    </TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Market Lot Size */}
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm p-6">
        <h2 className="text-xl font-bold">Market Lot Size</h2>
        <p className=" text-justify">
          Investors can bid for a minimum of 13 shares and in multiples thereof.
          The following table depicts the minimum and maximum investment by
          Retail Investors and HNI in terms of shares and amount.
        </p>
        <div>
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
                const data = ipo.market_lot_size[key as MarketLotKeys];
                return (
                  <TableRow key={key}>
                    <TableCell className="font-bold">{label}</TableCell>
                    <TableCell>{data.lots}</TableCell>
                    <TableCell>{data.shares}</TableCell>
                    <TableCell>{data.amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
