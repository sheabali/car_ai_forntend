import MetricCard from "@/components/shared/MetricCardDashboard";
import { Baby, UserCheck, Users } from "lucide-react";

export default function DashboardPage() {
  const metrics = [
    {
      title: "Active Technicians",
      value: 30,
      month: "+2 this month",
      icon: <Users className="text-white" />,
      bg: "bg-blue-400",
    },
    {
      title: "Total caregivers",
      value: 0,
      icon: <UserCheck className="text-white" />,
      invitations: "Remaining Invitations",
      bg: "bg-green-400",
    },
    {
      title: "Total parents",
      value: 0,
      icon: <Baby className="text-white" />,
      bg: "bg-slate-400",
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 mb-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
}
