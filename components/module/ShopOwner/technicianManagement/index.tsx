"use client";

import MetricCard from "@/components/shared/MetricCardDashboard";
import TablePagination from "@/components/ui/core/NRTable/TablePagination";
import { Sparkles, UserMinus, Users } from "lucide-react";
import TechniciansTable from "./UserTable";

const TechnicianManagement = () => {
  const technicians = [
    {
      id: "ORD-001",
      technicianName: "2023-06-01",
      emailAddress: "Basic Plan",
      passkey: "Basic Plan",
      activationDate: "2023-06-01",
      sessions: "2023-06-01",
      status: "Paid",
    },
    {
      id: "ORD-001",
      technicianName: "2023-06-01",
      emailAddress: "Basic Plan",
      passkey: "Basic Plan",
      activationDate: "2023-06-01",
      sessions: "2023-06-01",
      status: "Paid",
    },
    {
      id: "ORD-001",
      technicianName: "2023-06-01",
      emailAddress: "Basic Plan",
      passkey: "Basic Plan",
      activationDate: "2023-06-01",
      sessions: "2023-06-01",
      status: "Paid",
    },
    {
      id: "ORD-001",
      technicianName: "2023-06-01",
      emailAddress: "Basic Plan",
      passkey: "Basic Plan",
      activationDate: "2023-06-01",
      sessions: "2023-06-01",
      status: "Paid",
    },
    {
      id: "ORD-001",
      technicianName: "2023-06-01",
      emailAddress: "Basic Plan",
      passkey: "Basic Plan",
      activationDate: "2023-06-01",
      sessions: "2023-06-01",
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
      <div className="">
        <div className=" bg-[#f3f5f7] rounded-2xl">
          <TechniciansTable technicians={technicians} />
        </div>
      </div>
      <div>
        <TablePagination
          totalPage={3}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default TechnicianManagement;
