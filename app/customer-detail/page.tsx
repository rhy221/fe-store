"use client"
import {
  Home,
  UserCog,
  Users,
  Layers,
  BarChart3,
  Settings,
  LogOut,
  ShoppingBag,
  Trophy,
  MessageSquare,
  Users as UsersIcon,
  Gavel,
  Heart,
  ShieldAlert,
} from "lucide-react"

export default function CustomerDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
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

      {/* Content layout */}
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
        <main className="flex-1 bg-white p-6 overflow-y-auto text-lg">
          {/* Profile */}
          <div className="flex gap-6 items-center mb-6">
            <img
              src="/avatar2.png"
              alt="Avatar"
              className="w-48 h-48 rounded-full border"
            />
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <InfoRow label="Họ và tên đầy đủ" value="Trịnh Văn Dương" />
              <InfoRow label="Giới tính" value="Nam" />
              <InfoRow label="Tên đăng nhập" value="duongabc123" />
              <InfoRow label="Ngày sinh" value="01/01/2004" />
              <InfoRow label="Địa chỉ email" value="duongthichsuutam@gmail.com" />
              <InfoRow label="Ngày tạo tài khoản" value="09/09/2024" />
              <InfoRow label="Số điện thoại" value="0987654321" />
              <InfoRow label="Trạng thái" value="Đang hoạt động" />
              <div className="col-span-2">
                <InfoRow label="Mô tả" value="Tìm kiếm các mẫu thiết kế độc lạ." />
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <h2 className="font-bold text-xl mb-4">Thống kê hoạt động</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <StatCard color="bg-yellow-600" Icon={ShoppingBag} label="Tổng số mẫu đã mua" value="5" />
            <StatCard color="bg-blue-800" Icon={Gavel} label="Tổng số lần tham gia đấu giá" value="2" />
            <StatCard color="bg-teal-600" Icon={Trophy} label="Số mẫu đã thắng đấu giá" value="1" />
            <StatCard color="bg-green-800" Icon={Heart} label="Số mẫu đã thích" value="12" />
            <StatCard color="bg-purple-700" Icon={MessageSquare} label="Số lượt đánh giá, bình luận" value="25" />
            <StatCard color="bg-red-600" Icon={ShieldAlert} label="Số lần bị cảnh báo" value="0" />
            <StatCard color="bg-gray-700" Icon={UsersIcon} label="Số người đang theo dõi" value="12" />
          </div>
        </main>
      </div>
    </div>
  )
}

/* --- Components --- */
function SidebarButton({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a70]">
      <Icon className="w-6 h-6 shrink-0" />
      <span className="text-2xl font-semibold whitespace-nowrap leading-none">
        {label}
      </span>
    </button>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="leading-snug">
      <span className="font-semibold">{label}: </span>
      {value}
    </p>
  )
}

function StatCard({
  color,
  Icon,
  label,
  value,
}: {
  color: string
  Icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
 <div
      className={`${color} rounded-full flex items-center gap-4 px-5 py-4 min-h-[92px] h-full min-w-0 shadow-md text-white`}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <span className="flex-1 font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
      <span className="font-bold text-xl whitespace-nowrap">{value}</span>
    </div>
  )
}
