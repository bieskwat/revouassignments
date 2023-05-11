const bannerContainer = document.getElementById("banner-container");
const images = bannerContainer.getElementsByTagName("img");
let currentImageIndex = 0;

setInterval(() => {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
}, 5000);

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        form.onsubmit();
    }
});

function validateForm() {
    let isValid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const messageValue = messageInput.value.trim();

    //validate name
    if (nameValue === '') {
        setErrorFor(nameInput, 'Name is required');
        isValid = false;
    } else {
        setSuccessFor(nameInput);
    }

    //validate email
    if (emailValue === '') {
        setErrorFor(emailInput, 'Email is required');
        isValid = false;
    } else if (!isEmailValid(emailValue)) {
        setErrorFor(emailInput, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(emailInput);
    }

    //validate phone
    if (phoneValue === '') {
        setErrorFor(phoneInput, 'Phone number is required');
        isValid = false;
    } else {
        setSuccessFor(phoneInput);
    }

    //validate message
    if (messageValue === '') {
        setErrorFor(messageInput, 'Message is required');
        isValid = false;
    } else {
        setSuccessFor(messageInput);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    formControl.classList.add('error');
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function isEmailValid(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}