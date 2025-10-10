import { indi_ipo_details, IPO_DOCUMENTS } from "@/lib/indi_ipo_details";

export const IpoDocument = ({ ipo }: { ipo: (typeof IPO_DOCUMENTS)[0] }) => {
  const ipo_docs = IPO_DOCUMENTS.find((doc) => doc.ipo_name === ipo.ipo_name);

  if (!ipo_docs) {
    return null;
  }

  return (
    <section className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">
        {ipo_docs.ipo_name} IPO Documents
      </h2>
      <div className="w-full ">
        <div className="flex justify-around items-center gap-2">
          {ipo_docs.documents.map((doc, index) => (
            <span key={index}>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {doc.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
