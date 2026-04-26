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
  Image as ImageIcon,
  LogOut,
  Plus,
  Search,
  Send,
  User,
} from "lucide-react";
import Image from "next/image";
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
            <Image
              src="/r_logo.png"
              alt="SmartAutoTech Logo"
              width={200}
              height={200}
              className="h-16 w-16"
            />
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
        <div className="p-4 border-t border-blue-100 bg-white/60">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            {user?.profileImage ? (
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-blue-200 shrink-0">
                <Image
                  src={user.profileImage}
                  alt={displayName}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#042055] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                {initials || <User className="w-4 h-4" />}
              </div>
            )}

            {/* Name & Email */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#111827] truncate">
                {displayName}
              </p>

              {displayEmail && (
                <p className="text-[11px] text-[#6B7280] truncate">
                  {displayEmail}
                </p>
              )}
              <div className="text-xs font-semibold text-gray-800 mb-2">
                {user?.plan?.name || "No Plan Found"}
              </div>
            </div>

            {/* Logout Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="shrink-0 text-[#6B7280] hover:text-red-500 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
            </Button>
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
                  placeholder="Describe vehicle issues, symptoms, or error codes..."
                  className="pl-12 pr-24 py-6 bg-gray-50 text-black border-blue-100 rounded-2xl focus-visible:ring-blue-400"
                />
                <div className="absolute right-2 flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "text-blue-400 hover:text-blue-600 h-8 w-8",
                      selectedFile && "text-blue-600 bg-blue-50",
                    )}
                  >
                    <ImageIcon className="w-5 h-5" />
                  </Button>
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
