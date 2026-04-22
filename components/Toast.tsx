"use client";

import { AnimatePresence, motion } from "framer-motion";

export function Toast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2"
        >
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/15 bg-[#0a0c12]/95 px-4 py-2 font-mono text-xs text-white/90 shadow-2xl backdrop-blur-xl">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
