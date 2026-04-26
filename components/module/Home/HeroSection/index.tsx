/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetMeQuery } from "@/redux/api/authApi";
import { FlipWords } from "@/src/components/ui/flip-words";
import Image from "next/image";
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
  const { data: getUser } = useGetMeQuery({}) as any;
  const user = getUser?.data;
  const isSubscribed = user?.isSubscribed;

  console.log("user", user);

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
          <h1 className="text-2xl md:text-5xl lg:text-[64px] leading-tight text-[#14261C] font-semibold my-6 md:my-8">
            Diagnose Vehicle
            <br />
            <span className="block">
              <FlipWords
                className="text-[#888888] text-xl md:text-5xl"
                words={diagnose}
              />
            </span>
          </h1>

          <p className="text-[#888] text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 px-2">
            SmartAutoTech ai helps repair shops reduce misdiagnosis, speed up
            troubleshooting, and empower technicians with real-time AI
            diagnostic assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {isSubscribed ? (
              <Link href="/chat">
                <Button className="py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl w-full sm:w-auto">
                  Open Chat
                </Button>
              </Link>
            ) : (
              <Link href="/register">
                <Button className="py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl w-full sm:w-auto">
                  Get started
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              onClick={() => {
                const el = document.querySelector("#how-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
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
          <Image
            src="/images/chat.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full"
          />
        </Card>
      </div>
    </main>
  );
}
