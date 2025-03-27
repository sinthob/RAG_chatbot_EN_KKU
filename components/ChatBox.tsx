"use client";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `🧑 You: ${input}`]);
    setInput("");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-800 text-black dark:text-white p-10 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex flex-col items-center space-y-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-blue-600 dark:text-blue-400">
          AI Chatbot 🤖
        </h2>

        {/* Banner */}
        <div className="bg-red-500 text-white p-4 rounded-lg text-lg font-medium w-full text-center">
          TEST TAILWIND STYLE
        </div>

        {/* Message area */}
        <div className="w-full h-[500px] overflow-y-auto bg-zinc-100 dark:bg-zinc-700 rounded-lg p-6 space-y-4 text-lg shadow-inner">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center">Start chatting...</p>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-600 p-4 rounded-lg shadow-sm"
              >
                {msg}
              </div>
            ))
          )}
        </div>

        {/* Input and send button */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="flex-1 px-6 py-4 text-xl rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-xl text-xl transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
