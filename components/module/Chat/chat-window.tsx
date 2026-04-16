"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/src/app/libs/chat-context";

import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { InputArea } from "./input-area";
import { MessageBubble } from "./message-bubble";

export function ChatWindow() {
  const { currentChat, isLoading } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentChat?.messages]);

  if (!currentChat) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#ffff]">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              What can I help with?
            </h2>
            <p className="text-muted-foreground mt-2">
              Create a new chat to get started with vehicle diagnostics
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 md:p-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {currentChat.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Start the conversation
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Describe your vehicle issue and I&apos;ll help diagnose it
              </p>
            </div>
          ) : (
            <>
              {currentChat.messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-card border border-border rounded-lg px-4 py-3">
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
          <InputArea />
        </div>
      </div>
    </div>
  );
}
