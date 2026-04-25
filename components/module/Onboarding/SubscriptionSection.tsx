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

  const clientSecret = localStorage.getItem("clientSecret") ?? "";

  const { data: planData, isLoading } = useGetMyPaymentIdQuery(paymentId || "");

  const plan = planData?.data;

  const duration = plan?.duration;
  const amount = plan?.amount;
  const features = plan?.plan?.features || [];
  const name = plan?.plan?.name || "";
  const hasTrial = plan?.plan?.hasTrial ?? false;

  // Find the matching price for the selected duration
  const selectedPrice = plan?.plan?.prices?.find(
    (p: any) => p.duration === durationParam,
  );

  const billingAmount = selectedPrice?.price ?? amount;
  const billingDuration = durationParam || duration;

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
              {hasTrial && (
                <p className="mt-2 text-sm text-gray-500">
                  Start free — no charge for 14 days from today.
                </p>
              )}
            </div>

            {/* Plan Card */}
            <div className="bg-[#F4FDFF] border-2 border-primary rounded-2xl p-6 mb-4 shadow">
              <div className="flex justify-between items-center">
                <span className="text-md font-medium">{name}</span>
                <div className="flex items-start">
                  <span className="text-md font-semibold">
                    ${billingAmount}
                  </span>
                  <span className="text-sm text-black ml-1">
                    /{billingDuration}
                  </span>
                </div>
              </div>

              {/* Trial + billing notice inside the card */}
              {/* {hasTrial && (
                <div className="mt-4 pt-4 border-t border-primary/20 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarClock
                      size={15}
                      className="text-primary shrink-0"
                    />
                    <span>
                      <span className="font-medium text-gray-800">
                        14-day free trial
                      </span>{" "}
                      — starts today, cancel anytime.
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CreditCard size={15} className="text-primary shrink-0" />
                    <span>
                      Your card will be charged{" "}
                      <span className="font-semibold text-gray-800">
                        ${billingAmount}/{billingDuration}
                      </span>{" "}
                      after the trial ends.
                    </span>
                  </div>
                </div>
              )} */}
            </div>

            {/* Trial reminder banner */}
            {/* {hasTrial && (
              <div className="mb-8 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  className="text-amber-500 mt-0.5 shrink-0"
                />
                <p className="text-xs text-amber-800 leading-relaxed">
                  We&apos;ll send you a reminder before your trial ends. You
                  won&apos;t be billed until{" "}
                  <span className="font-semibold">14 days from today</span>.
                </p>
              </div>
            )} */}

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

        {/* Right Side */}
        <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="max-w-xl mx-auto">
            {/* Trial notice above the form */}
            {hasTrial && (
              <div className="mb-6 rounded-xl bg-[#F4FDFF] border border-primary/30 px-5 py-4">
                <p className="text-sm font-semibold text-gray-800 mb-0.5">
                  You&apos;re starting a 14-day free trial
                </p>
                <p className="text-xs text-gray-500">
                  Enter your payment details to secure your plan. Your credit
                  card will{" "}
                  <span className="font-medium text-gray-700">
                    not be charged
                  </span>{" "}
                  until the trial period ends. After that, you&apos;ll be billed{" "}
                  <span className="font-semibold text-gray-800">
                    ${billingAmount}/{billingDuration}
                  </span>
                  .
                </p>
              </div>
            )}

            <AccountForm
              planId={plan.id}
              paymentId={paymentId}
              clientSecret={clientSecret}
            />

            {/* Post-form reassurance */}
            {hasTrial && (
              <p className="mt-4 text-center text-xs text-gray-400">
                By subscribing, you agree to be charged{" "}
                <span className="font-medium text-gray-500">
                  ${billingAmount}/{billingDuration}
                </span>{" "}
                after your 14-day free trial unless cancelled.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
