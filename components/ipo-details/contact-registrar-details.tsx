import { IPO_CONTATCT_REGISTRAR_DETAILS } from "@/lib/indi_ipo_details";

export const ContactRegistrarDetails = ({
  ipo,
}: {
  ipo: (typeof IPO_CONTATCT_REGISTRAR_DETAILS)[0];
}) => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-6 overflow-x-hidden">
      {/* Contact Details */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 w-full lg:w-1/2">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        {ipo.contact_details ? (
          <div className="space-y-4 bg-muted p-4 rounded-md shadow-sm border">
            {Object.entries(ipo.contact_details).map(([key, value]) => (
              <div key={key} className="">
                <p className="font-semibold capitalize text-sm text-muted-foreground">
                  {key}
                </p>
                <p className="text-base">{value}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No contact details available.</p>
        )}
      </div>

      {/* Registrar Contact Details */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 w-full lg:w-1/2">
        <h2 className="text-xl font-bold mb-4">Registrar Contact Details</h2>
        {ipo.registrar_details ? (
          <div className="space-y-4 bg-muted p-4 rounded-md shadow-sm border">
            {Object.entries(ipo.registrar_details).map(([key, value]) => (
              <div key={key} className="">
                <p className="font-semibold capitalize text-sm text-muted-foreground">
                  {key}
                </p>
                <p className="text-base break-words">{value}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No registrar details available.
          </p>
        )}
      </div>
    </section>
  );
};
