const display = (() => {

  const insertSymbol = (target, playerSymbol) =>{
    console.log(target.id);
  }

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

  return {
    createTable,
    createUserInfo,
  };
})();
export default display;
