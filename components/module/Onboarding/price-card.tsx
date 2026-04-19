import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PriceCardProps {
  name: string;
  price: number;
  billingCycle: "monthly" | "annually";
  description: string;
  features: string[];
  isHighlighted?: boolean;
  buttonText?: string;
  onSelect: () => void;
}

export function PriceCard({
  name,
  price,
  billingCycle,
  description,
  features,
  isHighlighted = false,
  buttonText = "Get Started Now",
  onSelect,
}: PriceCardProps) {
  const yearlyPrice = Math.round(price * 12 * 0.8); // 20% discount for annual

  return (
    <div
      className={`rounded-lg p-6 flex flex-col h-full transition-all ${
        isHighlighted
          ? "bg-blue-600 text-white shadow-xl scale-105"
          : "bg-white border border-gray-200 text-gray-900"
      }`}
    >
      {/* Plan Name */}
      <h3
        className={`text-xl font-bold mb-2 ${isHighlighted ? "text-white" : ""}`}
      >
        {name}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 ${isHighlighted ? "text-blue-100" : "text-gray-600"}`}
      >
        {description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold ${isHighlighted ? "text-white" : "text-gray-900"}`}
          >
            ${billingCycle === "monthly" ? price : yearlyPrice}
          </span>
          <span
            className={`${isHighlighted ? "text-blue-100" : "text-gray-500"}`}
          >
            /{billingCycle === "monthly" ? "Month" : "Year"}
          </span>
        </div>
        {billingCycle === "annually" && (
          <p
            className={`text-sm mt-1 ${isHighlighted ? "text-blue-100" : "text-gray-500"}`}
          >
            Save ${Math.round(price * 12 * 0.2)}/year with annual billing
          </p>
        )}
      </div>

      {/* Button */}
      <Button
        onClick={onSelect}
        className={`w-full mb-6 font-semibold ${
          isHighlighted
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {buttonText}
      </Button>

      {/* Features */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isHighlighted ? "text-white" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm ${isHighlighted ? "text-blue-50" : "text-gray-700"}`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
