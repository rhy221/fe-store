"use client";

import { X, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorAlertProps {
  message: string; // Not used directly in this specific design, but kept for interface consistency
  onClose: () => void;
  // Optional: A function for the "Gửi khiếu nại" button action
  onComplain?: () => void; 
}

export default function ErrorAlert({ onClose, onComplain }: ErrorAlertProps) {
  // Use a placeholder for the complain action if none is provided
  const handleComplain = onComplain || (() => console.log("Gửi khiếu nại clicked"));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      // Full screen overlay
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs px-5 pt-12 pb-6 text-center">
        
        {/* Biểu tượng cảnh báo lớn - Red Circle with '!' */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Mimicking the red circle with a strong shadow for the 3D effect */}
          <div className="bg-red-500 p-3 rounded-full shadow-xl shadow-red-400/50">
             {/* Using a large white AlertCircle to represent the '!' inside */}
            <AlertCircle className="text-white" size={32} />
          </div>
        </div>

        {/* Nút đóng (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        {/* Nội dung thông báo chính */}
        <div className="mt-4">
          <p className="text-gray-800 text-sm font-semibold mb-3">
            Hiện tại tài khoản của bạn <span className="text-red-600">đã bị khóa.</span>
          </p>

          {/* Hướng dẫn khiếu nại */}
          <p className="text-gray-600 text-sm mb-6">
            Nếu bạn cho rằng đây là sự nhầm lẫn, vui lòng gửi yêu cầu khiếu nại tại đây.
          </p>
        </div>

        {/* Nút gửi khiếu nại */}
        <button
          onClick={handleComplain}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition duration-150 shadow-md shadow-blue-500/50"
        >
          Gửi khiếu nại
        </button>
      </div>
    </motion.div>
  );
}