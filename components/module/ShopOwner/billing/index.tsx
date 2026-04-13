/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TablePagination from "@/components/ui/core/NRTable/TablePagination";
import BillingTable from "./UserTable";

const BillingManagement = () => {
  const billing = [
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
    {
      id: "ORD-001",
      activationDate: "2023-06-01",
      plan: "Basic Plan",
      amount: "49",
      status: "Paid",
    },
  ];

  return (
    <div>
      <div className="">
        <div className=" bg-[#f3f5f7] rounded-2xl">
          <BillingTable billing={billing as any} />
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

export default BillingManagement;
