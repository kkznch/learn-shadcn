import { useEffect, useState } from 'react';
import { getRecipes, type Recipe } from '@/lib/getRecipes';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipes().then((value) => {
      setRecipes(value);
    });
  }, []);

  return {
    recipes,
  };
}
