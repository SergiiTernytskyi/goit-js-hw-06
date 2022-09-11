function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
  input: document.querySelector('#controls input'),
};

refs.createBtn.addEventListener('click', boxQuantity);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function boxQuantity() {
  refs.createBtn.setAttribute('data-quantity', Number(refs.input.value));
}

function createBoxes() {
  const amount = refs.createBtn.dataset.quantity;
  const boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    boxes.push(
      `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}"></div>`
    );
  }

  const boxDivString = boxes.join(' ');
  refs.boxesDiv.insertAdjacentHTML('beforeend', boxDivString);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
}
