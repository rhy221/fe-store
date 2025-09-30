"use client";
import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b">
      {/* Top section with logo and username */}
      <div className="flex items-center justify-between px-6 h-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            {/* Logo placeholder */}
            {/* <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12L8 8L12 12L16 8L20 12"
                stroke="#0f172a"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <img src="/images/logo.svg" alt="Logo" width={64} height={64} />
          </div>
          <div className="font-black text-2xl">HHCLOSET</div>
        </div>

        <div className="hidden md:block italic text-base font-black">
          {/* Username */}
          Xin chào NTK: <span className="font-bold">XYZ</span>
        </div>
      </div>

      {/* Navigation section - full width */}
      <nav className="w-full text-white" style={{ backgroundColor: "#000080" }}>
        <div className="flex items-center px-6 py-1">
          <a
            href="#"
            className="px-4 py-2 hover:bg-blue-700 rounded transition-colors"
          >
            TRANG CHỦ
          </a>
          <div className="w-px h-6 bg-blue-400 mx-4"></div>
          <a
            href="#"
            className="px-4 py-2 hover:bg-blue-700 rounded transition-colors"
          >
            CÁ NHÂN
          </a>
          <div className="w-px h-6 bg-blue-400 mx-4"></div>
          <a
            href="#"
            className="px-4 py-2 hover:bg-blue-700 rounded transition-colors"
          >
            MUA BÁN
          </a>
          <div className="w-px h-6 bg-blue-400 mx-4"></div>
          <a
            href="#"
            className="px-4 py-2 hover:bg-blue-700 rounded transition-colors"
          >
            CÀI ĐẶT
          </a>
          <div className="w-px h-6 bg-blue-400 mx-4"></div>
          <a
            href="#"
            className="px-4 py-2 hover:bg-blue-700 rounded transition-colors"
          >
            ĐĂNG XUẤT
          </a>
        </div>
      </nav>
    </header>
  );
}
