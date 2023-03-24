import React, { useContext, lazy, Suspense } from 'react';
import { ItemsContext } from "../context/ItemsContext.jsx";

function Menu() {

  const { items = [] } = useContext(ItemsContext)
  const LazyProductCard = lazy(() => import('./ProductItems'));

  return (
    
    <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 justify-items-stretch justify-center gap-1 px-1">
      {items.map(item => (
        <Suspense key={item.id} fallback={<div>Loading...</div>}>
          <LazyProductCard product={item} />
        </Suspense>
      ))}
    </div>
  );
}


export default Menu;
