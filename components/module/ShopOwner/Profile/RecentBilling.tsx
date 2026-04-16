/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RWTable } from "@/components/ui/core/NRTable";
import { ColumnDef } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { useMemo } from "react";

const RecentBilling = ({ recentBilling }: { recentBilling: any[] }) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "orderID",
        header: "Order ID",
        cell: ({ row }) => (
          <p className="text-gray-700">{row.original.orderID}</p>
        ),
      },

      {
        id: "date",
        header: "Date",
        cell: ({ row }) => (
          <p className="text-gray-700">
            {row.original.date
              ? new Date(row.original.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })
              : "N/A"}
          </p>
        ),
      },
      {
        id: "plan",
        header: "Plan",
        cell: ({ row }) => <p className="text-gray-700">{row.original.plan}</p>,
      },
      {
        id: "amount",
        header: "Amount",
        cell: ({ row }) => (
          <p className="font-medium text-gray-900">${row.original.amount}</p>
        ),
      },
      {
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <Download
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            size={20}
          />
        ),
      },
    ],
    [],
  );

  return (
    <div className="rounded-xl bg-white shadow">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Billing</h2>
      </div>
      <div className="pb-4 px-4">
        <RWTable columns={columns} data={recentBilling} />
      </div>
    </div>
  );
};

export default RecentBilling;
