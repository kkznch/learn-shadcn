import { FC, Suspense } from 'react';
import Recipes from './Recipes';
import Loading from '@/Loading';

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <div className="grid grid-cols-3 gap-8">
          <Recipes />
        </div>
      </main>
    </Suspense>
  );
};

export default App;
