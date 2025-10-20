"use client";

import { X, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorAlertProps {
  message: string;
  onClose: () => void;
}

export default function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div className="relative bg-white rounded-2xl shadow-xl px-6 py-5 w-[90%] max-w-xs text-center">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={18} />
        </button>

        {/* Icon cảnh báo */}
        <div className="flex justify-center mb-3">
          <div className="bg-red-100 rounded-full p-2">
            <AlertCircle className="text-red-500" size={28} />
          </div>
        </div>

        {/* Nội dung */}
        <p className="text-sm font-semibold text-gray-800 mb-1">
          <span className="text-red-600 font-bold">Mã OTP</span> không chính xác.
        </p>
        <p className="text-gray-600 text-xs">
          Vui lòng kiểm tra và thử lại.
        </p>
      </div>
    </motion.div>
  );
}
