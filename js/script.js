// For open Booking box
const randomOpen = document.querySelector("#random-open");
const randomBox = document.querySelector("#random-box");
const randomClose = document.querySelector("#random-close");

randomOpen.addEventListener("click",()=>{
    randomBox.style.display = "flex";
});

randomClose.addEventListener("click",()=>{
    randomBox.style.display = "none";
});


// For form validation
var nmaeError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// for name section
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nmaeError.innerHTML = 'Name is required';
        nmaeError.style.display = 'block';
        setTimeout(function(){nmaeError.style.display = 'none';}, 2000);
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nmaeError.innerHTML = 'Write full name';
        nmaeError.style.display = 'block';
        setTimeout(function(){nmaeError.style.display = 'none';}, 2000);
        return false;
    }

    nmaeError.innerHTML = '<i class="fa-solid fa-check" style="color: #02f212;"></i>';
    return true;
}

// for phone section

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        phoneError.style.display = 'block';
        setTimeout(function(){phoneError.style.display = 'none';}, 2000);
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        phoneError.style.display = 'block';
        setTimeout(function(){phoneError.style.display = 'none';}, 2000);
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/) ) {
        phoneError.innerHTML = 'Phone no is required';
        phoneError.style.display = 'block';
        setTimeout(function(){phoneError.style.display = 'none';}, 2000);
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check" style="color: #02f212;"></i>';
    return true;
}

// foe email section

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        emailError.style.display = 'block';
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        emailError.style.display = 'block';
        setTimeout(function(){emailError.style.display = 'none';}, 2000);
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check" style="color: #02f212;"></i>';
    return true;
}

// for message section

function validateMessage() {
    var message = document.getElementById('contact-message').value;

    if (message.length == 0) {
        messageError.innerHTML = 'Message is reuired';
        messageError.style.display = 'block';
        setTimeout(function(){messageError.style.display = 'none';}, 2000);
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-check" style="color: #02f212;"></i>';
    return true;
}



function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error';
        setTimeout(function(){submitError.style.display = 'none';}, 2000);
        return false;
    }

}