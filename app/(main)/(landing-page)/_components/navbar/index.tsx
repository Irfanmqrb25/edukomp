import Link from "next/link";

import ThemeToggle from "./theme-toggle";
import MobileToggle from "./mobile-toggle";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-10 px-4 md:px-8 lg:px-36 flex items-center justify-between bg-white dark:bg-[#1A1A1A]">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          edu<span className="text-brand">Komp</span>
        </h1>
        <GraduationCap className="text-brand" />
      </div>
      <MobileToggle />
      <div className="lg:flex items-center gap-x-14 hidden">
        <ul className="flex items-center gap-x-6 font-medium">
          <Link href="/">
            <li className="px-4 py-2 rounded-full hover:bg-brand/5 transition-all">
              Home
            </li>
          </Link>
          <Link href="/pricing">
            <li className="px-4 py-2 rounded-full hover:bg-brand/5 transition-all">
              Pricing
            </li>
          </Link>
          <Link href="/about">
            <li className="px-4 py-2 rounded-full hover:bg-brand/5 transition-all">
              About us
            </li>
          </Link>
          <li>
            <ThemeToggle position="navbar" />
          </li>
          <li>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "text-white rounded-full"
              )}
            >
              Dashboard ⌘
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
