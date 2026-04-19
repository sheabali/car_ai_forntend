import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: "Shop Setup" },
    { number: 2, label: "Plan Selection" },
    { number: 3, label: "Payment" },
  ];

  return (
    <div className="flex items-center justify-center gap-8 mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div>
              {step.number < currentStep ? (
                <div className="w-10 h-10 rounded-full bg-linear-to-t from-[#12377d] to-[#5177bf] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              ) : step.number === currentStep ? (
                <div className="w-10 h-10 rounded-full bg-linear-to-t from-[#12377d] to-[#5177bf] flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {step.number}
                  </span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">
                    {step.number}
                  </span>
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-[#111827]">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 ${
                step.number < currentStep
                  ? "bg-linear-to-t from-[#12377d] to-[#5177bf]"
                  : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
