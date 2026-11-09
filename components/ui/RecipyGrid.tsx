import { Recipy } from "@/types/Recipy";
import RecipyCard from "./RecipyCard";

export default function RecipyGrid({ recipies }: { recipies: Array<Recipy> }) {
  return (
    <div className="bg-accent-foreground w-full">
      <div className="flex flex-col gap-2 lg:gap-3 py-2 lg:py-6 container mx-auto px-2">
        <h2 className="lg:text-3xl xl:text-4xl text-2xl font-bold">All Recipies</h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          {recipies.slice(0, 12).map((recipy) => {
            return <RecipyCard key={recipy.id} recipy={recipy} />;
          })}
        </div>
      </div>
    </div>
  );
}
