import UserCard from "./UserCard";

const AdminProfile = () => {
  // const recentBilling = [
  //   {
  //     orderID: "INV-1024",
  //     shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
  //     plan: "Basic Shop Plan",
  //     amount: 79,
  //     date: "2026-03-01",
  //   },
  //   {
  //     orderID: "INV-1023",
  //     shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
  //     plan: "Professional Shop Plan",
  //     amount: 129,
  //     date: "2026-02-01",
  //   },
  //   {
  //     orderID: "INV-1023",
  //     shopOwner: { name: "Ronald Richardson", email: "ronald.r@gmail.com" },
  //     plan: "Professional Shop Plan",
  //     amount: 129,
  //     date: "2026-02-01",
  //   },
  // ];

  return (
    <div className="w-full mx-auto mt-[54px] ">
      <div className="">
        <div className="max-w-3xl mx-auto">
          <UserCard />
        </div>

        {/* <div className="lg:col-span-2">
          <div className="bg-white border-0 rounded-2xl">
            <RecentBilling recentBilling={recentBilling} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminProfile;
