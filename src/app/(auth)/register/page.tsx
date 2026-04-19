"use client";

import { OnboardingLayout } from "@/components/module/Onboarding/onboarding-layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  Phone,
  Store,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  OnboardingProvider,
  useOnboarding,
} from "../../context/onboarding-context";

function ShopSetupContent() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!data.shopName.trim()) newErrors.shopName = "Shop name is required";
    if (!data.shopAddress.trim())
      newErrors.shopAddress = "Shop address is required";
    if (!data.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Invalid email format";
    if (!data.password.trim()) newErrors.password = "Password is required";
    if (data.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (data.password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!data.acceptTerms) newErrors.acceptTerms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      router.push("/register/plan-selection");
    }
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleContinue();
      }}
    >
      {/* Shop Owner Name */}
      <div className="space-y-2">
        <Label htmlFor="ownerName" className="text-gray-700">
          Shop Owner Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="ownerName"
            placeholder="Enter your name"
            className="pl-10"
            value={data.ownerName}
            onChange={(e) => {
              updateData({ ownerName: e.target.value });
              if (errors.ownerName) setErrors({ ...errors, ownerName: "" });
            }}
          />
        </div>
        {errors.ownerName && (
          <p className="text-red-500 text-sm">{errors.ownerName}</p>
        )}
      </div>

      {/* Shop Name */}
      <div className="space-y-2">
        <Label htmlFor="shopName" className="text-gray-700">
          Shop Name
        </Label>
        <div className="relative">
          <Store className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="shopName"
            placeholder="Enter your shop name"
            className="pl-10"
            value={data.shopName}
            onChange={(e) => {
              updateData({ shopName: e.target.value });
              if (errors.shopName) setErrors({ ...errors, shopName: "" });
            }}
          />
        </div>
        {errors.shopName && (
          <p className="text-red-500 text-sm">{errors.shopName}</p>
        )}
      </div>

      {/* Shop Address */}
      <div className="space-y-2">
        <Label htmlFor="shopAddress" className="text-gray-700">
          Shop Address
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="shopAddress"
            placeholder="Enter your shop location"
            className="pl-10"
            value={data.shopAddress}
            onChange={(e) => {
              updateData({ shopAddress: e.target.value });
              if (errors.shopAddress) setErrors({ ...errors, shopAddress: "" });
            }}
          />
        </div>
        {errors.shopAddress && (
          <p className="text-red-500 text-sm">{errors.shopAddress}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-gray-700">
          Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            className="pl-10"
            value={data.phoneNumber}
            onChange={(e) => {
              updateData({ phoneNumber: e.target.value });
              if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
            }}
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Email Account */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700">
          Email Account
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            value={data.email}
            onChange={(e) => {
              updateData({ email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create your password"
            className="pl-10 pr-10"
            value={data.password}
            onChange={(e) => {
              updateData({ password: e.target.value });
              if (errors.password) setErrors({ ...errors, password: "" });
            }}
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-700">
          Confirm Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="pl-10 pr-10"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword)
                setErrors({ ...errors, confirmPassword: "" });
            }}
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={data.acceptTerms}
          onCheckedChange={(checked) => {
            updateData({ acceptTerms: checked as boolean });
            if (errors.acceptTerms) setErrors({ ...errors, acceptTerms: "" });
          }}
        />
        <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
          I agree to all terms, Privacy Policy and Fees
        </Label>
      </div>
      {errors.acceptTerms && (
        <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
      )}

      {/* Continue Button */}
      <Button
        type="submit"
        className="w-full bg-[#042055] hover:bg-[#042055] text-white font-semibold py-6"
      >
        Continue
      </Button>
    </form>
  );
}

export default function ShopSetupPage() {
  return (
    <OnboardingProvider>
      <OnboardingLayout currentStep={1}>
        <ShopSetupContent />
      </OnboardingLayout>
    </OnboardingProvider>
  );
}
