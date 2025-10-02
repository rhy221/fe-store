"use client"
import { BarChart3, Home, Layers, LogOut, Settings, UserCog, Users, FileText, DollarSign, ShieldAlert, Shirt } from "lucide-react"


export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header (match users page) */}
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

      {/* Content layout (sidebar + main) */}
      <div className="flex flex-1">
        {/* Sidebar (under header) */}
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
              src="/avatar.png"
              alt="Avatar"
              className="w-48 h-48 rounded-full border"
            />
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <InfoRow label="Họ và tên đầy đủ" value="Nguyễn Văn Tiên" />
              <InfoRow label="Giới tính" value="Nam" />
              <InfoRow label="Tên đăng nhập" value="ntktien98@saovang" />
              <InfoRow label="Ngày sinh" value="22/12/1998" />
              <InfoRow label="Địa chỉ email" value="ntktien.saovang@gmail.com" />
              <InfoRow label="Ngày tạo tài khoản" value="11/08/2024" />
              <InfoRow label="Số điện thoại" value="0123456789" />
              <InfoRow label="Trạng thái" value="Đang hoạt động" />
              <div className="col-span-2">
                <InfoRow
                  label="Mô tả"
                  value="Nhà thiết kế thời trang số với phong cách tối giản hiện đại. Yêu thích sự kết hợp giữa công nghệ và nghệ thuật"
                />
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          {/* <<< FIX: responsive grid so items flow naturally and left-align on second row >>> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-white">
            <StatCard color="bg-teal-600" Icon={FileText} label="Số mẫu đã đăng" value="13" />
            <StatCard color="bg-pink-600" Icon={DollarSign} label="Doanh thu" value="0,89 tỷ VND" />
            <StatCard color="bg-red-600" Icon={ShieldAlert} label="Số mẫu bị báo cáo" value="0" />
            <StatCard color="bg-blue-600" Icon={Shirt} label="Mẫu thu hút nhất" value="Áo kỹ thuật số Aurora" />
            <StatCard color="bg-gray-700" Icon={Users} label="Số người theo dõi" value="125" />
          </div>

          {/* Search + Filters */}
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <input
                placeholder="Nhập nội dung tìm kiếm"
                 className="flex-1 rounded-full px-4 py-2 border bg-gray-100 text-lg"
              />
              <button className="px-4 py-2 bg-green-500 rounded-full text-white font-semibold">
                Tìm kiếm
              </button>
            </div>
            <div className="flex gap-7">
              {["Tất cả", "Đang bán", "Đang đấu giá", "Đã bán", "Chia sẻ"].map(
                (filter) => (
                  <button
                    key={filter}
                   className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-lg"
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Design list */}
          <div className="grid grid-cols-3 gap-6">
            <DesignCard
              image="/shoe.png"
              title="Footwear Romans Cad"
              status="CHIA SẺ"
            />
            <DesignCard
              image="/bag.png"
              title="Túi xách Flower"
              status="ĐANG ĐẤU GIÁ"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

/* --- Components --- */

function SidebarItem({ label }: { label: string }) {
  return (
    <button className="flex items-center w-full px-3 py-2 rounded-md hover:bg-blue-800">
      <span>{label}</span>
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
      className={`${color} rounded-full flex items-center gap-4 px-5 py-4 min-h-[92px] h-full min-w-0 shadow-md`}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <span className="flex-1 font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
      <span className="font-bold text-xl whitespace-nowrap">{value}</span>
    </div>
  )
}

function DesignCard({
  image,
  title,
  status,
}: {
  image: string
  title: string
  status: string
}) {
  return (
    <div className="rounded-lg border border-[#6a360e] p-4 shadow-sm hover:shadow-md bg-[#faf0e6] text-black flex flex-col items-center text-center h-72 justify-center">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover rounded-md mb-4 border border-white/20"
      />
      <p className="font-semibold text-lg">{title}</p>
      <p className="font-semibold text-lg mt-1">
        Trạng thái: <span className="font-bold">{status}</span>
      </p>
    </div>
  )
}
