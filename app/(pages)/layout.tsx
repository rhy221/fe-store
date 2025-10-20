import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="sticky top-0 z-1">
        <NavBar />
      </div>
      <div className="relative z-0">
        {children}
        <Footer />
      </div>
    </div>
  );
}
