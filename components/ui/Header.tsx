"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../layout/ThemeSwitcher";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import Input from "./Input";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { IoSearch, IoMenu } from "react-icons/io5";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Favorite",
    href: "/favorite",
  },
  {
    name: "Search",
    href: "/search",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [theme] = useTheme();
  const [logoSrc, setLogoSrc] = useState<string>("/light/logo.png");

  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (search.trim()) {
        router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      }
    }
  };

  useEffect(() => {
    setLogoSrc(`/${theme}/logo.png`);
  }, [theme]);

  return (
    <header className="w-full bg-accent-soft sticky top-0">
      <div className="container mx-auto py-1 flex justify-between gap-2">
        <Link href={"/"} className="flex items-center xl:gap-4 gap-2">
          <Image
            src={logoSrc}
            alt="Recipy Explorer"
            width={70}
            height={70}
            loading="eager"
          />
          <span className="text-3xl lg:text-2xl md:text-xl font-bold lg:block hidden">
            Recipy Explorer
          </span>
        </Link>
        <div className="hidden items-center xl:gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="px-3 py-1 rounded-full hover:bg-accent-soft border-2 border-transparent hover:border-border-strong"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Input
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
            value={search}
            type="search"
            placeholder="Search for a recipy..."
            className="lg:block hidden"
          />
          <Button
            className="p-3 lg:hidden"
            onClick={() => router.push("/search")}
          >
            <IoSearch />
          </Button>
          <ThemeSwitcher />
          <Button className="p-3 lg:hidden" onClick={() => {}}>
            <IoMenu />
          </Button>
        </div>
      </div>
    </header>
  );
}
