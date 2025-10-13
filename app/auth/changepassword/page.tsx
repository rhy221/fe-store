import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
import Footer from "../components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex flex-1 flex-row">
        <LeftColumn />

        {/* Right */}
        <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
          <div className="bg-white text-black rounded-xl shadow-md w-full max-w-sm p-6">
            <Card>
              <CardHeader>
                <CardTitle>Đổi mật khẩu</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-1">Nhập mật khẩu cũ</label>
                    <Input type="password" placeholder="Mật khẩu cũ" />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Nhập mật khẩu mới</label>
                    <Input type="password" placeholder="Mật khẩu mới" />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Xác nhận mật khẩu mới</label>
                    <Input type="password" placeholder="Xác nhận mật khẩu mới" />
                  </div>

                  <p className="text-xs text-red-600">
                    * Lưu ý: Mật khẩu có độ dài từ 8 kí tự.
                  </p>

                  <Button className="w-40 mx-auto mt-2">Hoàn tất</Button>
                </form>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
