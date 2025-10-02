"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function WarningDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-6" showCloseButton={false}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Cảnh cáo
          </DialogTitle>

          {/* Envelope-style close button */}
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-6 border rounded-md bg-muted hover:bg-muted/70"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex gap-6 mt-4">
          {/* Left: Image */}
          <div className="w-60">
            <img
              src="/shoe.png"
              alt="Mẫu thiết kế"
              className="w-full rounded-md border"
            />
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-2 text-sm leading-relaxed">
            <p>
              <span className="font-semibold">Tên mẫu thiết kế</span>{" "}
              Footwear Romans Cad
            </p>
            <p>
              <span className="font-semibold">Nhà thiết kế</span> Nguyễn Văn Tiên
            </p>
            <p>
              <span className="font-semibold">Mô tả</span> Mẫu giày lấy cảm hứng từ chiến binh La Mã với thiết kế dây đan mạnh mẽ và phong cách cổ điển hiện đại.
            </p>
            <p>
              <span className="font-semibold">Thể loại</span> Giày
            </p>
            <p>
              <span className="font-semibold">Trạng thái</span> Chia sẻ{" "}
              <span className="font-semibold">Ngày đăng mẫu</span> 15/09/2024
            </p>

            <p className="font-semibold mt-3">Nội dung cảnh cáo</p>
            <textarea
              rows={2}
              className="w-full border-0 border-b border-black resize-none focus:outline-none focus:ring-0"
              placeholder=""
            />
            <textarea
              rows={2}
              className="w-full border-0 border-b border-black resize-none focus:outline-none focus:ring-0"
              placeholder=""
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold">
            Gửi qua email
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
