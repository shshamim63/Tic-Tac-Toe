/* eslint-disable import/extensions */
import display from './display.js';
import board from './board.js';
import Player from './player.js';

const game = (() => {
  const initialTarget = document.querySelector('.card');
  let turn = 0;
  let playerXName;
  let playerOName;
  let players;
  const winCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];
  const winner = (participant) => {
    // let firstPlayerMove = board.returnBoard; closed in here
    for (let k = 0; k < participant.length; k += 1) {
      for (let m = 0; m < winCombination.length; m += 1) {
        if (players[k] && winCombination[m]) {
          return true;
        }
      }
    }
    return false;
  };

  const fillCell = (element) => {
    if (turn === 0) {
      if (board.cellIsFilled(element)) {
        document.getElementById(element).innerText = 'X';
        document.querySelector('.player-0-panel').classList.remove('border-danger');
        document.querySelector('.player-1-panel').classList.add('border-danger');
        board.setCell(element, 'X');
        console.log(board.grid);
        turn = 1;
      }
    } else if (turn === 1) {
      if (board.cellIsFilled(element)) {
        document.getElementById(element).innerText = 'O';
        document.querySelector('.player-1-panel').classList.remove('border-danger');
        document.querySelector('.player-0-panel').classList.add('border-danger');
        board.setCell(element, 'O');
        console.log(board.grid);
        turn = 0;
      }
    }
  };
  const showGrid = () => {
    const initialView = document.querySelector('.initial-view');
    initialTarget.removeChild(initialView);
    initialTarget.innerHTML = display.createTable()
                              + display.createUserInfo(playerXName, playerOName);
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].addEventListener('click', () => {
        fillCell(i);
      });
    }
  };

  const addPlayEvent = (firstLook) => {
    initialTarget.innerHTML = firstLook;
    const playButton = document.querySelector('#play');
    playButton.addEventListener('click', () => {
      playerXName = document.querySelector('#exampleInputName1').value;
      playerOName = document.querySelector('#exampleInputName2').value;
      showGrid();
    });
  };
  const loadGame = () => {
    players = [Player(playerXName, 'X'), Player(playerOName, 'O')];
  };
  const render = () => {
    const firstLook = display.initialTemplate();
    addPlayEvent(firstLook);
  };
  const gameStart = () => {
    render();
    loadGame();
  };
  return {
    gameStart,
  };
})();
export default game;
