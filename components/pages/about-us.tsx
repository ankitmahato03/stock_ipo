import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="flex justify-center items-start py-8 px-4">
      <div className="w-full max-w-6xl xl:max-w-7xl bg-black/5 rounded-md p-6">
        <Image
          alt="aboutus image"
          src="/aboutus.png"
          layout="responsive"
          className="rounded-md"
          height={600}
          width={400}
        />
        <div className="flex flex-col space-y-4 mt-4 ">
          <h1 className="text-2xl font-bold items-center">About Us</h1>

          <span className="space-y-2">
            <p>
              IPO Ji is a comprehensive IPO app that keeps you up-to-date with
              both Mainline and SME IPOs. It provides the latest information on
              current IPOs, upcoming IPOs, and past IPOs. Stay informed about
              the Indian Sharemarket with up-to-date IPO information. With IPO
              Ji, you gain access to a wealth of IPO-related resources,
              including IPO information, IPO news, IPO details, IPO alerts, and
              IPO live subscription updates. Empower yourself to make
              well-informed investment decisions with our comprehensive
              features. Whether you're an experienced investor or new to the IPO
              market, IPO Ji provides all the essential details and live
              subscriptions you need. Trust us to keep you covered! 💼💡💰 IPO
              Ji allows you to monitor the IPO market comprehensively, providing
              you with all the essential information related to IPOs. You can
              access details such as the name of the IPO company, IPO issue
              dates, IPO offer price, IPO rating, All IPO specific details, IPO
              grey market premium (if applicable), IPO issue size, IPO status,
              IPO live subscription updates, IPO allotment status, IPO listing
              date, and IPO listed price.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};
