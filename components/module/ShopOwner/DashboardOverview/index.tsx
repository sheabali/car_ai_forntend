import MetricCard from "@/components/shared/MetricCardDashboard";
import { Sparkles, UserMinus, Users } from "lucide-react";
import ActiveUsersChart from "./ActiveUsersChart";
import PerformanceTable from "./PerformanceTable";
import RecentBillingTable from "./RecentBillingTable";
import TechnicianPerformance from "./technicianPerformance";

const ShopOwnerDashboardOverview = () => {
  const recentBilling = [
    {
      id: "ORD-001",
      date: "2023-06-01",
      plan: "Basic Plan",
      amount: 49,
      status: "Paid",
    },
    {
      id: "ORD-002",
      date: "2023-06-02",
      plan: "Pro Plan",
      amount: 99,
      status: "UNPAID",
    },
    {
      id: "ORD-003",
      date: "2023-06-03",
      plan: "Enterprise",
      amount: 199,
      status: "Paid",
    },
  ];
  const performanceTable = [
    {
      id: "1",
      technicianName: "John Doe",
      emailAddress: "ko1E1@example.com",
      sessions: "2023-06-01",
    },
    {
      id: "1",
      technicianName: "John Doe",
      emailAddress: "ko1E1@example.com",
      sessions: "2023-06-01",
    },
    {
      id: "1",
      technicianName: "John Doe",
      emailAddress: "ko1E1@example.com",
      sessions: "2023-06-01",
    },
  ];

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
      invitations: "Remaining Invitations",
      icon: <UserMinus className="text-[#1B64F6]" />,
      bg: "bg-[#F0F5FF]",
    },
    {
      title: "Active Plan",
      plan: "Professional Shop Plan",
      nextRenewal: "Oct 21",
      icon: <Sparkles className="text-[#F5CC1D]" />,
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

      <div className="grid gap-6 lg:grid-cols-4 mt-4">
        <div className="lg:col-span-2 bg-[#f3f5f7] rounded-2xl">
          <ActiveUsersChart />
          <RecentBillingTable recentCompletedJobs={recentBilling} />
        </div>

        <div className="lg:col-span-2 bg-[#f3f5f7]">
          <TechnicianPerformance />
          <PerformanceTable performanceTable={performanceTable} />
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboardOverview;
