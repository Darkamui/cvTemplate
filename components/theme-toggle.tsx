"use client";
import {
  LucideSun,
  Moon,
  Sun,
  SunIcon,
  SunMediumIcon,
  SunriseIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface Props {
  dictionary: Theme;
}

export function ThemeToggle({ dictionary }: Props) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {}, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          className="h-10 w-10 items-center justify-center overflow-hidden  dark:bg-neutral-950 hover:dark:bg-neutral-950/50 bg-white
               hover:bg-slate-400/50 font-medium dark:text-neutral-200 text-black border rounded-full "
        >
          <Sun />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          className="h-10 w-10 items-center justify-center overflow-hidden  dark:bg-neutral-950 hover:dark:bg-neutral-950/50 bg-white
            hover:bg-slate-400/50 font-medium dark:text-neutral-200 text-black border rounded-full "
        >
          <Moon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
}
