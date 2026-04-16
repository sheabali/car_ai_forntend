"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/src/app/libs/auth-context";
import { useChat } from "@/src/app/libs/chat-context";

import { Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";

export function ChatSidebar() {
  const { chats, currentChat, createChat, selectChat, deleteChat } = useChat();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleNewChat = () => {
    const timestamp = new Date().toLocaleString();
    createChat(`Chat ${timestamp}`);
  };

  return (
    <div className="w-full h-full bg-white text-sidebar-foreground border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-xs">
              S
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold leading-none">
              SmartAutoTech.ai
            </p>
            <p className="text-xs text-sidebar-accent mt-0.5">AI Diagnostics</p>
          </div>
        </div>

        <Button
          onClick={handleNewChat}
          className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-sidebar-accent" />
          <Input
            placeholder="Search Chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-8 text-sm bg-sidebar-accent/20 border-sidebar-accent text-sidebar-foreground placeholder:text-sidebar-accent"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          {filteredChats.length === 0 ? (
            <p className="text-xs text-sidebar-accent text-center py-4">
              No chats yet
            </p>
          ) : (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`p-3 rounded cursor-pointer transition group ${
                  currentChat?.id === chat.id
                    ? "bg-sidebar-primary/30 border-l-2 border-sidebar-primary"
                    : "hover:bg-sidebar-accent/10"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{chat.title}</p>
                    <p className="text-xs text-sidebar-accent mt-1">
                      {chat.messages.length} messages
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition text-sidebar-accent hover:text-sidebar-foreground"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* User Info */}
      <div className="p-3 border-t border-sidebar-border space-y-3">
        <div className="bg-sidebar-accent/10 rounded p-3">
          <p className="text-xs font-semibold text-sidebar-foreground">
            {user?.name}
          </p>
          <p className="text-xs text-sidebar-accent">{user?.plan}</p>
        </div>
        <Button onClick={logout} variant="outline" className="w-full text-xs">
          Logout
        </Button>
      </div>
    </div>
  );
}
