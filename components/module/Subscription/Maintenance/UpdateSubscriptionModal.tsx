"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useState } from "react";

interface UpdateSubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: {
    plan: string;
    price: string;
    duration: string;
    technician: number;
    features: string[];
  };
}

const allFeatures = [
  "Shop Foreman AI",
  "Mechanical Diagnostics AI",
  "Electrical Diagnostics AI",
  "Transmission Diagnostics AI",
  "OBD-II Code Interpreter AI",
  "European Vehicle Specialist AI",
];

export function UpdateSubscriptionModal({
  open,
  onOpenChange,
  data,
}: UpdateSubscriptionModalProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    data?.features || [],
  );
  const [duration, setDuration] = useState(data?.duration || "Monthly");

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  const removeFeature = (feature: string) => {
    setSelectedFeatures((prev) => prev.filter((f) => f !== feature));
  };

  const handleSave = () => {
    console.log("Saving changes:", { selectedFeatures, duration });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Update Subscription</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Plan Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Plan Category
                </Label>
                <input
                  type="text"
                  value={data?.plan || "BASIC"}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Price
                </Label>
                <input
                  type="text"
                  value={data?.price || "$79"}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Duration
                </Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Technician Limit */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Technician Limit
                </Label>
                <input
                  type="number"
                  value={data?.technician || 3}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Features</h3>

            {selectedFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedFeatures.map((feature) => (
                  <Badge
                    key={feature}
                    variant="secondary"
                    className="bg-[#e9f0ff] text-md text-[#4F5655] rounded-md py-2 px-2 flex items-center gap-2"
                  >
                    {feature}
                    <button
                      onClick={() => removeFeature(feature)}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            <div className="space-y-3 border-t pt-4">
              {allFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Checkbox
                    id={feature}
                    checked={selectedFeatures.includes(feature)}
                    onCheckedChange={() => toggleFeature(feature)}
                  />
                  <Label
                    htmlFor={feature}
                    className="text-md text-gray-700 cursor-pointer font-normal"
                  >
                    {feature}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            className="py-6 px-3 rounded-2xl"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#1b4075] py-6 px-3 hover:bg-blue-800 text-white"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
