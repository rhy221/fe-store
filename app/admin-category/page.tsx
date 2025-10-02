"use client";
export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#F0F7FF] flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
            <img src="/Logo.png" alt="Logo" className="w-12 h-12" />
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
            <button className="w-full flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#002a&0]">
              <img src="/homeIcon.png" alt="" />
            </button>
          </nav>
        </aside>
      </div>
    </div>
  );
}
