"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// Design type and data
type Design = {
  name: string
  designer: string
  description: string
  category: string
  status: string
  datePosted: string
  image: string
}

const design: Design = {
  name: "Footwear Romans Cad",
  designer: "Nguyễn Văn Tiên",
  description: "Mẫu giày lấy cảm hứng từ chiến binh La Mã với thiết kế dây đan mạnh mẽ và phong cách cổ điển hiện đại.",
  category: "Giày",
  status: "Chia sẻ",
  datePosted: "15/09/2024",
  image: "/designImage.png"
}

export default function WarningDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl p-6" showCloseButton={false}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Cảnh cáo
          </DialogTitle>

          {/* Close button with X icon image */}
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-6 border rounded-md bg-muted hover:bg-muted/70"
          >
            <img src="/xButtonIcon.png" alt="Close" className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex gap-6 mt-4">
          {/* Left: Image */}
          <div className="w-60">
            <img
              src={design.image}
              alt={design.name}
              className="w-full rounded-md border"
            />
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-2 text-sm leading-relaxed">
            <InfoRow label="Tên mẫu thiết kế" value={design.name} />
            <InfoRow label="Nhà thiết kế" value={design.designer} />
            <InfoRow label="Mô tả" value={design.description} />
            <InfoRow label="Thể loại" value={design.category} />
            <div className="flex gap-8">
              <InfoRow label="Trạng thái" value={design.status} />
              <InfoRow label="Ngày đăng mẫu" value={design.datePosted} />
            </div>

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

/* --- Components --- */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="font-semibold">{label}:</span> {value}
    </p>
  )
}