import React, { useContext } from 'react';
import ProductCard from './ProductItems';
import { ItemsContext } from "../context/ItemsContext.jsx";

function Menu() {

  const { items = []} = useContext(ItemsContext)

  return (
    <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 justify-items-stretch justify-center gap-1 px-1">
      {items.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
      { console.log(items)}
    </div>
  );
}


export default Menu;
