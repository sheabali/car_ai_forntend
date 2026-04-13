/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { RWTable } from "@/components/ui/core/NRTable";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

const PerformanceTable = ({ performanceTable }: { performanceTable: any }) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "technicianName",
        header: "Technician Name",
        cell: ({ row }) => (
          <p className="font-medium text-gray-900">
            {row.original.technicianName}
          </p>
        ),
      },
      {
        accessorKey: "emailAddress",
        header: "Email Address",
        cell: ({ row }) => (
          <p className="text-gray-700">{row.original.emailAddress}</p>
        ),
      },
      {
        accessorKey: "sessions",
        header: "Sessions",
        cell: ({ row }) => (
          <p className="text-sm text-gray-700">
            {row.original.sessions
              ? new Date(row.original.sessions).toLocaleDateString()
              : "N/A"}
          </p>
        ),
      },
    ],
    [],
  );

  return (
    <div className="rounded-xl bg-white shadow pb-3 mt-4">
      <div className="pb-4 px-4 pt-2">
        <RWTable columns={columns} data={performanceTable} />
      </div>
    </div>
  );
};

export default PerformanceTable;
