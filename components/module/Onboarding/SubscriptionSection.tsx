/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetMyPaymentIdQuery } from "@/redux/api/planPaymentApi";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AccountForm } from "./account-form";

export default function SubscriptionSection() {
  const searchParams = useSearchParams();

  const planId = searchParams.get("planId") || "professional";
  const paymentId = searchParams.get("paymentId") || null;
  const durationParam = searchParams.get("duration") || "Monthly";

  // FIX: Read as plain string — no JSON.parse needed
  const clientSecret = localStorage.getItem("clientSecret") ?? "";
  console.log("clientSecret", clientSecret);

  const { data: planData, isLoading } = useGetMyPaymentIdQuery(paymentId || "");

  const plan = planData?.data;

  console.log("pla0n", plan);

  const duration = plan?.duration;
  const amount = plan?.amount;
  const features = plan?.plan?.features || [];
  const name = plan?.plan?.name || "";

  const selectedPrice = plan?.prices?.find(
    (p: any) => p.duration === durationParam,
  );

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading plan...</p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">Plan not found</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="w-full lg:w-[45%] bg-[#F3F6F3] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex items-center justify-center">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-serif">
                Complete Your Subscription
              </h1>
            </div>

            {/* Plan Card */}
            <div className="bg-[#F4FDFF] border-2 border-primary rounded-2xl p-6 mb-10 shadow">
              <div className="flex justify-between items-center">
                <span className="text-md font-medium">{name}</span>

                <div className="flex items-start">
                  <span className="text-md">${amount}</span>
                  <span className="text-sm text-black ml-1">/{duration}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg md:text-xl mb-5">Plan Features</h3>

              <div className="space-y-4">
                {features?.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-primary mt-1" size={20} />
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 lg:hidden text-center text-xs text-gray-400">
              Secure 256-bit SSL encrypted payment
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="max-w-xl mx-auto">
            <AccountForm
              planId={plan.id}
              paymentId={paymentId}
              clientSecret={clientSecret}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
