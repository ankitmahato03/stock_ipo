import { indi_ipo_details } from "@/lib/indi_ipo_details";

export const IpoDescription = ({
  ipo,
}: {
  ipo: (typeof indi_ipo_details)[0];
}) => {
  return (
    <section className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-2">
        {ipo.ipo_name} IPO Description
      </h2>
      <p>{ipo.ipo_description}</p>
    </section>
  );
};
