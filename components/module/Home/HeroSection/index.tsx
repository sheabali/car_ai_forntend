"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlipWords } from "@/src/components/ui/flip-words";
import { Send, X } from "lucide-react";
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
      <div className="relative flex flex-col items-center justify-center px-4 pt-[71px] pb-24 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-slate-200 text-sm opacity-50 rotate-12">
            conversion-focused
          </div>
          <div className="absolute bottom-40 left-20 text-slate-200 text-sm opacity-50">
            AI diagnostic chat
          </div>
          <div className="absolute bottom-32 right-20 text-slate-200 text-sm opacity-50">
            account management
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-[64px] leading-tight text-[#14261C] font-semibold my-8">
            Diagnose Vehicle
            <br />
            <span>
              <FlipWords className="text-[#888888]" words={diagnose} />
            </span>
          </h1>

          <p className="text-[#888] text-lg leading-relaxed mb-10">
            SmartAutoTech ai helps repair shops reduce misdiagnosis, speed up
            troubleshooting, and empower technicians with real-time AI
            diagnostic assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button className="py-6 px-10 rounded-2xl">Get started</Button>
            <Button
              variant="outline"
              className="py-6 px-10 bg-[#f5f8fb] rounded-2xl border-primary text-primary font-semibold hover:bg-slate-100"
            >
              How it Works
            </Button>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-4 pb-24">
        <div className="absolute bottom-30 left-1/5 text-[#000000] w-[60%] text-center text-2xl  opacity-50">
          <p className="text-[#f7f7f7] text-lg leading-relaxed mb-10">
            <span className="text-[#adadad]">
              SmartAutoTech.ai is a SaaS-based{" "}
            </span>{" "}
            web platform built{" "}
            <span className="text-[#adadad]">
              Specifically for automotive repair shops
            </span>
            , designed to streamline and modernize the for potential customers,
            combining product education, feature explanation, and
            <span className="text-[#e9cecd]">conversion-focused</span> design.
            It introduces how technicians can log into a centralized portal,
            input vehicle details such as make, model, and symptoms, and receive
            <span className="text-[#adadad]">structured</span>, step-by-step
            diagnostic{" "}
            <span className="text-[#adadad]">
              guidance from specialized AI assistants
            </span>
            tailored to different vehicle systems. The platform’s core value is
            clearly communicated throughout
            <span className="text-[#adadad]">
              the site—helping repair shops reduce diagnostic errors, save time
              on complex
            </span>
            troubleshooting, and <span className="text-[#e9cecd]">Improve</span>{" "}
            <span className="text-[#e9cecd]">AI diagnostic chat </span>
            and profitability. Key sections of the website highlight features
            like the AI diagnostic chat interface, intelligent routing system
            (“Shop Foreman”), multi-technician account management, and session
            history tracking. The site also{" "}
            <span className="text-[#adadad]">Includes transparent </span>pricing
            plans, making it easy for shop owners to understand the cost
            structure and choose a plan that fits their business size. Beyond
            <span className="text-[#adadad]">just explaining features</span>,
            the website is designed to build trust and drive action. It
            emphasizes real-world{" "}
            <span className="text-[#adadad]">benefits</span>, simplifies
            technical concepts into clear use cases, and guides users through a
            logical flow—from understanding the problem to seeing the{" "}
            <span className="text-[#adadad]">solution</span>, and finally to
            signing up for a free trial. Overall, the SmartAutoTech.ai website
            is not just informational—it is a conversion-driven{" "}
            <span className="text-[#adadad]">experiences</span> aimed at turning
            repair shop owners into long-term subscribers by demonstrating
            clear, <span className="text-[#adadad]">practical value.</span>
          </p>
        </div>
        <Card className="bg-[#fffff] backdrop-blur-xl border-b border w-full max-w-2xl shadow-xl ">
          <div className="px-3">
            {/* Tabs */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 py-2 cursor-pointer text-sm font-medium transition-all border rounded-xl -mb-6 ${
                      activeTab === tab.toLowerCase()
                        ? "border-[#b9b9b9] bg-[#1c3565] text-[#ffff]  font-semibold"
                        : "border text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <span className="text-xl">
                  <X />
                </span>
              </button>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                Describe the vehicle problem
              </label>

              {/* Input Area */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
                <textarea
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 text-sm resize-none"
                  rows={3}
                />
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <button className="text-slate-400 hover:text-slate-600 text-lg"></button>
                <div className="flex gap-2">
                  <button className="text-slate-400 hover:text-slate-600 p-2"></button>
                  <button className="bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
