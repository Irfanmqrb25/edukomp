import Link from "next/link";

import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignLeft, ArrowRight, GraduationCap } from "lucide-react";

const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden hover:bg-brand/40"
        >
          <AlignLeft />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            edu<span className="text-brand">Komp</span>
          </h1>
          <GraduationCap className="text-brand" />
        </div>
        <div className="flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-y-4 mt-10">
            <li className="space-y-2">
              <Link href="/" className="">
                Home
              </Link>
              <Separator />
            </li>
            <li className="space-y-2">
              <Link href="/">Pricing</Link>
              <Separator />
            </li>
            <li className="space-y-2">
              <Link href="/">About us</Link>
              <Separator />
            </li>
            <li>
              <Link
                href="/dashboard"
                className="font-medium text-brand flex items-center justify-between group"
              >
                Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all" />
              </Link>
            </li>
          </ul>
          <div className="mb-12">
            <ThemeToggle position="sidebar" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
