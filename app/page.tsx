import Hero from "@/components/pages/home/Hero";
import RecipyGrid from "@/components/ui/RecipyGrid";
import Recipy from "@/libs/api";
import { notFound } from "next/navigation";

export default async function Home() {
  const randomIdx = Math.floor(Math.random() * 30);
  const recipies = await Recipy.getAll();
  if (!recipies) {
    notFound();
  }

  const heroRecipy = recipies.recipes[randomIdx];

  return (
    <div className="container mx-auto">
      <Hero recipy={heroRecipy} />
      <RecipyGrid recipies={recipies.recipes} />
    </div>
  );
}
