export type Recipe = {
  id: number;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
};

export async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes');
  return result.json();
}
