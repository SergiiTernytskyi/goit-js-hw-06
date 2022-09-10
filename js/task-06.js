const inputRef = document.querySelector('#validation-input');

const requiredInputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === requiredInputLength) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
