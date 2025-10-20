"use client";

import { X, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface NotificationModalProps {
  onClose: () => void;
  // Không cần 'message' vì nội dung đã được hardcode theo thiết kế
}

export default function NotificationModal({ onClose }: NotificationModalProps) {

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
          {/* Mimicking the red circle from the image */}
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

        {/* Nội dung thông báo */}
        <div className="mt-4">
          
          {/* Dòng 1: Bạn là Quản trị viên. */}
          <p className="text-gray-800 text-base font-semibold mb-2">
            Bạn là Quản trị viên.
          </p>

          {/* Dòng 2 & 3: Tài khoản bị chặn và không thể tiếp tục... */}
          <p className="text-gray-800 text-sm mb-4 leading-relaxed">
            Tài khoản của bạn hiện <span className="font-semibold text-red-600">đã bị chặn</span> và 
            không thể tiếp tục sử dụng hệ thống.
          </p>

          {/* Dòng 4: Vui lòng liên hệ... */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Vui lòng liên hệ trực tiếp với bộ phận phụ trách trong công ty để biết thêm thông tin.
          </p>
          
          {/* Dòng 5: Hệ thống không hỗ trợ khiếu nại */}
          <p className="text-gray-500 text-xs italic">
            Hệ thống không hỗ trợ xử lý khiếu nại đối với tài khoản Quản trị viên bị chặn.
          </p>
        </div>
      </div>
    </motion.div>
  );
}