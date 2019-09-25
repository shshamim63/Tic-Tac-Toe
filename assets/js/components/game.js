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
  let result;
  const winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

  const isEqual = (arr, target) => target.every((v) => arr.includes(v));
  const winner = () => {
    // let firstPlayerMove = board.returnBoard; closed in here
    for (let k = 0; k < players.length; k += 1) {
      for (let m = 0; m < winCombination.length; m += 1) {
        console.log(isEqual(players[k].playersMove, winCombination[m]));
        if (isEqual(players[k].playersMove, winCombination[m])) {
          console.log('I am from winner');
          return players[k];
        }
      }
    }
    return false;
  };
  const declareResult = () => {
    if (winner()) {
      document.querySelector('.status').innerText = winner().name;
    } else if (board.boardIsFull()) {
      document.querySelector('.status').innerText = 'It is a Draw';
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
          document.getElementById(element).innerText = 'X';
          document.querySelector('.player-0-panel').classList.remove('border-danger');
          document.querySelector('.player-1-panel').classList.add('border-danger');
          board.setCell(element, 'X');
          players[0].playersMove.push(element);
          turn = 1;
        }
      } else if (turn === 1) {
        if (board.cellIsFilled(element)) {
          document.getElementById(element).innerText = 'O';
          document.querySelector('.player-1-panel').classList.remove('border-danger');
          document.querySelector('.player-0-panel').classList.add('border-danger');
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
    loadGame();
  };
  const addPlayEvent = (firstLook) => {
    initialTarget.innerHTML = firstLook;
    const playButton = document.querySelector('#play');
    playButton.addEventListener('click', () => {
      playerXName = document.querySelector('#exampleInputName1').value;
      playerOName = document.querySelector('#exampleInputName2').value;
      showGrid();
    });
    console.log(playerXName);
  };
  const render = () => {
    const firstLook = display.initialTemplate();
    addPlayEvent(firstLook);
  };
  const gameStart = () => {
    render();
    result = false;
  };
  return {
    gameStart,
  };
})();
export default game;
