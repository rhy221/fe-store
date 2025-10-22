"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { X, Search, Filter, Heart, User, ShoppingCart } from "lucide-react"

export default function CustomerLike() {
  const initialProducts = [
    { id: 1, name: "Footwear Romans Cad", status: "CHIA SẺ", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617" },
    { id: 2, name: "Giày Sunday Chunky", status: "CÒN HÀNG", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617"  },
    { id: 3, name: "Giày Yueying 3 Nam", status: "CHIA SẺ", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617"  },
    { id: 4, name: "Giày Grand Sport", status: "HẾT HÀNG", image:"https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617"  },
    { id: 5, name: "Túi xách Flower", status: "ĐANG ĐẤU GIÁ", image:"https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/nike-air-jordan-1-low-gs-553560-7-1731904620405.jpg?v=1731904624617"  },
  ]

  const [products, setProducts] = useState(initialProducts)
  const [search, setSearch] = useState("")
  const [filterOnlyStock, setFilterOnlyStock] = useState(false)

  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const handleAddToCart = (name: string) => {
    alert(`Đã thêm "${name}" vào giỏ hàng `)
  }

  const handleBuyNow = (name: string) => {
    alert(`Mua ngay sản phẩm: "${name}"`)
  }

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchStock = !filterOnlyStock || p.status === "CÒN HÀNG"
    return matchSearch && matchStock
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center border rounded-md px-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <Input
            placeholder="Tìm kiếm sản phẩm yêu thích"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[220px] border-none focus-visible:ring-0"
          />
        </div>
        <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
          <Search className="w-4 h-4" /> Tìm kiếm
        </Button>

        <Button variant="outline">Tất cả</Button>
        <Button variant="outline">Mới nhất</Button>
        <Button
          variant={filterOnlyStock ? "default" : "outline"}
          onClick={() => setFilterOnlyStock((prev) => !prev)}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <Card
            key={p.id}
            className="relative hover:shadow-lg hover:border-blue-400 transition border"
          >
            {/* Nút đóng */}
            <button
              onClick={() => handleRemove(p.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <X size={16} />
            </button>

            <CardContent className="flex flex-col items-center text-center space-y-3 p-4">
              <img src={p.image} alt={p.name} className="h-32 object-contain" />
              <CardTitle className="text-base">{p.name}</CardTitle>
              <p className="text-sm text-gray-500">Trạng thái: {p.status}</p>

              <div className="flex gap-2">
                <Button
                  className="bg-black hover:bg-gray-800 flex items-center gap-1"
                  onClick={() => handleAddToCart(p.name)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  className="bg-blue-900 hover:bg-blue-800"
                  onClick={() => handleBuyNow(p.name)}
                >
                  Mua ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
