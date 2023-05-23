import { ReactEventHandler, ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="bg-black w-screen h-20"></div>
      {children}
    </main>
  );
}
