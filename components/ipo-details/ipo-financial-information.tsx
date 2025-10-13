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
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { INDI_IPO_FINANCIAL_DETAILS } from "@/lib/indi_ipo_details";

type IpoFinancial = {
  ipo_name: string;
  reservation_breakdown: {
    period: string;
    assets: string;
    total_income: string;
    profit_after_tax: string;
    ebitda: string;
    net_worth: string;
    reserves_and_surplus: string;
    total_borrowing: string;
  }[];
};

export const IpoFinancialInformation = ({
  ipo,
}: {
  ipo: (typeof INDI_IPO_FINANCIAL_DETAILS)[0];
}) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {ipo.ipo_name} IPO Financial Details
        </CardTitle>
        <CardDescription>
          Rubicon Research Ltd.'s revenue increased by 49% and profit after tax
          (PAT) rose by 48% between the financial year ending with March 31,
          2025 and March 31, 2024. The company's assets grew by 31% to ₹1,647.60
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period Ended</TableHead>
              <TableHead>Assets</TableHead>
              <TableHead>Total Income</TableHead>
              <TableHead>PAT</TableHead>
              <TableHead>EBITDA</TableHead>
              <TableHead>Net Worth</TableHead>
              <TableHead>Reserves & Surplus</TableHead>
              <TableHead>Total Borrowing</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ipo.reservation_breakdown.map((item) => (
              <TableRow key={item.period}>
                <TableCell className="font-bold">{item.period}</TableCell>
                <TableCell>{item.assets}</TableCell>
                <TableCell>{item.total_income}</TableCell>
                <TableCell>{item.profit_after_tax}</TableCell>
                <TableCell>{item.ebitda}</TableCell>
                <TableCell>{item.net_worth}</TableCell>
                <TableCell>{item.reserves_and_surplus}</TableCell>
                <TableCell>{item.total_borrowing}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          
        </Table> */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period Ended</TableHead>
              {ipo.reservation_breakdown.map((item) => (
                <TableHead key={item.period}>{item.period}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Assets</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.assets}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Total Income</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.total_income}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">PAT</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.profit_after_tax}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">EBITDA</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.ebitda}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Net Worth</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.net_worth}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Reserves & Surplus</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>
                  {item.reserves_and_surplus}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Total Borrowing</TableCell>
              {ipo.reservation_breakdown.map((item) => (
                <TableCell key={item.period}>{item.total_borrowing}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
