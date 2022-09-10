const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
  counterValue += 1;
  refs.value.innerHTML = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  refs.value.innerHTML = counterValue;
}
