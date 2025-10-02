"use client";

import React, { useState } from "react";

// User type and data
type User = {
  fullName: string
  role: string
  email: string
  phone: string
  status: string
  lockDate: string
  lockReason: string
  appealReason: string
  processingHistory: Array<{
    id: number
    processor: string
    processDate: string
    action: string
    note: string
  }>
}

const user: User = {
  fullName: "Trịnh Mai Cường",
  role: "Nhà thiết kế",
  email: "maicuong123@gmail.com", 
  phone: "0123456789",
  status: "Đang bị khoá",
  lockDate: "10/07/2025",
  lockReason: "Tài khoản bị khóa do đăng mẫu thiết kế bị báo cáo vi phạm bản quyền quá 3 lần trong vòng 7 ngày.",
  appealReason: "Tài khoản bị khoá nhầm",
  processingHistory: [
    {
      id: 1,
      processor: "Nguyễn Thị Bình",
      processDate: "15/07/2025",
      action: "Từ chối",
      note: "Vi phạm 1 lần trước đó, chưa gỡ mẫu vi phạm."
    },
    {
      id: 2,
      processor: "Nguyễn Văn An", 
      processDate: "24/07/2025",
      action: "Từ chối",
      note: "Đề nghị khoá vĩnh viễn."
    }
  ]
}

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
              className="absolute right-0 top-0 inline-flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded"
            >
              <img src="/xButtonIcon.png" alt="Close" className="w-5 h-5" />
            </button>
          </div>

          {/* Two column info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-6 text-slate-900">
            <InfoRow label="Họ và tên đầy đủ" value={user.fullName} />
            <InfoRow label="Vai trò" value={user.role} />
            <InfoRow label="Địa chỉ email" value={user.email} />
            <InfoRow label="SĐT" value={user.phone} />
            <InfoRow label="Trạng thái" value={user.status} />
            <InfoRow label="Ngày khoá" value={user.lockDate} />
          </div>

          {/* Reasons */}
          <div className="mt-6 text-slate-900">
            <ReasonSection label="Lý do khoá tài khoản" value={user.lockReason} />
            <ReasonSection label="Lý do khiếu nại" value={user.appealReason} className="mt-4" />
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
                  {user.processingHistory.map((record) => (
                    <tr key={record.id}>
                      <td className="border border-slate-400 py-2 px-3 text-center">{record.id}</td>
                      <td className="border border-slate-400 py-2 px-3">{record.processor}</td>
                      <td className="border border-slate-400 py-2 px-3 text-center">{record.processDate}</td>
                      <td className="border border-slate-400 py-2 px-3 text-center">{record.action}</td>
                      <td className="border border-slate-400 py-2 px-3">{record.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* --- Components --- */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-semibold">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  )
}

function ReasonSection({ 
  label, 
  value, 
  className 
}: { 
  label: string; 
  value: string; 
  className?: string 
}) {
  return (
    <div className={className}>
      <p className="font-semibold">{label}</p>
      <p className="mt-2">{value}</p>
    </div>
  )
}