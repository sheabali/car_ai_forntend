/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { ChatLayout } from "@/components/module/Chat/chat-layout";
import { useEffect, useState } from "react";
import { useAuth } from "../../libs/auth-context";

export default function Home() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-semibold text-foreground">
              SmartAutoTech.ai
            </span>
          </div>
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  //   if (!isAuthenticated) {
  //     return <AuthPage />
  //   }

  return (
    <main className="h-screen w-screen">
      <ChatLayout />
    </main>
  );
}
