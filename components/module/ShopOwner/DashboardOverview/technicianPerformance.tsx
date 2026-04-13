"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#3B82F6", "#7C3AED", "#FCD34D", "#F97316"];

const chartData = [
  { name: "Alice Johnson", value: 14, color: "#3B82F6" },
  { name: "James Wilson", value: 6, color: "#7C3AED" },
  { name: "Daniel Carter", value: 5, color: "#FCD34D" },
];

const technicians = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.j@gmail.com",
    sessions: 14,
    color: "text-red-600",
  },
  {
    id: 2,
    name: "Daniel Carter",
    email: "daniel.c@gmail.com",
    sessions: 5,
    color: "text-red-600",
  },
  {
    id: 3,
    name: "James Wilson",
    email: "james.w@gmail.com",
    sessions: 6,
    color: "text-red-600",
  },
];

const totalSessions = technicians.reduce((sum, tech) => sum + tech.sessions, 0);

export default function TechnicianPerformance() {
  return (
    <div className=" bg-white p-7 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] font-semibold text-[#4F5655]">
            Technician Performance
          </h1>
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
              <SelectItem value="quarter">This quarter</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Chart Card */}
        <div className=" p-8 bg-white">
          <div className="flex justify-center items-center min-h-80">
            <div className="relative w-80 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-gray-900">
                  {totalSessions}
                </div>
                <div className="text-sm text-gray-600 mt-1">Total Sessions</div>
              </div>
            </div>

            {/* Legend with tooltip */}
            <div className="ml-12">
              {chartData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-amber-400 text-white px-3 py-2 rounded text-sm font-medium inline-block">
                    <div>{item.value} sessions</div>
                    <div className="text-xs font-normal">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
