import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <h1 className="text-center text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-900 py-3">
        Multiplayer Calendar Planning
      </h1>
      <div className="text-base text-center sm:text-lg text-muted-foreground mb-8">
        Next.js 13 + intercepted routes & server actions, Liveblocks, Clerk,
        Tailwind, Planetscale, Prisma
      </div>
      <SignedIn>
        <Link href="/dashboard">
          <Button>
            Go To App <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Button>
            Sign In <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
      </SignedOut>
    </main>
  );
}
