"use client";

import { OnboardingLayout } from "@/components/module/Onboarding/onboarding-layout";
import SubscriptionSection from "@/components/module/Onboarding/SubscriptionSection";
import { OnboardingProvider } from "@/src/app/context/onboarding-context";

const planNames = {
  basic: "Basic Shop Plan",
  professional: "Professional Shop Plan",
  european: "European Specialist Plan",
};

const planPrices: Record<"basic" | "professional" | "european", number> = {
  basic: 79,
  professional: 129,
  european: 179,
};

const planFeatures = {
  basic: [
    "Shop Foreman AI",
    "Mechanical Diagnostics AI",
    "OBD-II Code Interpreter AI",
    "3 technician users",
  ],
  professional: [
    "Shop Foreman AI",
    "Mechanical Diagnostics AI",
    "Electrical Diagnostics AI",
    "Transmission Diagnostics AI",
    "OBD-II Code Interpreter AI",
    "5 technician users",
  ],
  european: [
    "Shop Foreman AI",
    "Mechanical Diagnostics AI",
    "Electrical Diagnostics AI",
    "Transmission Diagnostics AI",
    "OBD-II Code Interpreter AI",
    "European Vehicle Specialist AI",
    "5 technician users",
  ],
};

export default function PaymentPage() {
  return (
    <OnboardingProvider>
      <OnboardingLayout currentStep={3}>
        <SubscriptionSection />
      </OnboardingLayout>
    </OnboardingProvider>
  );
}
