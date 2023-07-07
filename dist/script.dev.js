"use strict";

var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var subjectInput = document.getElementById("subject");
var aboutInput = document.getElementById("about");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameValid = validateName();
  var surnameValid = validateSurname();
  var emailValid = validateEmail();
  var phoneValid = validatePhone();
  var subjectValid = validateSubject();
  var aboutValid = validateAbout();

  if (nameValid && surnameValid && emailValid && phoneValid && subjectValid && aboutValid) {
    form.submit();
  }
});
nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("input", function () {
  clearError(nameInput);
});
surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("input", function () {
  clearError(surnameInput);
});
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", function () {
  clearError(emailInput);
});
phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener("input", function () {
  clearError(phoneInput);
});
subjectInput.addEventListener("blur", validateSubject);
subjectInput.addEventListener("input", function () {
  clearError(subjectInput);
});
aboutInput.addEventListener("blur", validateAbout);
aboutInput.addEventListener("input", function () {
  clearError(aboutInput);
});

function validateName() {
  var name = nameInput.value.trim();

  if (!validator.isAlpha(name)) {
    displayError(nameInput, "Invalid name");
    return false;
  } else {
    clearError(nameInput);
    return true;
  }
}

function validateSurname() {
  var surname = surnameInput.value.trim();

  if (!validator.isAlpha(surname)) {
    displayError(surnameInput, "Invalid surname");
    return false;
  } else {
    clearError(surnameInput);
    return true;
  }
}

function validateEmail() {
  var email = emailInput.value.trim();

  if (!validator.isEmail(email)) {
    displayError(emailInput, "Invalid email");
    return false;
  } else {
    clearError(emailInput);
    return true;
  }
}

function validatePhone() {
  var phone = phoneInput.value.trim();

  if (!validator.isMobilePhone(phone)) {
    displayError(phoneInput, "Invalid phone number");
    return false;
  } else {
    clearError(phoneInput);
    return true;
  }
}

function validateSubject() {
  var subject = subjectInput.value.trim();

  if (validator.isEmpty(subject)) {
    displayError(subjectInput, "Subject is required");
    return false;
  } else {
    clearError(subjectInput);
    return true;
  }
}

function validateAbout() {
  var about = aboutInput.value.trim();

  if (!validator.isLength(about, {
    min: 10
  })) {
    displayError(aboutInput, "Please provide more information.");
    return false;
  } else {
    clearError(aboutInput);
    return true;
  }
}

function displayError(input, message) {
  var errorElement = document.createElement("div");
  errorElement.classList.add("error-message");
  errorElement.innerText = message;
  var inputContainer = input.parentNode;
  inputContainer.appendChild(errorElement);
}

function clearError(input) {
  var errorElement = input.parentNode.querySelector(".error-message");

  if (errorElement) {
    errorElement.remove();
  }
}

new Swiper(".first-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true
});
new Swiper(".card-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  mousewheel: true,
  keyboard: true
});
new Swiper(".img-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  mousewheel: true,
  keyboard: true
});
new Swiper(".elipse-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  mousewheel: true,
  keyboard: true
});