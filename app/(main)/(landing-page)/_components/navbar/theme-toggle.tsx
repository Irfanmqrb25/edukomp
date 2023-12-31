"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  position: "navbar" | "sidebar";
  className?: string;
}

const ThemeToggle = ({ position, className }: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="secondary"
      size={position === "navbar" ? "icon" : "sm"}
      className={cn(
        "bg-brand/10 rounded-full text-brand dark:text-primary hover:bg-brand/30 dark:bg-brand/40 flex items-center",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
          position === "sidebar" && "left-9"
        )}
      />
      {position === "sidebar" && (
        <p className="ml-2">{theme === "dark" ? "Dark" : "Light"} Mode</p>
      )}
    </Button>
  );
};

export default ThemeToggle;
