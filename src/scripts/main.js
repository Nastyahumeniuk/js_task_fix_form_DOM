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
    document.querySelectorAll('form')[0].style.display = 'none';
    document.querySelectorAll('form')[1].style.display = 'none';

    const successMessage = document.createElement('div');

    successMessage.textContent = 'Вітаємо! Ви успішно увійшли.';
    successMessage.classList.add('success-message');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '20px';
    successMessage.style.textAlign = 'center';

    document.body.appendChild(successMessage);
  }
});

window.addEventListener('load', function () {
  const signUpForm = document.querySelectorAll('form')[0];

  signUpForm.style.display = 'none';

  const signInForm = document.querySelectorAll('form')[1];

  signInForm.style.display = 'block';
});
