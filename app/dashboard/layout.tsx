import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen min-h-screen flex flex-col">
      <div className="bg-background w-screen flex items-center justify-between px-8 py-2">
        <div className="flex items-center">
          <div className="text-xl font-semibold">LiveCal</div>
          <div className="mx-4 text-2xl text-muted-foreground">/</div>
          <div className="pt-1.5">
            <OrganizationSwitcher />
          </div>
        </div>
        <UserButton />
      </div>
      {children}
    </main>
  );
}
