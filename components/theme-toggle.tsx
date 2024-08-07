"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme } from "@/lib/types";

interface Props {
  dictionary: Theme;
}

export function ThemeToggle({ dictionary }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-10 w-10 items-center justify-center overflow-hidden  dark:bg-neutral-950 hover:dark:bg-neutral-950/50 bg-white
             hover:bg-slate-400/50 font-medium dark:text-neutral-200 text-black border rounded-full "
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {dictionary.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {dictionary.dark}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
