const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('Username');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');

form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    console.log(usernameInput.value);
    console.log(emailInput.value);
    console.log(passwordInput.value);
    });