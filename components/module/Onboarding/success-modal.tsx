"use client";

import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/src/app/context/onboarding-context";
import { useRouter } from "next/navigation";
import CheckIcon from "./CheckIcon";

const planNames = {
  basic: "Basic Shop Plan",
  professional: "Professional Shop Plan",
  european: "European Specialist Plan",
};

export function SuccessModal() {
  const router = useRouter();
  const { data, resetData } = useOnboarding();

  const handleGoToDashboard = () => {
    resetData();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className=" p-3">
            <CheckIcon />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Welcome to the future of automotive diagnostics
        </p>

        {/* Plan Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Plan</span>
            <span className="font-semibold text-gray-900">
              {planNames[data.selectedPlan]}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className="font-semibold text-green-600">Active</span>
          </div>
        </div>

        {/* Button */}
        <Button
          onClick={handleGoToDashboard}
          className="w-full bg-[#042055] text-white hover:bg[#042055]/20 font-semibold py-2"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}
