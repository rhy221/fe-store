"use client";

import { X, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorAlertProps {
  message?: string;
  onClose: () => void;
}

export default function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="relative bg-white rounded-2xl shadow-lg w-[90%] max-w-xs px-5 py-6 text-center">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={18} />
        </button>

        {/* Biểu tượng cảnh báo */}
        <div className="flex justify-center mb-3">
          <div className="bg-red-100 p-2 rounded-full">
            <AlertCircle className="text-red-500" size={22} />
          </div>
        </div>

        {/* Nội dung thông báo */}
        <p className="text-gray-800 text-sm font-medium mb-1">
          Mật khẩu phải có{" "}
          <span className="font-semibold text-red-600">ít nhất 8 ký tự.</span>
        </p>
        <p className="text-gray-500 text-xs">Vui lòng nhập lại.</p>
      </div>
    </motion.div>
  );
}