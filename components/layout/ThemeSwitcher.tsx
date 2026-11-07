"use client";

import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import Button from "../ui/Button";

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex gap-2">
      <span className="rounded-full p-3 items-center justify-center flex">
        {theme === "dark" ? (
          <Button className="p-3" onClick={() => setTheme("light")}>
            <Sun />
          </Button>
        ) : (
          <Button className="p-3" onClick={() => setTheme("dark")}>
            <Moon />
          </Button>
        )}
      </span>
    </div>
  );
}
