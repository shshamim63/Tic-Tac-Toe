const board = (() => {
  let grid = Array(9).fill(null);
  const returnBoard = () => { grid };
  const setCell = (index, symbol) => grid[index] = symbol;
  const checkString = (element) => {
    return typeof(element) === String;
  }
  const boardIsFull = () => {
    grid.every(checkString);
  }
  const cellIsFilled = (index) => {
    grid[index] === String;
  }
  
  const resetBoard = () => {
    grid = Array(9).fill(null);
  };

  return {
    returnBoard,
    cellIsFilled,
    setCell,
    boardIsFull,
    resetBoard,
  };
})();
export default board;