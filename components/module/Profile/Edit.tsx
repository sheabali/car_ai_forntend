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
}

export default function ProfileCard() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      adminName: "Gavano",
    },
  });

  const [imagePreview, setImagePreview] = useState<string>(
    "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );

  console.log("imagePreview", imagePreview);

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // handle your API request here
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log("file", file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-6 shadow-md">
      <div className="flex flex-col items-center space-y-4">
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
        <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300">
          Upload new Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      <CardContent className="mt-6 border p-6 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Admin Name
            </label>
            <Input
              {...register("adminName")}
              className="py-6"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex justify-end gap-2 mt-5">
            <Link href="/admin/profile">
              <Button className="py-6" type="button" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button className="py-6" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
