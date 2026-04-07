"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import SubscriptionTable from "./Maintenance/SubscriptionTable";

const Subscription = () => {
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const subscriptionData = [
    {
      id: "1",
      shopName: "Toyota",
      orderId: "ORD-1001",
      plan: "Premium",
      billingCycle: "Monthly",
      date: "2023-06-01",
      status: "Paid",
      paymentMethod: "Credit Card",
    },
    {
      id: "2",
      shopName: "Honda",
      orderId: "ORD-1002",
      plan: "Standard",
      billingCycle: "Yearly",
      date: "2023-06-02",
      status: "Paid",
      paymentMethod: "PayPal",
    },
    {
      id: "3",
      shopName: "BMW",
      orderId: "ORD-1003",
      plan: "Basic",
      billingCycle: "Monthly",
      date: "2023-06-03",
      status: "Pending",
      paymentMethod: "Stripe",
    },
    {
      id: "4",
      shopName: "Tesla",
      orderId: "ORD-1004",
      plan: "Premium",
      billingCycle: "Yearly",
      date: "2023-06-04",
      status: "Failed",
      paymentMethod: "Credit Card",
    },
    {
      id: "5",
      shopName: "Ford",
      orderId: "ORD-1005",
      plan: "Standard",
      billingCycle: "Monthly",
      date: "2023-06-05",
      status: "Paid",
      paymentMethod: "Bank Transfer",
    },
  ];

  return (
    <div>
      <div className="flex items-center  my-6 justify-end">
        <div className="flex items-center gap-3">
          <Link href="/admin/subscription/maintenance">
            <Button className="rounded-full">
              Subscriptions Plan Maintenance
            </Button>
          </Link>

          <Select value={planFilter} onValueChange={setPlanFilter}>
            <SelectTrigger className="w-32 h-10 rounded-full bg-[#f8f7f7]">
              <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
              <SelectItem value="Basic Shop Plan">Basic Plan</SelectItem>
              <SelectItem value="Professional Shop Plan">
                Professional
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32 h-10 rounded-full bg-[#f8f7f7]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <SubscriptionTable recentCompletedJobs={subscriptionData} />
    </div>
  );
};

export default Subscription;
