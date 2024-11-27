"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      {/* Spinning Rings */}
      <div className="relative mb-6">
        <motion.div
          className="h-32 w-32 rounded-full border-4 border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-0 top-0 h-32 w-32 rounded-full border-t-4 border-blue-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.6, 0.1, 0.3, 0.9],
          }}
        />
        <motion.div
          className="absolute left-4 top-4 h-24 w-24 rounded-full border-4 border-t-transparent border-blue-400"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-blue-400 shadow-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Pulsating Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-center text-xl font-bold text-white"
      >
        <span className="block">Loading...</span>
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="block text-sm font-medium text-blue-400"
        >
          Please wait a moment
        </motion.span>
      </motion.div>

      {/* Glowing Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
