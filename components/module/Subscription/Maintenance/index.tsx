"use client";

import { useState } from "react";
import MaintenanceTable from "./MaintenanceTable";

const MaintenancePage = () => {
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const maintenanceData = [
    {
      id: "1",
      plan: "Premium",
      price: "$120",
      technician: 5,
      duration: "Monthly",
      status: "Paid",
    },
    {
      id: "2",
      plan: "Standard",
      price: "$900",
      technician: 3,
      duration: "Yearly",
      status: "Paid",
    },
    {
      id: "3",
      plan: "Basic",
      price: "$80",
      technician: 2,
      duration: "Monthly",
      status: "Pending",
    },
    {
      id: "4",
      plan: "Premium",
      price: "$1000",
      technician: 6,
      duration: "Yearly",
      status: "Failed",
    },
    {
      id: "5",
      plan: "Standard",
      price: "$95",
      technician: 4,
      duration: "Monthly",
      status: "Paid",
    },
  ];

  return (
    <div>
      <MaintenanceTable maintenance={maintenanceData} />
    </div>
  );
};

export default MaintenancePage;
