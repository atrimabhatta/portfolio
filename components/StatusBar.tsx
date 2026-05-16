// components/StatusBar.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141416]/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center gap-2 rounded-full px-3 py-1.5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-[#f0ede8]">
            Available for work
          </span>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#8044ef] px-4 py-2 text-xs font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
        >
          <MessageCircle size={14} />
          Let&apos;s talk
        </a>

        <a
          href="tel:+917890917642"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white transition-transform duration-300 hover:scale-[1.05]"
          aria-label="Call"
        >
          <PhoneCall size={14} />
        </a>
      </div>
    </motion.div>
  );
}