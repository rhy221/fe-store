import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
import Footer from "../components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VerifyPage() {
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
                <CardTitle>Nhập mã xác thực</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm mt-2">
                  Vui lòng xác thực để tạo tài khoản. <br />
                  Mã xác thực gồm 6 chữ số được gửi qua <br />
                  email a***3@gmail.com
                </p>

                <form className="flex flex-col gap-4 mt-4">
                  <Input type="text" placeholder="Nhập mã xác thực" />

                  <Button className="w-40 mx-auto mt-2">Xác thực</Button>
                </form>

                <div className="flex justify-center mt-4">
                  <p className="text-sm">
                    Bạn không nhận được mã xác thực?{" "}
                    <a href="#" className="font-semibold text-blue-600 hover:underline">
                      Gửi lại
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
