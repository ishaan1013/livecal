import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen min-h-screen flex flex-col">
      <div className="bg-black w-screen flex items-center justify-between px-8 py-4">
        <div className="text-xl font-semibold">LiveCal</div>
        <div className="flex items-center space-x-2">
          <UserButton />
        </div>
      </div>
      {children}
    </main>
  );
}
