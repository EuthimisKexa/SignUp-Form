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

    let isValid = false;

    //error display elements

    errorLabEmail.hidden = false;
    errorLabUser.hidden = false;
    errorLabPassword.hidden = false;
    

    if (!isValid) {
    event.preventDefault();
    }
    });