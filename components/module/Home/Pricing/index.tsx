/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetMeQuery } from "@/redux/api/authApi";
import { useCreateSubscriptionIntentMutation } from "@/redux/api/planPaymentApi";
import { useGetAllSubscriptionQuery } from "@/redux/api/subscriptionApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import PlanSelectionSkeleton from "../../Onboarding/PlanSelectionSkeleton";
import { PlanCard } from "./Card";

type BillingPeriod = "monthly" | "annual";
type ApiDuration = "Monthly" | "Annually";

export interface Price {
  duration: ApiDuration;
  price: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  technicianLimit: number;
  hasTrial: boolean;
  features: string[];
  prices: Price[];
}

const formatDuration = (period: BillingPeriod): ApiDuration =>
  period === "monthly" ? "Monthly" : "Annually";

export default function PricingPage() {
  const router = useRouter();
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);

  const { data: userData } = useGetMeQuery({}) as any;

  const isSubscribed = userData?.data?.isSubscribed;

  const { data, isLoading } = useGetAllSubscriptionQuery({}) as any;
  const pricingPlans: SubscriptionPlan[] = data?.data || [];

  const user = userData?.data;

  const category = user?.plan?.category;
  console.log("FULL DATA:", data?.data);
  console.log("PLAN:", data?.data?.plan);

  console.log("category", category);
  const [createSubscription] = useCreateSubscriptionIntentMutation();

  const handleSelectPlan = async (
    planId: string,
    billingPeriod: BillingPeriod,
  ) => {
    setLoadingPlanId(planId);

    const payload = {
      planId,
      duration: formatDuration(billingPeriod),
    };

    try {
      if (isSubscribed) {
        toast.warning(
          <span>
            You're already subscribed to the{" "}
            <span className="text-[#bb2123bb]">{category}</span> plan. No action
            needed.
          </span>,
        );
        setLoadingPlanId(null);
        return;
      }

      if (!user) {
        router.push("/login");
        setLoadingPlanId(null);
        return;
      }

      const res = (await createSubscription(payload).unwrap()) as any;

      if (res?.success) {
        toast.success(
          res?.data?.message ||
            "Subscription intent created! Redirecting to payment...",
        );

        if (res?.data?.orderId) {
          if (res.data.clientSecret) {
            localStorage.setItem("clientSecret", res.data.clientSecret);
          } else {
            console.warn("No clientSecret returned from server");
          }

          router.push(
            `/register?paymentId=${res.data.orderId}&planId=${planId}`,
          );
        }
      }
    } catch (err: any) {
      toast.error(
        err?.data?.message ||
          "Failed to create subscription intent. Please try again.",
      );
      console.error("Subscription error:", err);
    } finally {
      setLoadingPlanId(null);
    }
  };

  if (isLoading) return <PlanSelectionSkeleton />;

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-12 sm:pt-16 pb-10 sm:pb-12 text-center mb-10 sm:mb-16 px-4">
        <div className="mb-3 sm:mb-4 inline-block">
          <span className="text-xs sm:text-sm font-medium text-red-500 tracking-wide">
            Pricing
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4 leading-tight text-balance">
          Simple, Transparent Pricing
          <br />
          Built for Repair Shops
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          No hidden fees. No complicated tiers. Just powerful AI diagnostics
          that scale with your shop.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelectPlan={handleSelectPlan}
                loadingPlanId={loadingPlanId}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
