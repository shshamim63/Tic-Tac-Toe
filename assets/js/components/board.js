/* eslint-disable no-plusplus */
const board = (() => {
  let grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
  const cellIsFilled = (index) => grid[index] != null;
  const resetGrid = () => {
    grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
