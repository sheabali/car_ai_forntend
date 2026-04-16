"use client";

import { useChat } from "@/src/app/libs/chat-context";
import { useEffect } from "react";
import { ChatSidebar } from "./chat-sidebar";
import { ChatWindow } from "./chat-window";

export function ChatLayout() {
  const { chats, createChat } = useChat();

  // Create a default chat if none exist
  useEffect(() => {
    if (chats.length === 0) {
      createChat("Chat 1");
    }
  }, [chats.length, createChat]);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - Hidden on mobile, visible on md and up */}
      <div className="hidden bg-white md:flex md:w-48 lg:w-56 flex-col">
        <ChatSidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col md:border-l md:border-border">
        <ChatWindow />
      </div>
    </div>
  );
}
