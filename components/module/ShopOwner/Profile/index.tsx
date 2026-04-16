import RecentBilling from "./RecentBilling";
import ShopOwnerCard from "./UserCard";

const ShopOwnerProfile = () => {
  const recentBilling = [
    {
      orderID: "INV-1024",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Basic Shop Plan",
      amount: 79,
      date: "2026-03-01",
    },
    {
      orderID: "INV-1023",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Professional Shop Plan",
      amount: 129,
      date: "2026-02-01",
    },
    {
      orderID: "INV-1023",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Professional Shop Plan",
      amount: 129,
      date: "2026-02-01",
    },
    {
      orderID: "INV-1023",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Professional Shop Plan",
      amount: 129,
      date: "2026-02-01",
    },
    {
      orderID: "INV-1023",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Professional Shop Plan",
      amount: 129,
      date: "2026-02-01",
    },
    {
      orderID: "INV-1023",
      shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
      plan: "Professional Shop Plan",
      amount: 129,
      date: "2026-02-01",
    },
  ];

  return (
    <div className="mt-[54px] mx-10">
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <ShopOwnerCard />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border-0 rounded-2xl">
            <RecentBilling recentBilling={recentBilling} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerProfile;
