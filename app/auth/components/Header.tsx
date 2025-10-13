export default function Header() {
  return (
    <header className="flex items-center justify-between border border-blue-500 p-4">
      <div className="flex items-center gap-2">
        <img src="/images/LOGO.jpg" alt="HHCloset" className="w-10 h-10 rounded-full" />
        <span className="font-bold text-xl">HHCLOSET</span>
      </div>
      <span className="italic font-semibold text-blue-800">
        Từ bạn đến gu - Định hình xu hướng
      </span>
    </header>
  );
}
