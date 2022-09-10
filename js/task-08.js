const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };

    console.log(user);
    console.log(`User with login ${user.email} and password ${user.password}`);
    event.currentTarget.reset();
  }
}
