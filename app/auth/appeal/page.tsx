export default function ForgotPasswordPage()
{
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <header className="flex items-center justify-between border border-blue-500 p-4">
                <div className="flex items-center gap-2">
                <img src="/images/LOGO.jpg" alt="HHCloset" className="w-10 h-10 rounded-full" />
                <span className="font-bold text-xl">HHCLOSET</span>
                </div>
                <span className="italic font-semibold text-blue-800">
                Từ bạn đến gu - Định hình xu hướng
                </span>
            </header>

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
                            Gửi khiếu nại
                        </h2>

                        <form className="flex flex-col gap-4">                            
                            <p className="text-sm font-semibold mb-2">Lí do khiếu nại:</p>
  
                            <div className="flex flex-col gap-2 text-sm">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    Tài khoản bị khóa nhầm
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                        Không rõ lý do bị khóa
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                        Tôi đã hiểu sai chính sách, cam kết không tái phạm
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                        Tôi chưa nhận được cảnh báo nào trước khi bị khóa
                                </label>                                
                            </div>

                            <p className="text-sm font-semibold mt-3">Nếu là lí do khác, xin trình bày</p>
                            
                            <textarea
                                className="w-full border rounded-md mt-2 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={3}
                            >                                
                            </textarea>

                            <button
                                type="submit"
                                className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 truncate"
                            >
                                Hoàn tất
                            </button>
                        </form>
                        
                         <div className="flex justify-center mt-4">
                                <p className="text-sm">                                    
                                    <a href="/" className="font-semibold text-blue-600 hover:underline">
                                        ABC
                                    </a>
                                </p>
                         </div>
                    </div>
                </div>
            </main>

            {/*Footer*/}
            <footer className="bg-blue-600 text-white text-center text-sm py-3 px-4">
                <p className="font-bold">
                    Công ty TNHH HHCloset
                </p>
                <p>
                    Địa chỉ trụ sở chính: Tầng 4-5-6, Tòa nhà SEHouse, phường Thủ Đức, thành phố Hồ Chí Minh
                </p>
                <p>
                    Chi nhánh 1: 125 đường Độc Lập, khu phố Long Phước, phường Long Khánh, tỉnh Đồng Tháp
                </p>
                <p>
                    Chi nhánh 2: 785 đường Bác Ái, khu phố Hậu Giang, phường Ngã Bảy, thành phố Cần Thơ
                </p>
            </footer>
        </div>          
    );
}