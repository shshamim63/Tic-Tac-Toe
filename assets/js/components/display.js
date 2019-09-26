const display = (() => {
  const createTable = () => {
    document.querySelector('.initial-view').classList.add('display-none');
    document.querySelector('table').classList.remove('display-none');
  };
  const createUserInfo = (playerXName, playerOName) => {
    document.querySelector('#name-0').innerText = playerXName;
    document.querySelector('#name-1').innerText = playerOName;
    document.querySelector('.user-button').remove('display-none');
  };
  const initialTemplate = () => {
    document.querySelector('.initial-view').remove('display-none');
    // document.querySelector('table').classList.add('display-none');
    // document.querySelector('.user-button').classList.add('display-none');
  };
  return {
    createTable,
    createUserInfo,
    initialTemplate,
  };
})();
export default display;
