// app/unlock-history/page.tsx
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function UnlockHistoryModalPage() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
        <div className="mt-10 mb-8 w-full max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-8">
          {/* Header */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-slate-900">
              Chi tiết xử lý
            </h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Đóng"
              className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-black text-white w-8 h-8"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Two column info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-6 text-slate-900">
            <div>
              <p className="font-semibold">Họ và tên đầy đủ</p>
              <p className="mt-1">Trịnh Mai Cường</p>
            </div>
            <div>
              <p className="font-semibold">Vai trò</p>
              <p className="mt-1">Nhà thiết kế</p>
            </div>

            <div>
              <p className="font-semibold">Địa chỉ email</p>
              <p className="mt-1">maicuong123@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">SĐT</p>
              <p className="mt-1">0123456789</p>
            </div>

            <div>
              <p className="font-semibold">Trạng thái</p>
              <p className="mt-1">Đang bị khoá</p>
            </div>
            <div>
              <p className="font-semibold">Ngày khoá</p>
              <p className="mt-1">10/07/2025</p>
            </div>
          </div>

          {/* Reasons */}
          <div className="mt-6 text-slate-900">
            <p className="font-semibold">Lý do khoá tài khoản</p>
            <p className="mt-2">
              Tài khoản bị khóa do đăng mẫu thiết kế bị báo cáo vi phạm bản quyền quá 3 lần trong vòng 7 ngày.
            </p>

            <p className="mt-4 font-semibold">Lý do khiếu nại</p>
            <p className="mt-2">Tài khoản bị khoá nhầm</p>
          </div>

          {/* History table */}
          <div className="mt-6">
            <p className="font-semibold mb-3">Lịch sử xử lý</p>

            <div className="overflow-x-auto">
              <table className="w-full border border-slate-400 border-collapse text-sm">
                <thead>
                  <tr className="bg-white text-slate-700">
                    <th className="border border-slate-400 py-2 px-3">STT</th>
                    <th className="border border-slate-400 py-2 px-3">Người xử lý</th>
                    <th className="border border-slate-400 py-2 px-3">Ngày xử lý</th>
                    <th className="border border-slate-400 py-2 px-3">Hành động</th>
                    <th className="border border-slate-400 py-2 px-3">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-400 py-2 px-3 text-center">1</td>
                    <td className="border border-slate-400 py-2 px-3">Nguyễn Thị Bình</td>
                    <td className="border border-slate-400 py-2 px-3 text-center">15/07/2025</td>
                    <td className="border border-slate-400 py-2 px-3 text-center">Từ chối</td>
                    <td className="border border-slate-400 py-2 px-3">
                      Vi phạm 1 lần trước đó, chưa gỡ mẫu vi phạm.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-400 py-2 px-3 text-center">2</td>
                    <td className="border border-slate-400 py-2 px-3">Nguyễn Văn An</td>
                    <td className="border border-slate-400 py-2 px-3 text-center">24/07/2025</td>
                    <td className="border border-slate-400 py-2 px-3 text-center">Từ chối</td>
                    <td className="border border-slate-400 py-2 px-3">
                      Đề nghị khoá vĩnh viễn.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
