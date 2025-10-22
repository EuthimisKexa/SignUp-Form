//get form and input elements
const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('Username');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');

const errorLabUser = document.getElementById('errorLabUser');
const errorLabEmail = document.getElementById('errorLabEmail');
const errorLabPassword = document.getElementById('errorLabPassword');

//add event listener for form submission
form.addEventListener('submit', function(event) {

    let isValid = true;

    if (usernameInput.value.trim() === '') {
        errorLabUser.innerHTML = 'Username is <i>required</i>.';
        isValid = false;
        errorLabUser.hidden = false;
    } else {
        errorLabUser.hidden = true;
    }

    if (emailInput.value.trim() === '') {
        errorLabEmail.innerHTML = 'Email is <i>required</i>.';
        isValid = false;
        errorLabEmail.hidden = false;
    } else {
        errorLabEmail.hidden = true;
    }

    if (passwordInput.value.trim() === '') {
        errorLabPassword.innerHTML = 'Password is <i>required</i>.';
        isValid = false;
        errorLabPassword.hidden = false;
    }else {
        errorLabPassword.hidden = true;
    }

    //error display elements
    

    if (!isValid) {
        event.preventDefault();
    }
    });