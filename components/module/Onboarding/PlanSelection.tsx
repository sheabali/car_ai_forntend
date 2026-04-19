"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Shop Plan",
    description:
      "Small teams handling everyday diagnostics who want to reduce guesswork and save time.",
    monthlyPrice: 99,
    annualPrice: 79,
    yearlySavings: 612,
    cta: "Get Started Now",
    featured: false,
    features: [
      "Shop Foreman AI",
      "Mechanical Diagnostics AI",
      "OBD-II Code Interpreter AI",
      "3 technician accounts",
    ],
  },
  {
    id: "professional",
    name: "Professional Shop Plan",
    description:
      "Includes all Basic Plan features plus advanced Transmission and Electrical diagnostic AI for deeper troubleshooting.",
    monthlyPrice: 159,
    annualPrice: 129,
    yearlySavings: 360,
    cta: "Start 14 days free trial",
    featured: true,
    features: [
      "Shop Foreman AI",
      "Mechanical Diagnostics AI",
      "Electrical Diagnostics AI",
      "Transmission Diagnostics AI",
      "OBD-II Code Interpreter AI",
      "5 technician accounts",
    ],
  },
  {
    id: "european",
    name: "European Specialist Plan",
    description:
      "Includes all Professional Shop features plus a European Vehicle Specialist AI.",
    monthlyPrice: 219,
    annualPrice: 179,
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
      "5 technician accounts",
    ],
  },
];

export default function PlanSelection() {
  const router = useRouter();

  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );

  const handleSelectPlan = (planId: string) => {
    localStorage.setItem(
      "selectedPlan",
      JSON.stringify({
        plan: planId,
        billingCycle: billingPeriod,
      }),
    );

    router.push("/register/payment");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 flex flex-col ${
                  plan.featured
                    ? "bg-linear-to-b from-[#4d73bc] to-[#103376] text-white scale-105"
                    : "border-2 border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <p className="text-sm mt-2 opacity-80">{plan.description}</p>

                {/* Toggle */}
                <div className="my-4">
                  <div className="inline-flex rounded-full bg-gray-100 p-1">
                    <button
                      onClick={() => setBillingPeriod("monthly")}
                      className={`px-4 py-1 rounded-full ${
                        billingPeriod === "monthly"
                          ? "bg-[#042055] text-white"
                          : ""
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingPeriod("annual")}
                      className={`px-4 py-1 rounded-full ${
                        billingPeriod === "annual"
                          ? "bg-[#042055] text-white"
                          : ""
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold">
                    $
                    {billingPeriod === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                  </span>
                  <span className="ml-2 text-sm">
                    /month {billingPeriod === "annual" && "(billed yearly)"}
                  </span>
                </div>

                {billingPeriod === "annual" && (
                  <p className="text-xs mb-4">
                    Save ${plan.yearlySavings}/year
                  </p>
                )}

                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  className="mb-6"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 mt-auto">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <Check className="w-4 h-4" />
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
