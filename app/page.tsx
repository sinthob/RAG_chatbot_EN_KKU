"use client";
import ChatBox from "@/components/ChatBox";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f4f4f5] to-[#e2e8f0] dark:from-[#1a1a1a] dark:to-[#0f0f0f]">
      <ChatBox />
    </main>
  );
}
