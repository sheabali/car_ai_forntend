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

const TechniciansTable = ({ technicians }: { technicians: any }) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Order ID",
      },
      {
        accessorKey: "technicianName",
        header: "Technician Name",
      },
      {
        accessorKey: "emailAddress",
        header: "Email / Plan",
      },
      {
        accessorKey: "passkey",
        header: "Passkey",
      },
      {
        accessorKey: "activationDate",
        header: "Activation Date",
        cell: ({ row }) => (
          <p className="text-sm text-gray-700">
            {new Date(row.original.activationDate).toLocaleDateString()}
          </p>
        ),
      },
      {
        accessorKey: "sessions",
        header: "Sessions",
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
    ],
    [],
  );

  return (
    <div className="rounded-xl bg-white shadow mt-4">
      <div className="pb-4 px-4 pt-2">
        <RWTable columns={columns} data={technicians} />
      </div>
    </div>
  );
};

export default TechniciansTable;
