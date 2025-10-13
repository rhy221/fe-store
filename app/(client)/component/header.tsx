"use client"

import React from "react"
import { Home, Star, ShoppingCart, Shirt, User, AlertTriangle, Settings } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full">

      <div className="flex justify-between items-center bg-blue-50 px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold">HHCLOSET</h1>
        </div>
        <div>
          <p className="text-lg font-bold italic">Xin chào: ABC</p>
        </div>
      </div>

      <div className="grid grid-cols-7 bg-blue-900 text-white text-center">
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <Home className="w-6 h-6 mb-1" />
          <span>Trang chủ</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <Star className="w-6 h-6 mb-1" />
          <span>Nổi bật</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <ShoppingCart className="w-6 h-6 mb-1" />
          <span>Mua hàng</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <Shirt className="w-6 h-6 mb-1" />
          <span>Thể loại</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <User className="w-6 h-6 mb-1" />
          <span>Tài khoản</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-r border-white hover:bg-blue-800 cursor-pointer">
          <AlertTriangle className="w-6 h-6 mb-1" />
          <span>Báo cáo</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 hover:bg-blue-800 cursor-pointer">
          <Settings className="w-6 h-6 mb-1" />
          <span>Cài Đặt</span>
        </div>
      </div>
    </div>
  )
}
