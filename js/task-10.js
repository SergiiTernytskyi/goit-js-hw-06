function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  controlsDiv: document.querySelector('#controls'),
  boxesDiv: document.querySelector('#boxes'),
  input: document.querySelector('input'),
};

refs.input.addEventListener('blur', boxQuantity);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

const amountArr = [];
function boxQuantity(event) {
  console.log(Number(event.currentTarget.value));
  amountArr.push(Number(event.currentTarget.value));
  // return Number(event.currentTarget.value);
}

const amount = amountArr[0];
console.log(amountArr);
console.log(amount);

function createBoxes(amount) {
  const boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 1; i <= 20; i += 1) {
    width += 10;
    height += 10;
    boxes.push(
      `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}"></div>`
    );
  }

  const boxDivString = boxes.join(' ');
  refs.boxesDiv.insertAdjacentHTML('beforeend', boxDivString);

  console.log(boxes);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
}
