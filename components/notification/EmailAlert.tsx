"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorAlertProps {
  message: string;
  onClose: () => void;
}

export default function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 min-h-screen w-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
      style={{ position: 'fixed', top: 0, left: 0 }}
    >
      <div className="relative bg-white border border-red-300 rounded-2xl shadow-2xl px-6 py-5 w-[90%] max-w-sm text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={18} />
        </button>

        <div className="mt-2">
          <p className="text-red-600 font-semibold text-base mb-1">
            {message || "Email không tồn tại"}
          </p>
          <p className="text-gray-600 text-sm">
            Vui lòng kiểm tra lại email của bạn.
          </p>
        </div>
      </div>
    </motion.div>
  );
}