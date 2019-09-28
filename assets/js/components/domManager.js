import game from './game.js';
import display from './display.js';

const domManager = (() => {
  const domPlayButton = () => document.querySelector('#play');
  const getFirstName = () => document.querySelector('#exampleInputName1').value;
  const getSecondName = () => document.querySelector('#exampleInputName2').value;
  const disableResult = () => {
    document.querySelector('.status').style.display = 'none';
  };
  const declareWinner = (winnerName) => {
    document.querySelector('.result').innerText = `Winner is: ${winnerName}`;
  };
  const declareDraw = () => {
    document.querySelector('.result').innerText = 'It is a Draw';
  };
  const enableResultView = () => {
    document.querySelector('.status').style.display = 'block';
  };
  const fillMove = (element, mark, current, next) => {
    document.getElementById(element).innerText = mark;
    document.querySelector(`.player-${current}-panel`).classList.remove('border-danger');
    document.querySelector(`.player-${next}-panel`).classList.add('border-danger');
  };
  const clearTable = (cells) => {
    cells.forEach(element => {
      element.innerText = '';
    });
  };
  const showGrid = (playerXName, playerOName, resetCb, newGameCb, fillCellCb) => {
    display.createTable();
    display.createUserInfo(playerXName, playerOName);
    document.querySelector('.reset').addEventListener('click', resetCb);
    document.querySelector('.new-game').addEventListener('click', newGameCb);
    const cells = document.querySelectorAll('.cell');
    domManager.clearTable(cells);
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].addEventListener('click', () => {
        fillCellCb(i);
      });
    }
  };
  const addPlayEvent = (setGameViewcd) => {
    const playButton = domManager.domPlayButton();
    playButton.addEventListener('click', () => {
      const playerXName = domManager.getFirstName();
      const playerOName = domManager.getSecondName();
      setGameViewcd(playerXName, playerOName);
    });
  };
  return {
    domPlayButton,
    getFirstName,
    getSecondName,
    declareWinner,
    enableResultView,
    declareDraw,
    fillMove,
    clearTable,
    disableResult,
    showGrid,
    addPlayEvent,
  };
})();
export default domManager;
