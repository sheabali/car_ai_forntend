/* eslint-disable @typescript-eslint/no-unused-vars */
import MetricCard from "@/components/shared/MetricCardDashboard";
import { Sparkles, UserMinus, Users } from "lucide-react";
import ActiveUsersChart from "./ActiveUsersChart";
import AiSessionsCard from "./AiSessionsCard";
import RecentBillingTable from "./RecentBillingTable";
import CustomersTable from "./UserTable";

const ShopOwnerDashboardOverview = () => {
  const recentCompletedJobs = [
    {
      id: "1",
      parentName: "John Doe",
      parentImage: "/boy.png",
      caregiverName: "Toyota",
      caregiverImage: "/boy.png",
      date: "2023-06-01",
      incident: "Paid",
      technicians: 5,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
    {
      id: "2",
      parentName: "Jane Smith",
      parentImage: "/boy.png",
      caregiverName: "Honda",
      caregiverImage: "/boy.png",
      date: "2023-06-02",
      incident: "Paid",
      technicians: 3,
    },
  ];

  const assessmentCompletionRate = 0.8;

  const metrics = [
    {
      title: "Active Technicians",
      value: 30,
      month: "+2 this month",
      icon: <Users className="text-[#00C566]" />,
      bg: "bg-[#e6f9f0]",
    },
    {
      title: "Active Invitations",
      value: 0,
      icon: <UserMinus className="text-[#1B64F6]" />,
      invitations: "Remaining Invitations",
      bg: "bg-[#F0F5FF]",
    },
    {
      title: "Active Plan",

      icon: <Sparkles className="text-[#F5CC1D]" />,
      plan: "Professional Shop Plan",
      nextRenewal: "Oct 21",
      bg: "bg-[#fdf9e8]",
    },
  ];

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Recent User + Chart */}
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-2 ">
          <CustomersTable recentCompletedJobs={recentCompletedJobs} />
        </div>

        {/* Assessment Chart (2 column) */}
        <div className="lg:col-span-2 mt-4">
          <div className="bg-white border-0 rounded-2xl">
            <ActiveUsersChart />
          </div>
        </div>
      </div>
      {/* Recent User + Chart */}
      <div className="grid gap-6 lg:grid-cols-3 mt-4">
        <div className="lg:col-span-1">
          <div className="bg-white border-0 rounded-2xl">
            <AiSessionsCard />
          </div>
        </div>

        {/* Assessment Chart (2 column) */}
        <div className="lg:col-span-2">
          <div className="bg-white border-0 rounded-2xl">
            <RecentBillingTable recentCompletedJobs={recentCompletedJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboardOverview;
