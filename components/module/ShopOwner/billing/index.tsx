"use client";

import PageLoading from "@/components/shared/PageLoading";
import { RWTable } from "@/components/ui/core/NRTable";
import { useGetBillingDataQuery } from "@/redux/api/shopOwnerDashboardApi";
import { ColumnDef } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type UserStatus = "Paid" | "UNPAID";

type BillingItem = {
  invoiceUrl: string;
  id: string;
  orderId?: string;
  date?: string;
  activationDate?: string;

  planName?: string;
  plan?: string;

  amount: number;
  status: UserStatus;

  transactionId?: string;
  ownerName?: string;
  shopName?: string;
};

const statusStyles: Record<UserStatus, string> = {
  Paid: "bg-green-100 text-green-600 border-green-200",
  UNPAID: "bg-red-100 text-red-600 border-red-200",
};

const StatusBadge = ({ status }: { status: UserStatus }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
  >
    {status.toUpperCase()}
  </span>
);

const BillingManagement = () => {
  const { data: billingData, isLoading } = useGetBillingDataQuery({});
  const billing: BillingItem[] = billingData?.data || [];

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const columns = useMemo<ColumnDef<BillingItem>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Order ID",
        cell: ({ row }) =>
          row.original.orderId?.slice(0, 6).toLocaleUpperCase() ||
          row.original.id,
      },

      {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) =>
          new Date(
            row.original.date || row.original.activationDate || "",
          ).toLocaleDateString(),
      },

      {
        accessorKey: "planName",
        header: "Plan",
        cell: ({ row }) => row.original.planName || row.original.plan,
      },

      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => `$${row.original.amount}`,
      },

      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },

      {
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <a
              href={row.original.invoiceUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
            </a>
          </div>
        ),
      },
    ],
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="rounded-xl bg-white shadow mt-4">
      <div className="p-4">
        <RWTable columns={columns} data={billing} />
      </div>
    </div>
  );
};

export default BillingManagement;
