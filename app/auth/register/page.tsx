export default function RegisterPage()
{
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
                        Nền tảng chia sẻ và <br/>
                        đấu giá thời trang số ở Việt Nam
                    </p>
                </div>
                {/*Right*/}
                <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
                    <div className="bg-white text-black rounded-xl shadow-md w-full max-w-sm p-6">
                        <h2 className="text-xl font-bold mb-4">
                            Đăng ký
                        </h2>                        

                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Địa chỉ email"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />    

                            <p className="text-center text-base font-semibold text-blue-600 mt-3">
                                Tạo tài khoản với vai trò
                            </p>
                            
                            <div className="flex gap-4 w-full">
                                <button 
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700"
                                >
                                    Nhà thiết kế
                                </button>

                                <button 
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700"
                                >
                                    Khách hàng
                                </button>
                            </div>                              
                        </form>
                        <div className="flex justify-center mt-4">
                                <p className="text-sm">
                                    Bạn đã có tài khoản? {" "}
                                    <a href="/" className="font-semibold text-blue-600 hover:underline">
                                        Đăng nhập
                                    </a>
                                </p>
                         </div>
                         <div className="flex justify-center mt-4">
                                <p className="text-sm">                                    
                                    <a href="/auth/verify" className="font-semibold text-blue-600 hover:underline">
                                        OTP
                                    </a>
                                </p>
                         </div>
                    </div>
                </div>
            </main>
        </div>          
    );
}