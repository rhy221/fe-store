import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Admin";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
        <Header /> 
        <main className="pl-74">{children}</main>
      </div>
  );
}