import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <SignedIn>
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-blue-400">Go To App</button>
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <button className="px-4 py-2 bg-red-400">Sign In</button>
        </Link>
      </SignedOut>
    </main>
  );
}
