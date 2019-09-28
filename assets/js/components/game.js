import display from './display.js';
import board from './board.js';
import Player from './player.js';
import domManager from './domManager.js';

const game = (() => {
  let turn = 0;
  let playerXName;
  let playerOName;
  let players;
  let result;
  const winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

  const isEqual = (arr, target) => target.every((v) => arr.includes(v));
  const winner = () => {
    for (let k = 0; k < players.length; k += 1) {
      for (let m = 0; m < winCombination.length; m += 1) {
        if (isEqual(players[k].playersMove, winCombination[m])) {
          return players[k];
        }
      }
    }
    return false;
  };
  const declareResult = () => {
    domManager.enableResultView();
    if (winner()) {
      domManager.declareWinner(winner().name);
    } else if (board.boardIsFull()) {
      domManager.declareDraw();
    }
  };
  const checkResult = () => {
    if (winner() || board.boardIsFull()) {
      result = true;
      declareResult();
    }
  };
  const fillCell = (element) => {
    if (!result) {
      if (turn === 0) {
        if (board.cellIsFilled(element)) {
          domManager.fillMove(element, 'X', 0, 1);
          board.setCell(element, 'X');
          players[0].playersMove.push(element);
          turn = 1;
        }
      } else if (turn === 1) {
        if (board.cellIsFilled(element)) {
          domManager.fillMove(element, 'O', 1, 0);
          board.setCell(element, 'O');
          players[1].playersMove.push(element);
          turn = 0;
        }
      }
    }
    checkResult();
  };
  const loadGame = () => {
    players = [Player(playerXName, 'X'), Player(playerOName, 'O')];
  };
  const showGameBoard = () => {
    domManager.showGrid(playerXName, playerOName);
  };
  const setGameView = (firstPlayerName, secondPlayerName) => {
    playerXName = firstPlayerName;
    playerOName = secondPlayerName;
    showGameBoard();
    loadGame();
  };
  const render = () => {
    display.initialTemplate();
    domManager.addPlayEvent(setGameView);
  };
  const gameStart = () => {
    render();
    board.resetGrid();
    result = false;
  };
  const deleteGameInfo = () => {
    turn = 0;
    domManager.disableResult();
    display.initialTemplate();
  };
  const reset = () => {
    for (let i = 0; i < players.length; i += 1) {
      players[i].playersMove = [];
    }
    deleteGameInfo();
    domManager.showGrid(playerXName, playerOName);
    board.resetGrid();
    result = false;
  };
  const newGame = () => {
    deleteGameInfo();
    gameStart();
  };
  return {
    gameStart,
    fillCell,
    reset,
    newGame,
  };
})();
export default game;
