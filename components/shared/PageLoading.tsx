"use client";

import loading from "@/public/lottie/loading.json";
import Lottie from "lottie-react";

export default function PageLoading() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-40 h-40 sm:w-60 sm:h-60">
        <Lottie color="" animationData={loading} loop />
      </div>
    </div>
  );
}
