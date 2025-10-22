"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Bell, BellOff, Heart, User, MessageCircle, Store, Search, Filter, ShoppingCart } from "lucide-react"

export default function CustomerFollow() {
  const designers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      rating: 4.5,
      status: "Đang hoạt động",
      statusColor: "bg-green-500",
      follower: 15,
      products: 39,
      reviews: 40,
      active: true,
    },
    {
      id: 2,
      name: "Phạm Văn B",
      rating: 4,
      status: "Không hoạt động",
      statusColor: "bg-gray-500",
      follower: 30,
      products: 69,
      reviews: 36,
      active: false,
    },
  ]

  return (
    <div className="p-6 space-y-6">

  <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center border rounded-md px-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <Input
            placeholder="Tìm kiếm sản phẩm yêu thích"
            className="w-[220px] border-none focus-visible:ring-0"
          />
        </div>
        <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
          <Search className="w-4 h-4" /> Tìm kiếm
        </Button>

        <Button variant="outline">Tất cả</Button>
        <Button variant="outline">Mới nhất</Button>
        <Button
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Chỉ còn hàng
        </Button>
        <Button variant="secondary" className="flex items-center gap-1">
          <Filter className="w-4 h-4" /> Lọc
        </Button>

        <div className="ml-auto flex gap-3">
          <Card className="p-2 text-center flex flex-col items-center">
            <p className="text-sm">Yêu thích</p>
            <div className="flex">
            <Heart className="text-pink-500 w-4 h-4 mt-1" />
            <p className="text-pink-600 font-bold">5</p>
            </div>
          </Card>
          <Card className="p-2 text-center flex flex-col items-center">
            <p className="text-sm">Theo dõi</p>
            <div className="flex">
            <User className="text-blue-500 w-4 h-4 mt-1" />
            <p className="text-blue-600 font-bold">2</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {designers.map((d) => (
          <Card
            key={d.id}
            className="relative border shadow hover:shadow-lg transition p-4 bg-[#fdf7f0]"
          >

            <div
              className={`absolute top-2 left-2 px-2 py-1 text-xs rounded-md text-white flex items-center gap-1 ${d.statusColor}`}
            >
              <span>{d.status}</span>
            </div>
            <div className="absolute top-2 right-2 p-1">
              {d.active ? (
                <Bell className="text-blue-500 w-4 h-4" />
              ) : (
                <BellOff className="text-gray-500 w-4 h-4" />
              )}
            </div>

          
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                alt={d.name}
                className="w-20 h-20 rounded-full border"
              />
              <CardTitle className="flex items-center gap-1">
                {d.name} <span className="text-yellow-500">⭐ {d.rating}</span>
              </CardTitle>

          
              <div className="flex gap-2 text-white text-sm font-semibold">
                <div className="bg-blue-500 px-3 py-2 rounded-md">
                  Người theo dõi <br /> {d.follower}
                </div>
                <div className="bg-green-500 px-3 py-2 rounded-md">
                  Số sản phẩm <br /> {d.products}
                </div>
                <div className="bg-yellow-500 px-3 py-2 rounded-md">
                  Lượt đánh giá <br /> {d.reviews}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-black hover:bg-gray-800 flex gap-1">
                  <MessageCircle className="w-4 h-4" /> Nhắn tin
                </Button>
                <Button className="bg-blue-900 hover:bg-blue-800 flex gap-1">
                  <Store className="w-4 h-4" /> Xem shop
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 flex gap-1">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
