import board from './components/board.js';
import Player from './components/player.js';
const game = (() => {
  let turn = 0;
  const winCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                          [1, 4, 7], [2, 5, 8], [3, 6, 9],
                          [1, 5, 9], [3, 5, 7]];
  const winner = (players) =>{
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
  const start = (player1, player2) => {
    const firstPlayer = Player(player1, "X");
    const secondPlayer = Player(player2, "O");
    while(winner([firstPlayer, secondPlayer]) || board.boardIsFull()){
      turn
    }
  }
})();
export default game;