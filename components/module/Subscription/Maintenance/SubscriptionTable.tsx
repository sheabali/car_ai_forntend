/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RWTable } from "@/components/ui/core/NRTable";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

type UserStatus = "Paid" | "UNPAID";

const statusStyles: Record<UserStatus, string> = {
  Paid: "bg-green-100 text-green-600 border-green-200",
  UNPAID: "bg-red-100 text-red-600 border-red-200",
};

const StatusBadge = ({ status }: { status: UserStatus }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
  >
    {status === "Paid" ? "PAID" : "UNPAID"}
  </span>
);

const SubscriptionTable = ({
  recentCompletedJobs,
}: {
  recentCompletedJobs: any;
}) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "shopName",
        header: "Shop Name",
        cell: ({ row }) => (
          <p className="text-gray-700">{row.original.shopName}</p>
        ),
      },
      {
        accessorKey: "orderId",
        header: "Order ID",
        cell: ({ row }) => (
          <p className="font-medium text-gray-900">{row.original.orderId}</p>
        ),
      },
      {
        accessorKey: "plan",
        header: "Plan",
        cell: ({ row }) => (
          <p className="text-sm text-gray-700">{row.original.plan}</p>
        ),
      },
      {
        accessorKey: "billingCycle",
        header: "Billing Cycle",
        cell: ({ row }) => (
          <p className="text-sm text-gray-700">{row.original.billingCycle}</p>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "paymentMethod",
        header: "Payment Method",
        cell: ({ row }) => (
          <p className="text-sm text-gray-700">{row.original.paymentMethod}</p>
        ),
      },
    ],
    [],
  );

  return (
    <div className="rounded-xl bg-white shadow mt-4">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Subscription & Billing
        </h2>
      </div>

      <div className="pb-4 px-4">
        <RWTable columns={columns} data={recentCompletedJobs} />
      </div>
    </div>
  );
};

export default SubscriptionTable;
