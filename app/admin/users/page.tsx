"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Lock, Trash2, Unlock, Filter } from "lucide-react";
import { Users, User, Ban } from "lucide-react";
import { Home, UserCog, Layers, BarChart3, Settings, LogOut } from "lucide-react";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  // Dropdown states
  const [showUserStatusDropdown, setShowUserStatusDropdown] = useState(false);
  const [showUserTypeDropdown, setShowUserTypeDropdown] = useState(false);
  const [showUnlockStatusDropdown, setShowUnlockStatusDropdown] = useState(false);

  // Selected filter values
  const [userStatusFilter, setUserStatusFilter] = useState<"all" | "active" | "locked">("all");
  const [userTypeFilter, setUserTypeFilter] = useState<"all" | "designer" | "customer">("all");
  const [unlockStatusFilter, setUnlockStatusFilter] = useState<"all" | "pending" | "processed">("all");

  const userStatusRef = useRef<HTMLDivElement | null>(null);
  const userTypeRef = useRef<HTMLDivElement | null>(null);
  const unlockStatusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userStatusRef.current && !userStatusRef.current.contains(e.target as Node)) {
        setShowUserStatusDropdown(false);
      }
      if (userTypeRef.current && !userTypeRef.current.contains(e.target as Node)) {
        setShowUserTypeDropdown(false);
      }
      if (unlockStatusRef.current && !unlockStatusRef.current.contains(e.target as Node)) {
        setShowUnlockStatusDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sample data
  const users = [
    { id: 1, name: "Nguyễn Thị An", type: "designer", status: "active" },
    { id: 2, name: "Phạm Công Bình", type: "customer", status: "active" },
    { id: 3, name: "Trịnh Mai Cường", type: "designer", status: "locked" },
  ];

  const unlockRequests = [
    { id: 1, name: "Trịnh Mai Cường", reason: "Tài khoản bị khoá nhầm", date: "22/07/2025", status: "pending" },
    { id: 2, name: "Nguyễn Văn B", reason: "Yêu cầu review", date: "01/08/2025", status: "processed" },
  ];

  // Filtering logic
  const filteredUsers = users.filter((u) => {
    const matchesSearch = search.trim() === "" || u.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesStatus = userStatusFilter === "all" ? true : u.status === userStatusFilter;
    const matchesType = userTypeFilter === "all" ? true : u.type === userTypeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const filteredUnlockRequests = unlockRequests.filter((r) => {
    const matchesSearch = search.trim() === "" || r.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesStatus =
      unlockStatusFilter === "all"
        ? true
        : unlockStatusFilter === "pending"
        ? r.status === "pending"
        : r.status === "processed";
    return matchesSearch && matchesStatus;
  });

  // Display helpers
  const displayUserStatus = (s: string) => (s === "active" ? "Đang hoạt động" : "Bị khoá");
  const displayUserType = (t: string) => (t === "designer" ? "Nhà thiết kế" : "Khách hàng");
  const displayUnlockStatus = (s: string) => (s === "pending" ? "Đang chờ xử lý" : "Đã xử lý");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Banner */}
      <header className="bg-[#F0F7FF] flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
            <span className="text-blue-900 font-bold text-lg">HH</span>
          </div>
           <h1 className="text-4xl font-extrabold text-black">HHCLOSET</h1>
        </div>
          <div className="text-2xl font-extrabold italic text-black">
    Xin chào admin: ABC
  </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white p-4 space-y-4">
                  <nav className="flex flex-col px-2">
            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <Home className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Trang chủ</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <UserCog className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Quản lý admin</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <Users className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold  leading-none">Quản lý người dùng</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <Layers className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Thể loại</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <BarChart3 className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Báo cáo</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
              <Settings className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Hệ thống</span>
            </button>
            <hr className="-mx-2 my-2 h-px bg-white/50 border-0" />

            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70] mt-2">
              <LogOut className="w-6 h-6 shrink-0" />
              <span className="text-2xl font-semibold whitespace-nowrap leading-none">Đăng xuất</span>
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Quick stats */}
            <h1 className="font-bold text-xl md:text-4xl">Thống kê nhanh</h1>
         <div className="grid grid-cols-3 gap-6 mb-6">
  {/* Designers */}
<Card className="bg-green-500 text-white rounded-3xl px-8 py-4 flex flex-col items-center shadow">
  {/* Title */}
  <span className="font-bold text-lg mb-1">Nhà thiết kế</span>

  {/* Icon + Number */}
  <div className="flex items-center gap-3">
    <Users className="w-10 h-10" />
    <span className="text-3xl font-extrabold">64</span>
  </div>
</Card>

<Card className="bg-yellow-400 text-white rounded-3xl px-8 py-4 flex flex-col items-center shadow">
  <span className="font-bold text-lg mb-1">Khách hàng</span>
  <div className="flex items-center gap-3">
    <User className="w-10 h-10" />
    <span className="text-3xl font-extrabold">36</span>
  </div>
</Card>

<Card className="bg-red-400 text-white rounded-3xl px-8 py-4 flex flex-col items-center shadow">
  <span className="font-bold text-lg mb-1">Số người dùng bị chặn</span>
  <div className="flex items-center gap-3">
    <Ban className="w-10 h-10" />
    <span className="text-3xl font-extrabold">12</span>
  </div>
