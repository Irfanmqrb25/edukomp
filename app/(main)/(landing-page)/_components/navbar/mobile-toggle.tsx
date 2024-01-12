"use client";
import Link from "next/link";

import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignLeft, ArrowRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MobileToggle = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About us",
      link: "/about",
    },
  ];

  const handleChangeRoute = (data: string) => {
    setIsOpen(false);
    router.push(data);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
            {menu.map((item) => (
              <li className="space-y-2" key={item.name}>
                <p onClick={() => handleChangeRoute(item.link)}>{item.name}</p>
                <Separator />
              </li>
            ))}
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
