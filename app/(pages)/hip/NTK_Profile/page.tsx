"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [search, setSearch] = useState("");
  const [editingAvatar, setEditingAvatar] = useState(false);
  const [avatar, setAvatar] = useState("/avatar.png");

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  if (editingAvatar) {
    // === CHỌN ẢNH ĐẠI DIỆN SCREEN ===
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white rounded-3xl">
        <h2 className="text-lg font-bold mb-6">Chọn ảnh đại diện</h2>

        <div className="relative mb-8">
          <Image
            src={avatar}
            alt="Avatar"
            width={150}
            height={150}
            className="rounded-full border border-gray-300"
          />
        </div>

        <div className="flex space-x-10">
          {/* Delete Button */}
          <button
            onClick={() => setAvatar("/avatar.png")}
            className="bg-red-600 text-white font-semibold px-8 py-2 rounded-full hover:bg-red-700 transition"
          >
            Xóa
          </button>

          {/* Add Button */}
          <label className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
            Thêm
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </label>
        </div>

        <button
          onClick={() => setEditingAvatar(false)}
          className="mt-10 text-sm underline text-gray-600 hover:text-gray-900"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  // === TRANG CÁ NHÂN ===
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="flex justify-between items-center bg-[#e9f0f8] px-8 py-4 shadow">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="HHCloset Logo" width={40} height={40} />
          <h1 className="text-xl font-bold text-gray-800">HHCLOSET</h1>
        </div>
        <span className="text-sm font-semibold">Xin chào NTK: XYZ</span>
      </header>

      {/* Navbar */}
      <nav className="bg-[#001f87] text-white flex space-x-8 px-10 py-3 text-sm font-medium">
        <a href="#" className="hover:underline">TRANG CHỦ</a>
        <a href="#" className="hover:underline">CÁ NHÂN</a>
        <a href="#" className="hover:underline">MUA BÁN</a>
        <a href="#" className="hover:underline">CÀI ĐẶT</a>
        <a href="#" className="hover:underline">ĐĂNG XUẤT</a>
      </nav>

      {/* Search */}
      <div className="flex justify-center mt-6 space-x-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nhập nội dung tìm kiếm"
          className="border border-gray-300 rounded-full px-5 py-2 w-72 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button className="bg-green-500 text-white rounded-full px-5 py-2 font-medium hover:bg-green-600">
          Tìm kiếm
        </button>
      </div>

      {/* Profile */}
      <section className="flex flex-col items-center mt-10 space-y-4">
        <div className="relative">
          <Image
            src={avatar}
            alt="Avatar"
            width={120}
            height={120}
            className="rounded-full border border-gray-200"
          />
          <button
            onClick={() => setEditingAvatar(true)}
            className="absolute bottom-2 right-2 bg-gray-200 p-1 rounded-full hover:bg-gray-300"
          >
            ✏️
          </button>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Nguyễn Văn A</h2>
      </section>

      {/* Personal Info */}
      <section className="max-w-md mx-auto mt-8">
        <h3 className="text-lg font-bold mb-3">Thông tin cá nhân</h3>
        <div className="space-y-2 text-sm">
          <p><strong>Email:</strong> nguyen@example.com</p>
          <p><strong>SĐT:</strong> 0123456789</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-xl mx-auto mt-10 flex justify-around">
        <div className="bg-green-200 rounded-xl px-10 py-5 text-center">
          <p className="text-sm font-semibold">Số mẫu thiết kế</p>
          <p className="text-4xl font-bold text-green-700">36</p>
        </div>
        <div className="bg-red-200 rounded-xl px-10 py-5 text-center">
          <p className="text-sm font-semibold">Lượt xem</p>
          <p className="text-4xl font-bold text-red-700">6336</p>
        </div>
      </section>
    </div>
  );
}
