import game from './components/game.js';

const start = () => {
  game.gameStart();  
}

const reset = (player1Name, player2Name) => {
  let tableContent = document.querySelector("table");
  let cardContent = document.querySelector(".card-body");
  initialTarget.removeChild(tableContent,cardContent);
  initialTarget.innerHTML = createTable() + createUserInfo(player1Name, player2Name);
  let targets = document.querySelectorAll("td");
  targets.forEach(element => {
      element.addEventListener("click", () =>{
      insertSymbol(this, "X");
      });     
  });
}

const play = (player1Name, player2Name) => {
  let initialView = document.querySelector(".initial-view");
  initialTarget.removeChild(initialView);
  initialTarget.innerHTML = display.createTable() + display.createUserInfo(player1Name, player2Name);
  let cells = document.querySelectorAll(".cell");
  for(let i = 0; i < targets.length(); i++){
    cells[i].addEventListener("click", fillCell);
  }
  return [player1Name, player2Name];
}

start();