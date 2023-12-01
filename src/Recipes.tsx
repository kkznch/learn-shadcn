import { FC } from 'react';
import useSWR from 'swr';
import { getRecipes } from './lib/getRecipes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Recipes: FC = () => {
  const { data } = useSWR('getRecipes', getRecipes, { suspense: true });
  return (
    <>
      {data.map((item) => (
        <Card key={item.id} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage src={`${item.image}?random=${item.id}"`} alt="recipe img" />
              <AvatarFallback>{item.title.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.time} mins to cook.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>View Recipe</Button>
            {item.vegan && <Badge variant="secondary">Vegan!</Badge>}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Recipes;
