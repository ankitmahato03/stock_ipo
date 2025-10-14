import { BookOpen, Lightbulb, LineChart, CreditCard } from "lucide-react";

export const IPOResource = () => {
  const resources = [
    {
      title: "IPO Guide",
      description:
        "We break down the steps involved in the IPO application process, explain key IPO KPIs, and guide you on how IPO valuation works.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Application Tips",
      description:
        "Whether you're applying for the first time or modifying an existing application through our IPO application modification tips.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "IPO Grey Market",
      description:
        "Our resources provide insights into the IPO grey market, helping you understand its dynamics and how to navigate it.",
      icon: <LineChart className="w-8 h-8 text-green-600" />,
    },
    {
      title: "ASBA IPO",
      description:
        "Our resources explain how to apply for IPOs through the ASBA process, ensuring a smooth application experience.",
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-card text-card-foreground rounded-lg border shadow-md p-8 space-y-8 mt-2">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">IPO Resources</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          From understanding IPO allotment status and tracking IPO listing gains
          to exploring the IPO grey market and knowing how to apply through ASBA
          IPO or UPI IPO applications — our resources cover it all. Stay
          informed at every stage with guides, application tips, and valuation
          insights to make smarter investment decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((res, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-gray-100 p-3 rounded-full">{res.icon}</div>
            <h3 className="text-lg font-semibold">{res.title}</h3>
            <p className="text-sm text-muted-foreground">{res.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
