import { FC } from 'react';
import { useRecipes } from './hooks/useRecipes';

const App: FC = () => {
  const { recipes } = useRecipes();
  return (
    <>
      <h1>shadcn使うよ</h1>
      <div>{recipes.map((item) => item.title)}</div>
    </>
  );
};

export default App;
