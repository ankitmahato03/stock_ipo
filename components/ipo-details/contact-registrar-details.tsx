import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust import path based on your setup

import { IPO_CONTATCT_REGISTRAR_DETAILS } from "@/lib/indi_ipo_details";

export const ContactRegistrarDetails = ({
  ipo,
}: {
  ipo: (typeof IPO_CONTATCT_REGISTRAR_DETAILS)[0];
}) => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-6  ">
      {/* Contact Details */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 w-full lg:w-1/2">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        {ipo.contact_details ? (
          <Table>
            <TableBody>
              {Object.entries(ipo.contact_details).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-semibold capitalize w-1/3">
                    {key}
                  </TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-muted-foreground">No contact details available.</p>
        )}
      </div>

      {/* Registrar Contact Details */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 w-full lg:w-1/2 overflow-hidden ">
        <h2 className="text-xl font-bold mb-4">Registrar Contact Details</h2>
        {ipo.registrar_details ? (
          <Table>
            <TableBody>
              {Object.entries(ipo.registrar_details).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-semibold capitalize w-1/3">
                    {key}
                  </TableCell>
                  <TableCell className="max-w-2/3 ">{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-muted-foreground">
            No registrar details available.
          </p>
        )}
      </div>
    </section>
  );
};
