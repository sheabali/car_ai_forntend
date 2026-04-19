"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlipWords } from "@/src/components/ui/flip-words";
import { Send, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const diagnose = [
    "Problems Faster with AI",
    "Step by Step Guidance AI",
    "Troubleshooting AI",
    "AI-Powered Speed",
    "Smart Troubleshooting AI",
  ];

  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("diagnosis");

  const tabs = [
    "Vehicle Info",
    "Diagnosis",
    "Saved Sessions",
    "Reports",
    "All",
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* HERO */}
      <div className="relative flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-16 md:pb-24 text-center">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-[#14261C] font-semibold my-6 md:my-8">
            Diagnose Vehicle
            <br />
            <span className="block">
              <FlipWords className="text-[#888888] text-5xl" words={diagnose} />
            </span>
          </h1>

          <p className="text-[#888] text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 px-2">
            SmartAutoTech ai helps repair shops reduce misdiagnosis, speed up
            troubleshooting, and empower technicians with real-time AI
            diagnostic assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/register">
              <Button className="py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl w-full sm:w-auto">
                Get started
              </Button>
            </Link>
            <Button
              variant="outline"
              className="py-5 px-6 sm:px-10 w-full sm:w-auto bg-[#f5f8fb] rounded-xl sm:rounded-2xl border-primary text-primary font-semibold"
            >
              How it Works
            </Button>
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="flex justify-center px-3 sm:px-4 pb-16 md:pb-24">
        <Card className="w-full max-w-2xl shadow-xl backdrop-blur-xl">
          <div className="p-4 sm:p-6">
            {/* Tabs (scrollable on mobile) */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all border rounded-lg sm:rounded-xl ${
                      activeTab === tab.toLowerCase()
                        ? "border-[#b9b9b9] bg-[#1c3565] text-white"
                        : "border text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <button className="text-slate-400 hover:text-slate-600 ml-2">
                <X />
              </button>
            </div>

            {/* Input */}
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Describe the vehicle problem
            </label>

            <div className="bg-slate-50 rounded-lg p-3 sm:p-4 mb-4 border border-slate-200">
              <textarea
                placeholder="Ask anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 text-sm resize-none"
                rows={3}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end">
              <button className="bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
