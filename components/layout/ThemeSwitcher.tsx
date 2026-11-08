"use client";

import useTheme from "@/hooks/useTheme";
import Button from "../ui/Button";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex gap-2">
      <span className="rounded-full p-3 items-center justify-center flex">
        {theme === "dark" ? (
          <Button className="p-3 text-xl" onClick={() => setTheme("light")}>
            <IoIosSunny />
          </Button>
        ) : (
          <Button className="p-3 text-xl" onClick={() => setTheme("dark")}>
            <FaRegMoon />
          </Button>
        )}
      </span>
    </div>
  );
}
