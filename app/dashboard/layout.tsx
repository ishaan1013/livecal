import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import TestModal from "./@modal/(.)test/[id]/page";

export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <main className="w-screen min-h-screen flex flex-col">
        <div className="bg-background w-screen flex items-center justify-between px-8 py-2">
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="hover:opacity-50 transition-all text-xl font-semibold"
            >
              LiveCal
            </Link>
            <div className="mx-4 text-2xl text-muted-foreground">/</div>
            <div className="pt-1.5">
              <OrganizationSwitcher />
            </div>
          </div>
          <UserButton />
        </div>
        {children}
      </main>
      {modal}
      {/* <TestModal params={{ id: "3" }} /> */}
    </>
  );
}
