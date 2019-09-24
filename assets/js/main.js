import game from './components/game.js';
import display from './components/display.js';


const initialTarget = document.querySelector(".card");

const gameStart = (player1Name, player2Name) => {
  game.start(player1Name, player2Name);
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
  gameStart(player1Name, player2Name);
}

const initialTemplate = () => {
  let firstLook = `<div class="initial-view">
                    <img src="./assets/images/innertictactoe.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Welcome</h5>
                      <p class="card-text">Click below to start</p>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Start
                      </button>
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalCenterTitle">Enter Player Names</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form>
                                <div class="form-group">
                                  <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Player X">
                                  <input type="text" class="form-control" id="exampleInputName2" aria-describedby="emailHelp" placeholder="Player Y">
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary" id ="play" data-dismiss="modal">Play</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`

  initialTarget.innerHTML = firstLook ;
  let playButton = document.querySelector("#play");
  playButton.addEventListener("click", () => {
    let player1Name = document.querySelector("#exampleInputName1").value;
    let player2Name = document.querySelector("#exampleInputName2").value;
    play(player1Name, player2Name,initialTarget);
  });
}

initialTemplate();
