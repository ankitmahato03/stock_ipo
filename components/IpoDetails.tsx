import { indi_ipo_details } from "@/lib/indi_ipo_details";
import Image from "next/image";

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
        <div></div>
      </div>
    </div>
  );
};
