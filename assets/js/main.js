const initialTarget = document.querySelector(".card");

const createTable = () => {
  return `<table class="m-3">
            <tr>
              <td class="cell" id="0"></td>
              <td class="cell" id="1"></td>
              <td class="cell" id="2"></td>
            </tr>
            <tr>
              <td class="cell" id="3"></td>
              <td class="cell" id="4"></td>
              <td class="cell" id="5"></td>
            </tr>
            <tr>
              <td class="cell" id="6"></td>
              <td class="cell" id="7"></td>
              <td class="cell" id="8"></td>
            </tr>
          </table>
          <hr>`;
}

const createUserInfo = (playerXName, playerOName) => {
  return  `<div class="card-body">
            <div class="row">
              <div class="col">
                <div class="border border-danger player-0-panel">
                  <div class="player-name" id="name-0">${playerXName}</div>
                </div>
              </div>
              <div class="col">
                <h2 class="status"></h2>
                <button type="button" class="btn btn-primary btn-sm" onclick="reset(playerXName, playerOName)">
                  Reset
                </button>
                <button type="button" class="btn btn-primary btn-sm mt-1" onclick="initialTemplate()">
                  New Game
                </button>
              </div>
              <div class="col">
                <div class="border player-1-panel">
                  <div class="player-name" id="name-1">${playerOName}</div>
                </div>
              </div>
            </div>
          </div>`
}

const reset = (player1Name, player2Name) => {
  let tableContent = document.querySelector("table");
  let cardContent = document.querySelector(".card-body");
  initialTarget.removeChild(tableContent,cardContent);
  initialTarget.innerHTML = createTable() + createUserInfo(player1Name, player2Name);
}

const play = (player1Name, player2Name) => {
  let initialView = document.querySelector(".initial-view");
  initialTarget.removeChild(initialView);
  initialTarget.innerHTML = createTable() + createUserInfo(player1Name, player2Name);
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
    play(player1Name, player2Name);
  });
}

initialTemplate();