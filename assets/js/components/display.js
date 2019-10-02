const display = (() => {
  const initialView = document.querySelector('#initial-view');
  const tableContent = document.querySelector('#table-content');
  const userInfo = document.querySelector('#user-info');
  const createTable = () => {
    initialView.classList.add('display-none');
    tableContent.classList.remove('display-none');
  };
  const createUserInfo = (playerXName, playerOName) => {
    document.querySelector('#name-0').innerText = playerXName;
    document.querySelector('#name-1').innerText = playerOName;
    userInfo.classList.remove('display-none');
  };
  const initialTemplate = () => {
    initialView.classList.remove('display-none');
    tableContent.classList.add('display-none');
    userInfo.classList.add('display-none');
  };
  return {
    createTable,
    createUserInfo,
    initialTemplate,
  };
})();
export default display;
