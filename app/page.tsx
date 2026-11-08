import Hero from "@/components/pages/home/Hero";
import RecipyGrid from "@/components/ui/RecipyGrid";
import Recipy from "@/libs/api";
import { notFound } from "next/navigation";

export default async function Home() {
  const recipies = await Recipy.getAll();
  if (!recipies) {
    notFound();
  }


  return (
    <div className="container mx-auto">
      <Hero recipies={recipies.recipes} />
      <RecipyGrid recipies={recipies.recipes} />
    </div>
  );
}
