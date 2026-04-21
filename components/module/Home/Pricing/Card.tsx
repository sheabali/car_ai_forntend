/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { SubscriptionPlan } from ".";

type BillingPeriod = "monthly" | "annual";

export function PlanCard({
  plan,
  onSelectPlan,
  loadingPlanId,
}: {
  plan: SubscriptionPlan & { featured?: boolean };
  onSelectPlan: (planId: string, period: BillingPeriod) => void;
  loadingPlanId: string | null;
}) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const isLoading = loadingPlanId === plan.id;

  const monthlyPrice =
    plan.prices.find((p) => p.duration === "Monthly")?.price ?? 0;
  const annualTotal =
    plan.prices.find((p) => p.duration === "Annually")?.price ?? 0;

  const annualMonthly = Math.round(annualTotal / 12);
  const yearlySavings = monthlyPrice * 12 - annualTotal;

  const displayPrice =
    billingPeriod === "monthly" ? monthlyPrice : annualMonthly;

  const cta = plan.hasTrial ? "Start 14 days free trial" : "Get Started";

  return (
    <Card
      className={`relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 transition-all ${
        plan.hasTrial
          ? "bg-linear-to-b from-[#4d73bc] to-[#103376] text-white md:scale-105 md:z-10"
          : "bg-white border-2 border-gray-200"
      }`}
    >
      {/* Header */}
      <div>
        <h3
          className={`text-xl sm:text-2xl font-bold ${
            plan.hasTrial ? "text-white" : "text-gray-900"
          }`}
        >
          {plan.name}
        </h3>

        <p
          className={`text-sm sm:text-base mt-1 ${
            plan.hasTrial ? "text-blue-100" : "text-[#4F5655]"
          }`}
        >
          {plan.description}
        </p>

        <div className="my-8">
          <div className="inline-flex rounded-full bg-gray-100 p-1 w-full sm:w-auto">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
                billingPeriod === "monthly"
                  ? "bg-[#042055] text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingPeriod("annual")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
                billingPeriod === "annual"
                  ? "bg-[#042055] text-white"
                  : "text-gray-700"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="mt-5">
          <span className="text-4xl sm:text-5xl lg:text-[64px] font-bold">
            ${displayPrice}
          </span>

          <span
            className={`text-xs sm:text-sm ml-2 ${
              plan.hasTrial ? "text-blue-100" : "text-gray-600"
            }`}
          >
            /Month {billingPeriod === "annual" && "(billed annually)"}
          </span>
        </div>

        {/* Savings */}
        {billingPeriod === "annual" && yearlySavings > 0 && (
          <p
            className={`text-xs mt-1 ${
              plan.hasTrial ? "text-blue-100" : "text-gray-600"
            }`}
          >
            Save ${yearlySavings}/year with annual billing
          </p>
        )}

        {/* Technician limit */}
        <p
          className={`text-sm sm:text-md mt-4 font-semibold ${
            plan.hasTrial ? "text-blue-200" : "text-gray-500"
          }`}
        >
          Up to {plan.technicianLimit} technician
          {plan.technicianLimit !== 1 ? "s" : ""}
        </p>
      </div>

      {/* CTA */}
      <Button
        onClick={() => onSelectPlan(plan.id, billingPeriod)}
        disabled={isLoading}
        className={`w-full mt-6 py-5 sm:py-6 text-sm sm:text-md font-bold rounded-md ${
          plan.hasTrial
            ? "bg-white text-[#042055] hover:bg-blue-50"
            : "bg-white text-black border-2 border-primary hover:bg-gray-800 hover:text-white"
        }`}
      >
        {isLoading ? <Loading /> : cta}
      </Button>

      {/* Features */}
      <div className="space-y-3 sm:space-y-4 mt-6 flex-1">
        {plan.features.map((feature: any, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-[#173EAD]" />
            <span className="text-xs sm:text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
