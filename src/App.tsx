import { FC } from 'react';
import { useRecipes } from './hooks/useRecipes';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const App: FC = () => {
  const { recipes } = useRecipes();
  return (
    <>
      <h1>shadcn使うよ</h1>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              {item.vegan && <p>Vegan!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default App;
