"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Decorative chart — no real monthly breakdown in API, kept as visual
const chartData = [
  { month: "Jan", value: 4200, value2: 3800 },
  { month: "Feb", value: 3800, value2: 4200 },
  { month: "Mar", value: 5200, value2: 3200 },
  { month: "Apr", value: 6100, value2: 4300 },
  { month: "May", value: 4900, value2: 5100 },
  { month: "Jun", value: 5800, value2: 3500 },
];

type AiSessions = {
  total: number;
  technicians: number;
};

export default function AiSessionsCard({
  aiSessions,
}: {
  aiSessions: AiSessions;
}) {
  const [period, setPeriod] = useState("Monthly");

  return (
    <div className="w-full bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">AI Sessions</h2>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-50 border-gray-200 hover:bg-gray-100"
        >
          {period}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      <div className="border-b border-gray-200 mb-8" />

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              {aiSessions.total?.toLocaleString() ?? "0"}
            </h3>
            <p className="text-gray-600">sessions</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-sm">
              Completed by the technicians
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-700 font-bold text-sm">
                {aiSessions.technicians ?? 0}
              </span>
            </div>
            <p className="text-gray-900 font-medium">
              {aiSessions.technicians ?? 0} Technicians
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="transparent"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide={true} />
              <Bar dataKey="value" fill="#991B1B" radius={[8, 8, 0, 0]} />
              <Bar dataKey="value2" fill="#FECDD3" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
