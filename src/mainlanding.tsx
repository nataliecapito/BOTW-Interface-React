// mainlanding.tsx

// imports
import React from "react";
import ItemsGrid from './components/items_grid'

// global(s)
// --- numbers
const COLUMNS_NUMBER = 5

//
// getMatrixPositionFromIndex
// - Index to Matrix position method
const getMatrixPositionFromIndex = (index) => {
  const rowIndex = Math.floor(index / COLUMNS_NUMBER);
  const columnIndex = index % COLUMNS_NUMBER;
  return {x: rowIndex, y: columnIndex};
};

// getIndexFromMaxtrixPosition
// - Matrix position to index method
const getIndexFromMaxtrixPosition = (matrixPosition) => {
  return matrixPosition.x * COLUMNS_NUMBER + matrixPosition.y;
};

//
// goUp
// - Keyboard navigation
const goUp = (position) => {
  return { x: Math.max(position.x - 1, 0), y:position.y }
};

// goBottom
const goBottom = (position) => {
  return { x: Math.min(position.x + 1, ROWS_NUMBER), y:position.y }
};

// goLeft
const goLeft = (position) => {
  return { x: position.x, y: Math.max(position.y - 1, 0) }
};

// goRight
const goRight = (position) => {
  return { x: position.x, y: Math.min(position.y + 1, COLUMNS_NUMBER) }
};

//
// handleKeyPressed
// - Key pressed handler function
const handleKeyPressed = (event: React.KeyboardEvent) => {
  let newItemSelected = null;

  if (event.key === "ArrowUp") {
    newItemSelected = goUp(itemSelected);
  } else if (event.key === "ArrowDown") {
    newItemSelected = newItemSelected = goDown(itemSelected);
  } else if (event.key === "ArrowLeft") {
    newItemSelected = goLeft(itemSelected);
  } else if (event.key === "ArrowRight") {
    newItemSelected = goRight(itemSelected);
  }

  if (newItemSelected){
    setItemSelected(newItemSelected)
  }
};

//
// MainLanding
function MainLanding() {
  const contextState = { setItemSelected, itemSelected, };
  return (
    <div className="container mx-auto flex flex-col xl:flex-row bg-zelda-darkGreen">
      <div className="w-full xl:w-1/2">
        <ItemsGrid />
      </div>

      <div className="w-full xl:w-1/2"></div>
    </div>
  );
}

export default MainLanding;
