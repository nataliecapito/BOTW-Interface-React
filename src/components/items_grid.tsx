// items_grid.tsx

// imports
import React from "react";
import Item from './items'

const ItemsGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
      {items && items.map(item => <Item key={item.name} name={item.name} icon={item.icon} />)}
    </div>
  )
}

export default ItemsGrid;
