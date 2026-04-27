/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  useGetMySessionsQuery,
  useStartNewChatMutation,
  useUploadImagesMutation,
} from "@/redux/api/aiApi";
import { useGetMeQuery } from "@/redux/api/authApi";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  Edit,
  ImageIcon,
  LogOut,
  Plus,
  Search,
  Send,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

interface DiagnosticChatHomeProps {
  onSessionStart?: (sessionId: string) => void;
  onLogout?: () => void;
}

const DiagnosticChatHome = ({ onSessionStart }: DiagnosticChatHomeProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const { data: sessionsRes, isLoading: sessionsLoading } =
    useGetMySessionsQuery(searchTerm);
  const sessions = (sessionsRes as any)?.data || [];

  const { data: getMe } = useGetMeQuery({}) as any;
  const [startChat, { isLoading: startingChat }] = useStartNewChatMutation();
  const [uploadImages, { isLoading: uploading }] = useUploadImagesMutation();

  const user = getMe?.data;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadAndGetUrl = async () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append("images", selectedFile);
    const res = (await uploadImages(formData).unwrap()) as any;
    return res.data[0];
  };

  const handleStartChat = async () => {
    if (!message.trim() && !selectedFile) return;
    try {
      const imageUrl = await uploadAndGetUrl();
      const res = (await startChat({
        persona: "shop_foreman_gpt",
        prompt: message,
        image: imageUrl || undefined,
      }).unwrap()) as any;

      const newSessionId = res.data.session.id;

      if (onSessionStart) {
        onSessionStart(newSessionId);
      } else {
        router.push(`/chat/${newSessionId}`);
      }
    } catch (err: any) {
      const errorMessage =
        err.data?.message ||
        "Failed to start diagnostic session. Please check your subscription.";
      toast.error(errorMessage, { duration: 5000 });
      console.error("Failed to start chat:", err);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
    router.push("/");
  };

  // Build display name and initials from user object
  const displayName =
    user?.name || user?.fullName || user?.email?.split("@")[0] || "User";
  const displayEmail = user?.email || "";
  const initials = displayName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  function handleSendMessage() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white rounded-2xl shadow-xl border border-blue-100">
      {/* Sidebar */}
      <motion.div
        animate={{ width: isSidebarOpen ? 320 : 0 }}
        className={cn(
          "bg-[#f7f9fa] border-r border-blue-100 overflow-hidden flex flex-col",
          !isSidebarOpen && "border-none",
        )}
      >
        {/* Sidebar Top */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-start gap-2">
            <Link href="/">
              <Image
                src="/r_logo.png"
                alt="SmartAutoTech Logo"
                width={200}
                height={200}
                className="h-16 w-16"
              />
            </Link>
            <h2 className="font-bold text-[#111827] text-[18px]">
              SmartAutoTech
            </h2>
          </div>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setMessage("");
                setSelectedFile(null);
                setPreviewUrl(null);
              }}
              className="bg-[#042055] text-white w-full gap-2"
            >
              <Plus className="w-5 h-5" /> New Chat
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563]" />
            <Input
              placeholder="Search chats..."
              className="pl-10 bg-white border-blue-100 text-black focus-visible:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Session List */}
        <div className="flex-1 px-4 pb-4 overflow-y-auto">
          <div className="space-y-2">
            {sessionsLoading ? (
              <div className="flex justify-center p-4">
                <Loading />
              </div>
            ) : (
              sessions.map((session: any) => (
                <motion.div
                  key={session.id}
                  whileHover={{ x: 4 }}
                  onClick={() => router.push(`/chat/${session.id}`)}
                  className="p-1 rounded-xl cursor-pointer transition-all duration-200 group relative hover:bg-[#b9b9b9] ps-3 text-[#4B5563]"
                >
                  <div className="font-medium text-sm truncate pr-2">
                    {session.title || "New Investigation"}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Sidebar Footer — User Profile */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
              {user?.profileImage ? (
                <Image
                  src={user.profileImage}
                  alt={displayName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#042055] text-white flex items-center justify-center text-sm font-semibold">
                  {initials || <User className="w-4 h-4" />}
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0 leading-tight">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {displayName}
              </p>

              {displayEmail && (
                <p className="text-xs text-gray-500 truncate">{displayEmail}</p>
              )}

              <p className="text-[11px] font-medium text-blue-600 mt-1">
                {user?.plan?.name || "No Plan"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Link href="/chat/profile">
                <Button
                  variant="ghost"
                  size="icon"
                  title="Profile"
                  className="text-gray-500 hover:text-gray-600 hover:bg-blue-50 rounded-md"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-md"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative bg-white">
        {/* Header */}
        <div className="p-4 border-b border-blue-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-blue-400"
            >
              <ChevronLeft
                className={cn(
                  "transition-transform",
                  !isSidebarOpen && "rotate-180",
                )}
              />
            </Button>
            <h3 className="font-semibold text-blue-900">
              New Diagnostic Session
            </h3>
          </div>
        </div>

        {/* Landing Hero */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4 mb-10"
          >
            <div className="w-40 h-40">
              <Image
                src="/r_logo.png"
                alt="SmartAutoTech Logo"
                width={200}
                height={200}
                className="h-40 w-40"
              />
            </div>
            <h2 className="text-[32px] font-bold text-[#111827]">
              What can I help with?
            </h2>
          </motion.div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-blue-50">
          <div className="max-w-4xl mx-auto flex flex-col gap-2">
            <AnimatePresence>
              {previewUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-blue-200 group mb-2"
                >
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setPreviewUrl(null);
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Plus className="w-3 h-3 rotate-45" />
                  </button>
                  {uploading && (
                    <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                      <Loading />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <div className="flex-1 relative flex items-center">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="Enter vehicle make, model, year, and describe issues, symptoms, or error codes..."
                  className="pl-12 pr-24 py-6 bg-gray-50 text-black border-blue-100 rounded-2xl focus-visible:ring-blue-400"
                />
                <div className="absolute left-2 flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "text-[#042055] hover:text-primary h-8 w-8",
                      selectedFile && "text-primary bg-blue-50",
                    )}
                  >
                    <ImageIcon className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute right-2 flex items-center gap-1">
                  <Button
                    onClick={handleStartChat}
                    disabled={
                      uploading ||
                      startingChat ||
                      (!message.trim() && !selectedFile)
                    }
                    className="bg-[#042055] hover:bg-blue-700 text-white rounded-xl px-4 h-9 shadow-inner"
                  >
                    {uploading || startingChat ? (
                      <Loading />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            AI can make mistakes. Always verify critical diagnostic steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticChatHome;
