/* eslint-disable no-plusplus */
const board = (() => {
  let grid = Array(9).fill(null);
  const returnGrid = () => grid;
  const setCell = (index, symbol) => {
    grid[index] = symbol;
  };
  const boardIsFull = () => {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === null) {
        return false;
      }
    }
    return true;
  };
  const cellIsFilled = (index) => grid[index] === null;
  const resetGrid = () => {
    grid = Array(9).fill(null);
  };

  return {
    grid,
    returnGrid,
    cellIsFilled,
    setCell,
    boardIsFull,
    resetGrid,
  };
})();
export default board;
