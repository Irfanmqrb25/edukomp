import React from "react";
import UserProfile from "./user-profile";
import getCurrentUser from "@/actions/getCurrentUser";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/app/(main)/(landing-page)/_components/navbar/theme-toggle";
import { GraduationCap } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const DashboardNavbar = async () => {
  const user = await getCurrentUser();

  return (
    <nav className="fixed top-0 w-full h-20 z-10 pl-4 lg:pl-6 pr-4 lg:pr-16 flex justify-between items-center border-b bg-background">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          edu<span className="text-brand">Komp</span>
        </h1>
        <GraduationCap className="text-brand" />
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <UserProfile user={user!} />
        <Separator orientation="vertical" className="h-8 w-[1.4px]" />
        <ThemeToggle position="navbar" />
      </div>
      <MobileSidebar />
    </nav>
  );
};

export default DashboardNavbar;
