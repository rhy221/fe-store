"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Clock } from "lucide-react"

export default function CustomerSetPrice() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-3 text-center">
            <p className="font-bold">Mã phiên</p>
            <p className="text-gray-600">000001</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="font-bold">Người tham gia</p>
            <p className="text-gray-600">2 người</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="font-bold">Tổng lượt đặt</p>
            <p className="text-gray-600">2 lượt</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="font-bold">Trạng thái</p>
            <p className="text-green-600 font-semibold">Đang diễn ra</p>
            <p className="text-sm text-red-600">1 ngày 3 giờ 24 phút</p>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Thông Tin Mẫu Thiết Kế</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617" alt="Giày" className="rounded-md mb-3" />
              <h3 className="font-semibold">Footwear Romans Cad</h3>
              <p className="text-sm">Thể loại: Giày</p>
              <p className="text-sm text-gray-500 mt-2">
                Mẫu giày lấy cảm hứng từ chiến binh La Mã với thiết kế dày dặn
                mạnh mẽ và phong cách cổ điển hiện đại.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Đặt giá đấu</p>
              <div className="border p-3 rounded-md bg-gray-50 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <span>Giá tối thiểu tiếp theo: 2,200,000đ</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="border px-3 py-2 rounded-md w-full"
                  placeholder="2.200.000"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Đặt giá
                </Button>
              </div>

              <p className="font-semibold">Đặt giá nhanh:</p>
              <div className="flex gap-2 flex-wrap">
                {[2500000, 3000000, 3500000].map((v) => (
                  <Button key={v} className="bg-blue-600 hover:bg-blue-700">
                    {v.toLocaleString("vi-VN")}đ
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông Tin Đấu Giá</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-gray-500">Giá hiện tại</p>
              <p className="text-2xl font-bold">5.400.000đ</p>
            </div>
            <p>Giá khởi điểm: 2.000.000đ</p>
            <p>Bước giá: 200.000đ</p>
            <p>Thời gian bắt đầu: 16:00 15/01/2024</p>
            <p>Thời gian kết thúc: 00:00 19/01/2024</p>
          </CardContent>
        </Card>

        <Card className="border-red-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Clock className="w-4 h-4" /> Thời Gian Còn Lại
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Đã trôi qua 100%</p>
            <div className="w-full bg-gray-200 h-2 rounded-full my-2">
              <div className="bg-red-600 h-2 rounded-full w-full"></div>
            </div>
            <div className="grid grid-cols-4 text-center font-bold">
              <div>00 Ngày</div>
              <div>00 Giờ</div>
              <div>00 Phút</div>
              <div>00 Giây</div>
            </div>
            <p className="text-red-600 font-semibold mt-3">
              Phiên đấu giá sắp kết thúc
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lịch Sử Đấu Giá</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-green-100 p-2 rounded-md">
              <p className="font-semibold text-green-700">Đang dẫn đầu</p>
              <p>Nhà thiết kế 1</p>
              <p className="font-bold">5.400.000đ</p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Lịch Sử Đặt Giá
              </p>
              <div className="border p-2 rounded-md">
                <p>Nhà thiết kế 1 — 21:30 17/01</p>
                <p className="font-bold">5.400.000đ (Cao nhất)</p>
              </div>
              <div className="border p-2 rounded-md">
                <p>Khách hàng 1 — 21:15 17/01</p>
                <p className="font-bold">5.200.000đ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
