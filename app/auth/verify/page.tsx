"use client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function VerifyPage() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [resending, setResending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const data = await res.json();
      if (otp == "123456") {
        setMessage("Xác thực thành công!");
        setTimeout(() => router.push("/"), 1000);
      } else {
        setMessage("Mã xác thực không đúng. Vui lòng thử lại.");
      }
    } catch {
      setMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
    }
    setLoading(false);
    //Replace real API endpoint and payload here
    // const res = await fetch("https://my-api.com/auth/resend-otp",{
    //     method: "POST",
    //     body: JSON.stringify({ email: "a***3@gmail.com" }),
    //     headers: { "Content-Type": "application/json; charset=UTF-8" },
    // })
    // const data = await res.json();
    // if(res.ok && data.success){
    //     setMessage("Xác thực thành công!");
    //     setResendTimer(60);
    // } else{
    //     setMessage(data.message || "Không thể gửi lại mã. Vui lòng thử lại.");
    // }
    // } catch {
    //     setMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
    // }
    // setResending(false);
  };

  const handleResend = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (resendTimer > 0) return;
    setResending(true);
    setMessage("");
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ email: "a***3@gmail.com" }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      setMessage("Mã xác thực đã được gửi lại.");
      setResendTimer(60);
    } catch {
      setMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
    }
    setResending(false);
    // Replace with your real API endpoint and payload
    //     const res = await fetch("https://your-api.com/auth/resend-otp", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ email: "a***3@gmail.com" }),
    //     });
    //     const data = await res.json();
    //     if (res.ok && data.success) {
    //       setMessage("Mã xác thực đã được gửi lại.");
    //       setResendTimer(60);
    //     } else {
    //       setMessage(data.message || "Không thể gửi lại mã. Vui lòng thử lại.");
    //     }
    //   } catch {
    //     setMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
    //   }
    //   setResending(false);
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/*Content*/}
      <main className="flex flex-1 flex-row">
        {/*Left*/}
        <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
          <img
            src="/images/LOGO.jpg"
            alt="HHCloset"
            className="w-75 h-75 mb-4 rounded-full"
          />
          <p className="text-center text-lg mb-6 font-bold">
            Nền tảng chia sẻ và <br />
            đấu giá thời trang số ở Việt Nam
          </p>
        </div>
        {/*Right*/}
        <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
          <div className="bg-white text-black rounded-xl shadow-md w-full max-w-sm p-6">
            <h2 className="text-xl font-bold mb-4">Nhập mã xác thực</h2>

            <p className="flex mt-4">
              Vui lòng xác thực để tạo tài khoản. <br />
              <br />
              Mã xác thực gồm 6 chữ số được gửi qua <br />
              email a***3@gmail.com
            </p>

            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nhập mã xác thực"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                disabled={loading}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 truncate"
              >
                {loading ? "Đang xác thực..." : "Xác thực"}
              </button>
            </form>

            <div className="flex justify-center mt-4">
              <p className="text-sm">
                Bạn không nhận được mã xác thực?{" "}
                <a
                  href="#"
                  className={`font-semibold ${
                    resendTimer === 0
                      ? "text-blue-600 hover:underline"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handleResend}
                  aria-disabled={resendTimer > 0}
                >
                  {resending
                    ? "Đang gửi lại..."
                    : resendTimer > 0
                    ? `Gửi lại (${resendTimer}s)`
                    : "Gửi lại"}
                </a>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-sm">
                <a
                  href="/auth/details"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Infor
                </a>
              </p>
            </div>
            {message && (
              <div className="mt-4 text-sm text-red-500 text-center">
                {message}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
