"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function DesignDetailDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-6" showCloseButton={false}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Xem chi tiết mẫu thiết kế
          </DialogTitle>

          {/* Envelope-style close button */}
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-6 border rounded-md bg-muted hover:bg-muted/70"
          >
            <X className="w-4 h-4 text-black" />
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
            <p><span className="font-semibold">Tên mẫu thiết kế</span> Footwear Romans Cad</p>
            <p><span className="font-semibold">Nhà thiết kế</span> Nguyễn Văn Tiên</p>
            <p>
              <span className="font-semibold">Mô tả</span> Mẫu giày lấy cảm hứng từ chiến binh La Mã với thiết kế dây đan mạnh mẽ và phong cách cổ điển hiện đại.
            </p>
            <p><span className="font-semibold">Thể loại</span> Giày</p>
            <p>
              <span className="font-semibold">Trạng thái</span> Chia sẻ{" "}
              <span className="font-semibold">Ngày đăng mẫu</span> 15/09/2024
            </p>

            <h4 className="mt-3 font-semibold">Thông tin bán hàng</h4>
            <p><span className="font-semibold">Giá bán trực tiếp:</span> X</p>
            <p><span className="font-semibold">Đấu giá:</span></p>
            <ul className="list-disc list-inside pl-2">
              <li>Giá khởi điểm: X</li>
              <li>Bước giá: X</li>
              <li>Giá chốt cuối cùng: X</li>
              <li>Người chốt: X</li>
            </ul>

            <p>
              <span className="font-semibold">Lượt thích</span> 135 &nbsp;&nbsp;
              <span className="font-semibold">Lượt xem</span> 125
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white">
            Cảnh cáo
          </button>
          <button className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white">
            Xoá
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
