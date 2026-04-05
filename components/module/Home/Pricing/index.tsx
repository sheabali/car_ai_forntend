"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

// Dummy data - will be replaced with backend data
const pricingPlans = [
  {
    id: "basic",
    name: "Basic Shop Plan",
    description:
      "Small teams handling everyday diagnostics who want to reduce guesswork and save time.",
    monthlyPrice: 99,
    annualPrice: 79,
    monthlyBilledAnnually: 948,
    annualBilledAnnually: 948,
    yearlySavings: 612,
    cta: "Get Started Now",
    featured: false,
    features: [
      "Shop Foreman AI",
      "Mechanical Diagnostics AI",
      "OBD-II Code Interpreter AI",
      "3 technician users",
    ],
  },
  {
    id: "professional",
    name: "Professional Shop Plan",
    description:
      "Includes all Basic Plan features plus advanced Transmission and Electrical diagnostic AI for deeper troubleshooting.",
    monthlyPrice: 159,
    annualPrice: 129,
    monthlyBilledAnnually: 1908,
    annualBilledAnnually: 1548,
    yearlySavings: 360,
    cta: "Start 14 days free trial",
    featured: true,
    features: [
      "Shop Foreman AI",
      "Mechanical Diagnostics AI",
      "Electrical Diagnostics AI",
      "Transmission Diagnostics AI",
      "OBD-II Code Interpreter AI",
      "5 technician users",
    ],
  },
  {
    id: "european",
    name: "European Specialist Plan",
    description:
      "Includes all Professional Shop features plus a European Vehicle Specialist AI for advanced diagnostics on both European and domestic vehicles.",
    monthlyPrice: 219,
    annualPrice: 179,
    monthlyBilledAnnually: 2628,
    annualBilledAnnually: 2148,
    yearlySavings: 480,
    cta: "Get Started Now",
    featured: false,
    features: [
      "Shop Foreman AI",
      "Mechanical Diagnostics AI",
      "Electrical Diagnostics AI",
      "Transmission Diagnostics AI",
      "OBD-II Code Interpreter AI",
      "European Vehicle Specialist AI",
      "5 technician users",
    ],
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-16 pb-12 text-center mb-16">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-red-500 tracking-wide">
            Pricing
          </span>
        </div>
        <h1 className="text-5xl text-primary font-bold mb-4 text-balance">
          Simple, Transparent Pricing
          <br />
          Built for Repair Shops
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No hidden fees. No complicated tiers. Just powerful AI diagnostics
          that scale with your shop.
        </p>
      </div>

      {/* Billing Toggle */}
      {/* <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              billingPeriod === "monthly"
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("annual")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              billingPeriod === "annual"
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Annually
          </button>
        </div>
      </div> */}

      {/* Pricing Cards */}
      <div className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative p-8 flex flex-col ${
                  plan.featured
                    ? "bg-linear-to-b from-[#4d73bc] to-[#103376] text-white md:scale-105 md:z-10"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <h3
                  className={`text-2xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-[16px]  ${plan.featured ? "text-blue-100" : "text-[#4F5655]"}`}
                >
                  {plan.description}
                </p>

                {/* Billing Toggle */}
                <div className="flex justify-start ">
                  <div className="inline-flex rounded-full bg-gray-100 p-1">
                    <button
                      onClick={() => setBillingPeriod("monthly")}
                      className={`px-6 py-2 rounded-full font-medium transition ${
                        billingPeriod === "monthly"
                          ? "bg-[#042055] text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingPeriod("annual")}
                      className={`px-6 py-2 rounded-full font-medium transition ${
                        billingPeriod === "annual"
                          ? "bg-[#042055] text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      Annually
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-[64px] font-bold">
                    $
                    {billingPeriod === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                  </span>
                  <span
                    className={`text-sm ml-2 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}
                  >
                    /Month {billingPeriod === "annual" && "(billed annually)"}
                  </span>
                </div>

                {/* Savings Text */}
                {billingPeriod === "annual" && (
                  <p
                    className={`text-xs mb-6 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}
                  >
                    Save ${plan.yearlySavings}/year with annual billing
                  </p>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 mb-8 font-bold text-md rounded-xl ${
                    plan.featured
                      ? "bg-white text-[#042055] font-bold hover:bg-blue-50"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-6 h-6 shrink-0  rounded-full  mt-0.5 bg-[#e8edfb] ${
                          plan.featured ? "text-[#173EAD]" : "text-[#173EAD]"
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
