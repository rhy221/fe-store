import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
import Footer from "../components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
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
                <CardTitle>Đăng ký</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <form className="flex flex-col gap-4">
                  <Input type="email" placeholder="Địa chỉ email" />

                  <p className="text-center text-base font-semibold text-blue-600 mt-3">
                    Tạo tài khoản với vai trò
                  </p>

                  <div className="flex gap-4 w-full">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Nhà thiết kế
                    </Button>
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Khách hàng
                    </Button>
                  </div>
                </form>

                <div className="flex justify-center mt-4">
                  <p className="text-sm">
                    Bạn đã có tài khoản?{" "}
                    <a href="/" className="font-semibold text-blue-600 hover:underline">
                      Đăng nhập
                    </a>
                  </p>
                </div>                
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
