"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  adminName: string;
  shopOwnerName: string;
  email: string;
  shopName: string;
  shopAddress: string;
  phoneNumber: string;
}

export default function ShopOwnerProfileCard() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      shopOwnerName: "Shop Owner Name",
      email: "example@example.com",
      shopName: "Tesla Enterprise",
      shopAddress: "shop address",
      phoneNumber: "01737886719",
    },
  });

  const [imagePreview, setImagePreview] = useState<string>(
    "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?q=80&w=764&auto=format&fit=crop",
  );

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // API call here
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Card className="max-w-2xl border-0 mx-auto p-6">
      {/* Profile Image */}
      <div className="flex gap-6 items-center space-y-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Profile"
              fill
              className="object-cover"
            />
          ) : (
            <User className="w-24 h-24 text-gray-300" />
          )}
        </div>

        <label className="cursor-pointer bg-[#ebeaf1] text-[#4F5655] font-bold px-4 py-2 rounded text-sm hover:bg-gray-300">
          Upload new Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Form */}
      <CardContent className="mt-6 border p-6 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Shop Owner Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Shop Owner Name
            </label>
            <Input
              {...register("shopOwnerName")}
              className="py-6"
              placeholder="Enter shop owner name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Account
            </label>
            <Input
              type="email"
              {...register("email")}
              className="py-6"
              placeholder="Enter email"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Shop Name
            </label>
            <Input
              {...register("shopName")}
              className="py-6"
              placeholder="Enter shop name"
            />
          </div>

          {/* Shop Address */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Shop Address
            </label>
            <Input
              {...register("shopAddress")}
              className="py-6"
              placeholder="Enter shop address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <Input
              type="tel"
              {...register("phoneNumber")}
              className="py-6"
              placeholder="Enter phone number"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-start gap-2 mt-5">
            <Link href="/shop-owner/dashboard/profile">
              <Button className="py-4" type="button" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button className="py-4" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
