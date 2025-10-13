import {
  indi_ipo_details,
  INDI_IPO_FINANCIAL_DETAILS,
  indi_ipo_reservation_details,
  IPO_CONTATCT_REGISTRAR_DETAILS,
  IPO_DOCUMENTS,
} from "@/lib/indi_ipo_details";
import Image from "next/image";
import { IpoIssueDetailsAndLotSize } from "./ipo-details/ipo-issue-details-and-lot-size";
import { IpoReservationDetails } from "./ipo-details/ipo-reservation-details";
import { IpoDocument } from "./ipo-details/ipo-document";
import { IpoDescription } from "./ipo-details/ipo-description";
import { ContactRegistrarDetails } from "./ipo-details/contact-registrar-details";
import { IpoFinancialInformation } from "./ipo-details/ipo-financial-information";

export const IpoDetails = () => {
  const ipo = indi_ipo_details[0];
  const ipo_reservation_details = indi_ipo_reservation_details[0];

  return (
    <section className="flex justify-center items-start py-8 px-4">
      <div className="w-full max-w-6xl xl:max-w-7xl bg-black/5 rounded-md p-6">
        {/* Heading Details */}
        <div className="flex gap-4 items-center mb-6">
          <Image
            alt={ipo.ipo_name}
            src={ipo.ipo_image}
            height={100}
            width={100}
          />
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold">{ipo.ipo_name}</h1>
            <p>{ipo.ipo_description}</p>
          </div>
        </div>

        {/* Issue Details &  Market Lot Size */}
        <div className="w-full space-y-4">
          <IpoIssueDetailsAndLotSize ipo={ipo} />
          <IpoReservationDetails ipo={ipo_reservation_details} />
          <IpoDocument ipo={IPO_DOCUMENTS[0]} />
          <IpoDescription ipo={ipo} />
          <IpoFinancialInformation ipo={INDI_IPO_FINANCIAL_DETAILS[0]} />
          <ContactRegistrarDetails ipo={IPO_CONTATCT_REGISTRAR_DETAILS[0]} />
        </div>
      </div>
    </section>
  );
};
