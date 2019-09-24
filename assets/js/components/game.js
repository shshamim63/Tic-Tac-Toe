import display from '../components/display.js';
import board from '../components/board.js';
import Player from '../components/player.js';
const game = (() => {
  const initialTarget = document.querySelector(".card");
  let turn = 0;
  let playerXName;
  let playerOName;
  let players;
  const winCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                          [1, 4, 7], [2, 5, 8], [3, 6, 9],
                          [1, 5, 9], [3, 5, 7]];
  const winner = (players) => {
    // let firstPlayerMove = board.returnBoard; closed in here
    for(let k = 0; k < players.length; k++){
      for(let m = 0; m < winCombination.length; m++){
        if(players[k] && winCombination[m]){
          return true;
        }
      }
    }
    return false;
  }

  const fillCell = (element) => {
    if(turn === 0){
      if(!board.cellIsFilled(element)){
        document.getElementById(element).innerText = "X";
        board.setCell(element,"X");  
        turn = 1;
      }
    }
    else if(turn === 1){
      if(!board.cellIsFilled(element)){
        document.getElementById(element).innerText = "O";  
        board.setCell(element,"O");
        turn = 0;
      }
    }
  }

  const showGrid = () => {
    let initialView = document.querySelector(".initial-view");
    initialTarget.removeChild(initialView);
    initialTarget.innerHTML = display.createTable() + display.createUserInfo(playerXName, playerOName);
    let cells = document.querySelectorAll(".cell");
    for(let i = 0; i < cells.length; i++){
      cells[i].addEventListener("click", ()=>{
        console.log(i);
        fillCell(i);
      });
    }
  }

  const addPlayEvent = (firstLook) => {
    initialTarget.innerHTML = firstLook;
    let playButton = document.querySelector("#play");
    playButton.addEventListener("click", () => {
      playerXName = document.querySelector("#exampleInputName1").value;
      playerOName = document.querySelector("#exampleInputName2").value;
      showGrid();
    });
  }

  const loadGame = () => {
    const players = [Player(playerXName, "X"), Player(playerOName, "O")];
  }

  const render = () => {
    let firstLook = display.initialTemplate();
    addPlayEvent(firstLook);
  }
  const Start = (player1, player2) => {
    const firstPlayer = Player(player1, "X");
    const secondPlayer = Player(player2, "O");
    while(winner([firstPlayer, secondPlayer]) || board.boardIsFull()){
      turn
    }
  }

  const gameStart = () => {
    render();
    loadGame();
  }
  return {
    gameStart,
  }
})();
export default game;