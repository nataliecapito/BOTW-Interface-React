// items_context.tsx

// imports
import React from "react";

const ItemsContext = React.createContext({
  setItemSelected: ({ item }) => null,
  itemSelected: 0,
});

export default ItemsContext;
