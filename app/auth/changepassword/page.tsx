export default function ChangePasswordPage()
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
                            Đổi mật khẩu
                        </h2>

                        <form className="flex flex-col gap-4">                            
                            <div className="mb-3">
                                <label className="block text-sm mb-1">Nhập mật khẩu cũ</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:outline-none py-1"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="block text-sm mb-1">Nhập mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="w-full border-b border-gray-400 focus:outline-none py-1"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="block text-sm mb-1">Xác nhận mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="w-full border-b border-gray-400 focus:outline-none py-1"
                                />
                            </div>


                            <p className="text-xs text-red-600">
                                * Lưu ý: Mật khẩu có độ dài từ 8 kí tự.
                            </p>

                            <button
                                type="submit"
                                className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 truncate"
                            >
                                Hoàn tất
                            </button>
                        </form>
                        
                         <div className="flex justify-center mt-4">
                                <p className="text-sm">                                    
                                    <a href="/auth/appeal" className="font-semibold text-blue-600 hover:underline">
                                        ABC
                                    </a>
                                </p>
                         </div>
                    </div>
                </div>
            </main>

        </div>          
    );
}