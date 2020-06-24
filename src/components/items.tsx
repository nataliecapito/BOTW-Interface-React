// items.tsx

// imports
import React from "react";
import ItemsContext from './items_context'

const Item = ({ name, icon, itemIndex }) => {
  const { setItemSelected } = useContext(ItemsContext);
  const handleClick = () => { setItemSelected(itemIndex) };

  return (
    <div
      onClick={handleClick}
      className={cx(
        {"shadow-yellow border-zelda-softYellow border-2": itemSelected === itemIndex},
        "w-20 h-20 bg-black border border-zelda-softYellow"
      )}
    >
      <img alt={name} src={icon} />
    </div>
  )
}

export default Item;
