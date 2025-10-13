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
import { indi_ipo_reservation_details } from "@/lib/indi_ipo_details";

type ReservationCategory = {
  category: string;
  shares: string;
  percentage: string;
  max_allottees: number | null;
};

export const IpoReservationDetails = ({
  ipo,
}: {
  ipo: (typeof indi_ipo_reservation_details)[0];
}) => {
  return (
    <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {ipo.ipo_name} IPO Reservation Details
        </CardTitle>
        <CardDescription>
          LG Electronics India IPO offers total 10,18,15,860 shares. Out of
          which 2,03,21,026 (19.94%) allocated to QIB, 1,52,40,770 (14.97%)
          allocated to NII,3,55,61,796 (34.93%) allocated to RII, 2,10,728
          (0.21%) allocated to employees and 3,04,81,539 (29.93%) allocated to
          Anchor investors.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investor Category</TableHead>
              <TableHead>Shares Offered</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Max Allottees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ipo.reservation_breakdown.map((item: ReservationCategory) => (
              <TableRow key={item.category}>
                <TableCell className="font-bold">{item.category}</TableCell>
                <TableCell>{item.shares}</TableCell>
                <TableCell>{item.percentage}</TableCell>
                <TableCell>
                  {item.max_allottees !== null
                    ? item.max_allottees.toLocaleString()
                    : "—"}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
