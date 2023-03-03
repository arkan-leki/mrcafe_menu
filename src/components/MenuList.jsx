import React, { useContext } from 'react';
import ProductCard from './ProductItems';
import { ItemsContext } from "../context/ItemsContext.jsx";

function Menu() {

  const { items = []} = useContext(ItemsContext)

  return (
    <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 justify-items-stretch items-start gap-4 px-8 py-3">
      {items.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}


export default Menu;
