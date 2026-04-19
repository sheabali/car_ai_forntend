"use client";

import loading from "@/public/lottie/loading.json";
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-32 h-32">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
