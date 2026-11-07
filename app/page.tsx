import Recipy from "@/libs/api";

export default async function Home() {
  const recipies = await Recipy.getAll(5)
  if (recipies) {
    console.log(recipies.recipes)
    const recipy = await Recipy.getById(recipies.recipes[0].id)
    console.log(recipy)
    const recipyByTag = await Recipy.getByTag(recipies.recipes[0].tags[0])
    console.log(recipyByTag)
    const recipyByQuery = await Recipy.getByQuery('Pasta')
    console.log(recipyByQuery)
  }
  return (
    <div className="">
      Homepage
    </div>
  );
}
