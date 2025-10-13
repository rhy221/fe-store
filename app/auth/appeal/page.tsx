import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
import Footer from "../components/Footer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex flex-1 flex-row">
        <LeftColumn />

        {/* Right */}
        <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Gửi khiếu nại</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <p className="text-sm font-semibold mb-2">Lí do khiếu nại:</p>

              <div className="flex flex-col gap-2 text-sm">
                <Checkbox id="reason1">Tài khoản bị khóa nhầm</Checkbox>
                <Checkbox id="reason2">Không rõ lý do bị khóa</Checkbox>
                <Checkbox id="reason3">Tôi đã hiểu sai chính sách, cam kết không tái phạm</Checkbox>
                <Checkbox id="reason4">Tôi chưa nhận được cảnh báo nào trước khi bị khóa</Checkbox>
              </div>

              <p className="text-sm font-semibold mt-3">Nếu là lí do khác, xin trình bày</p>

              <Textarea
                placeholder="Nhập lý do khác..."
                rows={3}
                className="mt-2"
              />

              <Button className="w-40 mx-auto mt-4">Hoàn tất</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
