import { Header } from "./header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F7FC]">
      <Header />
      <main className="mx-auto px-6 py-8 lg:px-12" style={{ maxWidth: '1600px' }}>
        {children}
      </main>
    </div>
  );
}
