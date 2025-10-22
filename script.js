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
    
    //are the inputs empty?
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



    //are the inputs correct?

    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[A-Za-z]{2,}$/;
    if (!emailInput.value.match(emailRegex)) {
        errorLabEmail.innerHTML = 'Please enter a <i>valid</i> email address.';
        isValid = false;
        errorLabEmail.hidden = false;
    } else {
        errorLabEmail.hidden = true;
    }
    const passwordRegex = /^(?=.{8,}$)(?=.*[!@#$%^&*()_\-]).*$/;
    if (passwordInput.value.trim() === '') {
        errorLabPassword.innerHTML = 'Password must be at least 8 characters and include at least one special character like: !@#$%^&*()_ .';
        isValid = false;
        errorLabPassword.hidden = false;
    }else {
        errorLabPassword.hidden = true;
    }

    

    if (!isValid) {
        event.preventDefault();
    }else {
        alert('Form submitted successfully!');
        console.log('Username:', usernameInput.value);
        console.log('Email:', emailInput.value); 
        console.log('Password:', passwordInput.value);
        window.location.href = newUrl
    }


    });