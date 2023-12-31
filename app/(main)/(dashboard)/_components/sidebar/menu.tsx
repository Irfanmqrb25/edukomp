"use client";

import Link from "next/link";
import { DoorOpen, Home, Layers3, Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Home size={20} />,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: <Newspaper size={20} />,
  },
  {
    name: "My Courses",
    path: "/my-courses",
    icon: <Layers3 size={20} />,
  },
];

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-4">
      {menu.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className={cn(
              "flex items-center gap-3 font-medium text-muted-foreground px-4 py-2 text-sm",
              pathname === item.path && "text-white bg-brand rounded-sm"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
