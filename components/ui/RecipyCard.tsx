"use client"
import { Recipy } from "@/types/Recipy";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function RecipyCard({ recipy }: { recipy: Recipy }) {
  const handleOnFav = (favId: number) => {
    console.log('Fav action here with this id:', favId)
  };

  return (
    <div className="border-border border flex flex-col rounded-md overflow-hidden hover:shadow-lg shadow-md shadow-surface-secondary group bg-surface hover:bg-surface-hover hover:scale-[1.01] relative select-none h-full">
      <button
        className={`absolute top-2 right-2 bg-accent-foreground z-10 rounded-full p-2`}
        onClick={() => handleOnFav(recipy.id)}
      >
        {!true ? <FaRegHeart /> : <FaHeart className="text-accent" />}
      </button>
      <div className="flex items-center justify-center w-full relative h-64">
        <Image
          src={recipy.image}
          alt={recipy.name}
          fill
          className="object-cover object-center group-hover:scale-105"
        />
        <div
          className={`absolute bottom-2 left-2 ${recipy.rating < 4 ? "bg-accent" : "bg-accent-foreground"} z-10 rounded-full px-2 py-0.5`}
        >
          ⭐ {recipy.rating}
        </div>
      </div>
      <div className="flex flex-col p-2 lg:p-4">
        <Link
          href={`/recipy/${recipy.id}`}
          className="w-fit hover:underline hover:text-accent font-semibold"
        >
          <h3 className="text-xl">{recipy.name}</h3>
        </Link>
        <div className="flex flex-col gap-1">
          <h4 className="text-lg">Ingredients:</h4>
          <ul className="flex flex-col list-disc list-inside">
            {recipy.ingredients.slice(0, 3).map((ind) => (
              <li className="text-xs md:text-sm" key={ind}>
                {ind}
              </li>
            ))}
            {recipy.ingredients.length >= 4 ? (
              <li className="text-xs md:text-sm">And More...</li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