</Card>
</div>
  <section className="mb-8">
          <h3 className="font-bold text-xl mb-4">Danh sách người dùng</h3>

          {/* Search */}
          <div className="flex items-center gap-2">
            <Input className="text-base" placeholder="Nhập nội dung tìm kiếm" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button className="bg-green-500 text-base">Tìm kiếm</Button>
          </div>

          {/* Filters on new line */}
          <div className="flex gap-6 mt-4">
            {/* Lọc theo loại người dùng */}
            <div className="relative" ref={userTypeRef}>
              <div className="flex items-center gap-2">
                <div className="text-base">Lọc theo loại người dùng</div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowUserTypeDropdown((s) => !s);
                    setShowUserStatusDropdown(false);
                    setShowUnlockStatusDropdown(false);
                  }}
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>

              {showUserTypeDropdown && (
                <div className="absolute right-0 mt-2 w-52 bg-white border rounded shadow z-50">
                  <button
                    className={`w-full text-left px-3 py-2 ${userTypeFilter === "all" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserTypeFilter("all");
                      setShowUserTypeDropdown(false);
                    }}
                  >
                    Tất cả
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${userTypeFilter === "designer" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserTypeFilter("designer");
                      setShowUserTypeDropdown(false);
                    }}
                  >
                    Nhà thiết kế
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${userTypeFilter === "customer" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserTypeFilter("customer");
                      setShowUserTypeDropdown(false);
                    }}
                  >
                    Khách hàng
                  </button>
                </div>
              )}
            </div>

            {/* Lọc theo trạng thái */}
            <div className="relative" ref={userStatusRef}>
              <div className="flex items-center gap-2">
                <div className="text-base">Lọc theo trạng thái</div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowUserStatusDropdown((s) => !s);
                    setShowUserTypeDropdown(false);
                    setShowUnlockStatusDropdown(false);
                  }}
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>

              {showUserStatusDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
                  <button
                    className={`w-full text-left px-3 py-2 ${userStatusFilter === "all" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserStatusFilter("all");
                      setShowUserStatusDropdown(false);
                    }}
                  >
                    Tất cả
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${userStatusFilter === "active" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserStatusFilter("active");
                      setShowUserStatusDropdown(false);
                    }}
                  >
                    Đang hoạt động
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${userStatusFilter === "locked" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUserStatusFilter("locked");
                      setShowUserStatusDropdown(false);
                    }}
                  >
                    Bị khoá
                  </button>
                </div>
              )}
            </div>
          </div>

          <table className="w-full bg-white border text-lg mt-4">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 font-semibold">STT</th>
                <th className="p-3 font-semibold">Họ và tên</th>
                <th className="p-3 font-semibold">Loại người dùng</th>
                <th className="p-3 font-semibold">Trạng thái</th>
                <th className="p-3 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={u.id} className="border-t">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{displayUserType(u.type)}</td>
                  <td className="p-3">{displayUserStatus(u.status)}</td>
                  <td className="p-3 flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye size={18} />
                    </Button>
                    {u.status === "locked" ? (
                      <Button size="sm" variant="outline">
                        <Unlock size={18} />
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        <Lock size={18} />
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-red-500">
                      <Trash2 size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Unlock requests */}
        <section>
          <h3 className="font-bold text-xl mb-4">Yêu cầu mở khoá tài khoản</h3>

          {/* Search */}
          <div className="flex items-center gap-2">
            <Input className="text-base" placeholder="Nhập nội dung tìm kiếm" />
            <Button className="bg-green-500 text-base">Tìm kiếm</Button>
          </div>

          {/* Filters on new line */}
          <div className="flex gap-6 mt-4">
            {/* Lọc theo trạng thái (unlock requests) */}
            <div className="relative" ref={unlockStatusRef}>
              <div className="flex items-center gap-2">
                <div className="text-base">Lọc theo trạng thái</div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowUnlockStatusDropdown((s) => !s);
                    setShowUserStatusDropdown(false);
                    setShowUserTypeDropdown(false);
                  }}
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>

              {showUnlockStatusDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-50">
                  <button
                    className={`w-full text-left px-3 py-2 ${unlockStatusFilter === "all" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUnlockStatusFilter("all");
                      setShowUnlockStatusDropdown(false);
                    }}
                  >
                    Tất cả
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${unlockStatusFilter === "pending" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUnlockStatusFilter("pending");
                      setShowUnlockStatusDropdown(false);
                    }}
                  >
                    Đang chờ xử lý
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 ${unlockStatusFilter === "processed" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                    onClick={() => {
                      setUnlockStatusFilter("processed");
                      setShowUnlockStatusDropdown(false);
                    }}
                  >
                    Đã xử lý
                  </button>
                </div>
              )}
            </div>
          </div>

          <table className="w-full bg-white border text-lg mt-4">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 font-semibold">STT</th>
                <th className="p-3 font-semibold">Họ và tên</th>
                <th className="p-3 font-semibold">Nội dung khiếu nại</th>
                <th className="p-3 font-semibold">Ngày gửi</th>
                <th className="p-3 font-semibold">Trạng thái</th>
                <th className="p-3 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredUnlockRequests.map((r, i) => (
                <tr key={r.id} className="border-t">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.reason}</td>
                  <td className="p-3">{r.date}</td>
                  <td className="p-3">{displayUnlockStatus(r.status)}</td>
                  <td className="p-3">
                    <Button size="sm" variant="outline">
                      <Eye size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    </div>
  );
}