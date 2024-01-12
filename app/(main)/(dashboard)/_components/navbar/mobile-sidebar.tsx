"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/app/(main)/(landing-page)/_components/navbar/theme-toggle";

import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { menu } from "../sidebar/menu";
import { signOut } from "next-auth/react";
import { AlignLeft, DoorOpen, GraduationCap } from "lucide-react";

interface MobileSidebarProps {
  user: User;
}

const MobileSidebar = ({ user }: MobileSidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex flex-col gap-y-2 mt-10">
            <p className="uppercase font-medium text-muted-foreground">
              Menu Item
            </p>
            <ul className="flex flex-col gap-4">
              {menu.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleChangeRoute(item.path)}
                  className={cn(
                    "flex items-center gap-3 font-medium text-muted-foreground px-4 py-2 text-sm",
                    pathname === item.path && "text-white bg-brand rounded-sm"
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
              <li
                className="flex items-center gap-2.5 px-4 py-2"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/profile");
                }}
              >
                <Avatar className="w-6 h-6">
                  <AvatarImage src={user?.image || "/blank-user.jpg"} />
                </Avatar>
                <p className="font-medium text-sm text-muted-foreground">
                  Profile
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-12 flex flex-col gap-6">
            <div>
              <ThemeToggle position="sidebar" />
            </div>
            <Button variant="destructive" size="sm" onClick={() => signOut()}>
              <DoorOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Log out</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
