function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorTitleRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');
// const styleRef = document.querySelector('style');

changeColorBtnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  // const backgroundColorString = `body {background-color: ${getRandomHexColor()}}`;
  // styleRef.insertAdjacentHTML('beforeend', backgroundColorString);

  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTitleRef.textContent = getRandomHexColor();
}
