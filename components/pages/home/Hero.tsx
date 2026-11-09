"use client";
import { Recipy } from "@/types/Recipy";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ recipies }: { recipies: Array<Recipy> }) {
  const randomIdx = Math.floor(Math.random() * 50);
  const recipy = recipies[randomIdx];

  return (
    <div className="flex items-center justify-between md:flex-row flex-col-reverse gap-2 md:py-4 py-2 container mx-auto px-2">
      <div className="flex flex-col gap-2">
        <Link href={`/recipy/${recipy.id}`}>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold hover:underline hover:text-accent">
            {recipy.name}
          </h1>
        </Link>
        <div className="flex flex-col gap-1">
          <h2 className="xl:text-xl lg:text-lg">Instructions:</h2>
          <ul className="flex flex-col ps-4">
            {recipy.instructions.map((ins) => (
              <li className="list-disc" key={ins}>
                {ins}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 flex-wrap">
            {recipy.tags.map((tag) => (
              <Link
                href={"#"}
                key={tag}
                className="bg-accent-soft px-2 py-0.5 rounded-full hover:bg-accent"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <Image
          src={recipy.image}
          alt={recipy.name}
          className="rounded-md shadow-md border-2 border-border-strong"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
