"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, CheckCircle2, ChevronDown, Trash2 } from "lucide-react";
import React, { useState } from "react";

type PlanType = "Basic Shop Plan" | "Professional Shop Plan";
type StatusType = "Active" | "Suspended";

interface Technician {
  id: string;
  no: string;
  name: string;
  email: string;
  sessions: string;
}

interface Shop {
  id: string;
  shopOwner: string;
  ownerEmail: string;
  shopName: string;
  plan: PlanType;
  status: StatusType;
  technicianCount: string;
  technicians: Technician[];
}

interface ShopManagementTableProps {
  data: Shop[];
}

const StatusBadge = ({ status }: { status: StatusType }) => {
  const isActive = status === "Active";
  return (
    <div
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium ${
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {isActive ? (
        <CheckCircle2 className="w-4 h-4" />
      ) : (
        <AlertCircle className="w-4 h-4" />
      )}
      {status}
    </div>
  );
};

const ShopManagementTable = ({ data }: ShopManagementTableProps) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const toggleRow = (shopId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(shopId)) {
      newExpanded.delete(shopId);
    } else {
      newExpanded.add(shopId);
    }
    setExpandedRows(newExpanded);
  };

  const filteredData = data.filter((shop) => {
    const planMatch = planFilter === "all" || shop.plan === planFilter;
    const statusMatch = statusFilter === "all" || shop.status === statusFilter;
    return planMatch && statusMatch;
  });

  return (
    <div className="w-full bg-white rounded-lg shadow">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center my-6 justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Shop & User Management
          </h1>
          <div className="flex items-center gap-3">
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
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 my-10 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 w-8" />
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                Shop Owner
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                Shop Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                No. of technicians
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((shop) => (
              <React.Fragment key={shop.id}>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 w-8">
                    <button
                      onClick={() => toggleRow(shop.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-gray-600 transition-transform ${
                          expandedRows.has(shop.id) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {shop.shopOwner}
                      </p>
                      <p className="text-sm text-gray-500">{shop.ownerEmail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{shop.shopName}</td>
                  <td className="px-6 py-4 text-gray-700">{shop.plan}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={shop.status} />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {shop.technicianCount}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu> */}
                    </div>
                  </td>
                </tr>

                {/* Expanded Technicians Row */}
                {expandedRows.has(shop.id) && (
                  <tr>
                    <td colSpan={7} className="px-0 py-0">
                      <div className="bg-gray-50 px-6 py-4">
                        <div className="bg-white rounded-lg border">
                          <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                                  No. of Technicians
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                                  Technician Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                                  Technician Email Address
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                                  Sessions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {shop.technicians.map((tech) => (
                                <tr
                                  key={tech.id}
                                  className="border-b hover:bg-gray-50 transition-colors last:border-0"
                                >
                                  <td className="px-4 py-3 text-sm text-gray-700">
                                    {tech.no}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-700">
                                    {tech.name}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-700">
                                    {tech.email}
                                  </td>
                                  <td className="px-4 py-3 text-sm font-medium text-red-600">
                                    {tech.sessions}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <p className="text-lg font-medium">No shops found</p>
          <p className="text-sm">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default ShopManagementTable;
