// app/unlock-request/page.tsx
"use client";

import React, { useState } from "react";
import { X, CheckCircle, Slash } from "lucide-react";

export default function UnlockRequestModalPage() {
  const [open, setOpen] = useState(true);
  const [action, setAction] = useState<"unlock" | "reject" | null>(null);
  const [warnLast, setWarnLast] = useState(false);
  const [sendCommitment, setSendCommitment] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Modal container - top aligned, centered horizontally */}
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
        <div className="mt-6 mb-8 w-full max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          {/* Header */}
          <div className="relative border-b border-gray-100 px-8 pt-6 pb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
              Chi tiết yêu cầu mở khoá
            </h2>

            {/* top-right close pill */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Đóng"
              className="absolute right-6 top-4 inline-flex items-center justify-center rounded-lg bg-black text-white w-9 h-9"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-8 pb-8 pt-6">
            {/* Two column info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-slate-900">
              <div>
                <p className="text-base font-semibold">Họ và tên đầy đủ</p>
                <p className="mt-1 text-base">Trịnh Mai Cường</p>
              </div>
              <div>
                <p className="text-base font-semibold">Vai trò</p>
                <p className="mt-1 text-base">Nhà thiết kế</p>
              </div>

              <div>
                <p className="text-base font-semibold">Địa chỉ email</p>
                <p className="mt-1 text-base">maicuong123@gmail.com</p>
              </div>
              <div>
                <p className="text-base font-semibold">SĐT</p>
                <p className="mt-1 text-base">0123456789</p>
              </div>

              <div>
                <p className="text-base font-semibold">Trạng thái</p>
                <p className="mt-1 text-base">Đang bị khoá</p>
              </div>
              <div>
                <p className="text-base font-semibold">Ngày khoá</p>
                <p className="mt-1 text-base">10/07/2025</p>
              </div>
            </div>

            {/* Reasons */}
            <div className="mt-6 text-slate-900">
              <p className="font-semibold text-base">Lý do khoá tài khoản</p>
              <p className="mt-2 text-base">
                Tài khoản bị khóa do đăng mẫu thiết kế bị báo cáo vi phạm bản quyền quá 3 lần trong vòng 7 ngày.
              </p>

              <p className="mt-4 font-semibold text-base">Lý do khiếu nại</p>
              <p className="mt-2 text-base">Tài khoản bị khoá nhầm</p>
            </div>

            {/* History table */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Lịch sử xử lý</p>

              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse text-sm">
                  <thead>
                    <tr className="bg-white text-left text-slate-700">
                      <th className="py-3 px-3 border border-slate-200 w-12">STT</th>
                      <th className="py-3 px-3 border border-slate-200">Người xử lý</th>
                      <th className="py-3 px-3 border border-slate-200 w-40">Ngày xử lý</th>
                      <th className="py-3 px-3 border border-slate-200 w-32">Hành động</th>
                      <th className="py-3 px-3 border border-slate-200">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-3 border border-slate-200">1</td>
                      <td className="py-3 px-3 border border-slate-200">Nguyễn Thị Bình</td>
                      <td className="py-3 px-3 border border-slate-200">15/07/2025</td>
                      <td className="py-3 px-3 border border-slate-200">Từ chối</td>
                      <td className="py-3 px-3 border border-slate-200">
                        Vi phạm 1 lần trước đó, chưa gỡ mẫu vi phạm.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action area */}
            <div className="mt-6">
              <p className="font-semibold mb-4">Hành động xử lý</p>

              {/* Radio style - inline */}
              <div className="flex items-center gap-8 mb-4">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="action"
                    checked={action === "unlock"}
                    onChange={() => setAction("unlock")}
                    className="w-5 h-5 text-blue-600"
                  />
                  <span className="flex items-center gap-2 text-base">
                    Mở khoá
                    <span className="inline-flex items-center justify-center rounded bg-green-600 text-white w-6 h-6 text-xs">
                      ✓
                    </span>
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="action"
                    checked={action === "reject"}
                    onChange={() => setAction("reject")}
                    className="w-5 h-5 text-red-600"
                  />
                  <span className="flex items-center gap-2 text-base">
                    Từ chối
                    <span className="inline-flex items-center justify-center rounded bg-red-400 text-white w-6 h-6 text-xs">
                      ⊖
                    </span>
                  </span>
                </label>
              </div>

              {/* Small checkboxes */}
              <div className="flex flex-col gap-2 mb-6">
                <label className="flex items-center gap-3 text-base">
                  <input
                    type="checkbox"
                    checked={warnLast}
                    onChange={(e) => setWarnLast(e.target.checked)}
                    className="w-4 h-4"
                  />
                  Cảnh báo lần cuối cùng.
                </label>

                <label className="flex items-center gap-3 text-base">
                  <input
                    type="checkbox"
                    checked={sendCommitment}
                    onChange={(e) => setSendCommitment(e.target.checked)}
                    className="w-4 h-4"
                  />
                  Gửi cam kết qua email.
                </label>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-2">Lý do từ chối</p>

                {/* Underline style textarea */}
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder=""
                  className="w-full resize-y bg-transparent border-0 border-b-2 border-slate-300 focus:outline-none focus:border-slate-400 py-2 text-base min-h-[56px]"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 pb-6">
              <button
                onClick={() => {
                  // placeholder submit logic
                  alert(`Action: ${action ?? "none"}\nWarnLast: ${warnLast}\nSendCommit: ${sendCommitment}\nReason: ${rejectReason}`);
                }}
                className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 rounded-full"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
