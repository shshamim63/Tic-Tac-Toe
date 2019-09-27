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
  };
})();
export default domManager;
