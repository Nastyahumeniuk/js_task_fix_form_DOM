'use strict';

const tablet = document.querySelectorAll('.field');

tablet.forEach((table) => {
  const input = table.querySelector('input');
  const nameCell = document.createElement('label');
  const inputId = input.id;
  const inputPlaceholder = input.name;

  nameCell.textContent = input.name;
  nameCell.setAttribute('for', inputId);
  input.setAttribute('placeholder', inputPlaceholder);
  nameCell.classList.add('field-label');
  input.insertAdjacentElement('beforebegin', nameCell);
});

const loginForm = document.querySelectorAll('form')[1];

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('sign-in-email').value.trim();
  const password = document.getElementById('sign-in-password').value.trim();

  if (email === '' || password === '') {
    alert('Please fill in all fields');
  } else {
    alert('Login successfully');
  }

  const signUpForm = document.querySelectorAll('form')[0];

  signUpForm.style.display = 'none';

  const signInForm = document.querySelectorAll('form')[1];

  signInForm.style.display = 'block';
});

window.addEventListener('load', function () {
  const signUpForm = document.querySelectorAll('form')[0];

  signUpForm.style.display = 'none';

  const signInForm = document.querySelectorAll('form')[1];

  signInForm.style.display = 'block';
});
