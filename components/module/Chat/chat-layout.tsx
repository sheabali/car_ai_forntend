"use client";

import { Button } from "@/components/ui/button";

import { useChat } from "@/src/app/libs/chat-context";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChatSidebar } from "./chat-sidebar";
import { ChatWindow } from "./chat-window";

export function ChatLayout() {
  const { chats, createChat } = useChat();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Create a default chat if none exist
  useEffect(() => {
    if (chats.length === 0) {
      createChat("Chat 1");
    }
  }, [chats.length, createChat]);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* Desktop Sidebar - Hidden on mobile, visible on md and up */}
      <div className="hidden md:flex md:w-48 lg:w-80 flex-col">
        <ChatSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar z-50 md:hidden transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ChatSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header with Menu Button */}
        <div className="md:hidden flex items-center bg-white justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12  rounded flex items-center justify-center">
              <Image src="/r_logo.png" alt="logo" width={80} height={80} />
            </div>
            <span className="text-sm text-black font-semibold">
              SmartAutoTech
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-foreground"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </Button>
        </div>

        {/* Chat Window */}
        <ChatWindow />
      </div>
    </div>
  );
}
