"use client";

import React, { useState } from 'react';
import { Eye, Edit, Lock, Trash2, UserPlus, Filter } from 'lucide-react';

// Types
interface AdminAccount {
  id: number;
  name: string;
  username: string;
  status: string;
}

interface AccessHistory {
  id: number;
  name: string;
  username: string;
  accessTime: string;
}

// Sample data
const adminAccounts: AdminAccount[] = [
  { id: 1, name: 'Nguyễn Văn An', username: 'admin001@', status: 'Đang hoạt động' },
  { id: 2, name: 'Nguyễn Thị Bình', username: 'admin004@', status: 'Đang hoạt động' },
  { id: 3, name: 'Trần Công Cường', username: 'admin007@', status: 'Bị khóa' },
];

const accessHistory: AccessHistory[] = [
  { id: 1, name: 'Nguyễn Văn An', username: 'admin001@', accessTime: '13:00:13 8/7/2025' },
  { id: 2, name: 'Nguyễn Thị Bình', username: 'admin004@', accessTime: '10:09:13 8/7/2025' },
  { id: 3, name: 'Trần Công Cường', username: 'admin007@', accessTime: '08:10:13 8/7/2025' },
  { id: 4, name: 'Nguyễn Văn An', username: 'admin001@', accessTime: '13:54:08 1/7/2025' },
  { id: 5, name: 'Nguyễn Thị Bình', username: 'admin004@', accessTime: '10:54:08 1/7/2025' },
  { id: 6, name: 'Trần Công Cường', username: 'admin007@', accessTime: '07:54:08 1/7/2025' },
];

export default function AdminAccountManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleView = (id: number) => {
    console.log('View account:', id);
  };

  const handleEdit = (id: number) => {
    console.log('Edit account:', id);
  };

  const handleLock = (id: number) => {
    console.log('Lock/Unlock account:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete account:', id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-gray-50">
      {/* Header */}
      <div>
        <h1 className="text-[32px] font-extrabold mb-6">Quản lý tài khoản quản trị viên</h1>
        
        {/* Search Bar */}
        <div className="flex mb-4">
          <div className="relative mr-14">
            <input
              type="text"
              placeholder="Nhập nội dung tìm kiếm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[643px] text-xl px-8 py-5 bg-[#ADD8E6] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#74a1b1]"
            />
          </div>
          <button className="w-[183px] py-3 bg-[#00C853] hover:bg-[#04b24d] text-xl text-white font-extrabold rounded-full transition-colors">
            Tìm kiếm
          </button>
        </div>

        {/* Table Actions */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-normal text-xl">Danh sách tài khoản quản trị viên</span>
          <button className="p-2 hover:bg-gray-200 rounded transition-colors">
            <UserPlus size={20} />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Admin Accounts Table */}
      <div className="w-fit bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full border-collapse text-xl">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-center font-bold border-r border-gray-300 w-20">STT</th>
              <th className="px-4 py-2 text-center font-bold border-r border-gray-300">Họ và tên</th>
              <th className="px-14 py-2 text-center font-bold border-r border-gray-300">Tên đăng nhập</th>
              <th className="px-6 py-2 text-center font-bold border-r border-gray-300">Trạng thái</th>
              <th className="px-4 py-2 text-center font-bold">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {adminAccounts.map((account, index) => (
              <tr key={account.id} className={index < adminAccounts.length - 1 ? "border-b border-gray-300" : ""}>
                <td className="px-4 py-2 text-center border-r border-gray-300">{account.id}</td>
                <td className="px-6 py-2 border-r border-gray-300">{account.name}</td>
                <td className="px-4 py-2 text-center border-r border-gray-300">{account.username}</td>
                <td className="px-6 py-2 border-r border-gray-300">{account.status}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleView(account.id)}
                      className="px-2 hover:bg-gray-100 rounded transition-colors"
                      title="Xem"
                    >
                      <img src={"/viewAccount.png"} className='w-[30px]' />
                    </button>
                    <button
                      onClick={() => handleEdit(account.id)}
                      className="px-2 hover:bg-gray-100 rounded transition-colors"
                      title="Chỉnh sửa"
                    >
                      <img src={"/editAccount.png"} className='w-[30px]' />
                    </button>
                    <button
                      onClick={() => handleLock(account.id)}
                      className="px-2 hover:bg-gray-100 rounded transition-colors"
                      title="Khóa/Mở khóa"
                    >
                      <img src={"/lockAccount.png"} className='w-[30px]' />
                    </button>
                    <button
                      onClick={() => handleDelete(account.id)}
                      className="px-2 hover:bg-gray-100 rounded transition-colors text-red-600"
                      title="Xóa"
                    >
                      <img src={"/deleteAccount.png"} className='w-[30px]' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Access History Section */}
      <div className='text-xl'>
        <h2 className="font-normal text-xl mb-6">Lịch sử truy cập</h2>
        <div className="bg-white w-fit border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <table className="w-fit border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-center font-bold border-r border-gray-300 w-20">STT</th>
                <th className="px-4 py-2 text-center font-bold border-r border-gray-300">Họ và tên</th>
                <th className="px-10 py-2 text-center font-bold border-r border-gray-300">Tên đăng nhập</th>
                <th className="px-4 py-2 text-center font-bold">Thời gian truy cập hệ thống</th>
              </tr>
            </thead>
            <tbody>
              {accessHistory.map((record, index) => (
                <tr key={record.id} className={index < accessHistory.length - 1 ? "border-b border-gray-300" : ""}>
                  <td className="px-4 py-2 text-center border-r border-gray-300">{record.id}</td>
                  <td className="px-5 py-2 border-r border-gray-300">{record.name}</td>
                  <td className="px-10 py-2 text-center border-r border-gray-300">{record.username}</td>
                  <td className="px-5 py-2">{record.accessTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}