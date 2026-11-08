import { Recipy } from "@/types/Recipy";
import React from "react";

export default function RecipyGrid({ recipies }: { recipies: Array<Recipy> }) {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {
        recipies.map((recipy) => {
          return (
            <div key={recipy.id} className="w-full">{recipy.name}</div>
          )
        })
      }
    </div>
  );
}
