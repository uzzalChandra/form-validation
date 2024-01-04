// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const phoneNumber = document.getElementById("phone-number");
// const massage = document.getElementById("massage");
// const error = document.querySelector(".error");
// const from = document.querySelector("#Form");
// const fName = document.getElementById("fName");
// fName.addEventListener("keyup", (e) => {

//   e.preventDefault();
//   if (fName.value.length === 0) {
//     error.innerHTML = "hello";
//   }}
// );
const form = document.querySelector("#Form");
const lName = document.getElementById("uName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("passwordTwo");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");

// 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("errors");
  inputControl.classList.remove("successs");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = "";
  inputControl.classList.add("successs");
  inputControl.classList.remove("errors");
};

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

const validateInput = () => {
  const fName = lName.value.trim();
  const fEmail = email.value.trim();
  const fPassword = password.value.trim();
  const fPasswordTwo = passwordTwo.value.trim();
  const fPhoneNumber = phoneNumber.value.trim();

  if (fName.length === 0) {
    setError(lName, "Name is required");
  } else {
    setSuccess(lName);
  }

  if (fEmail === "") {
    setError(email, "Email is required");
  } else if (!validEmail(fEmail)) {
    setError(email, "Provide a valid email");
  } else {
    setSuccess(email);
  }

  if (fPassword === "") {
    setError(password, "Password is required");
  } else if (fPassword.length < 6) {
    setError(password, "Password must be at least 6 characters");
  }else if (fPassword !== fPasswordTwo){
    setError(password, "Please enter confirm your password")
  }else {
    setSuccess(password);
  }

  if (fPasswordTwo === "") {
    setError(passwordTwo, "Please confirm your password");
  } else if (fPasswordTwo !== fPassword) {
    setError(passwordTwo, "Passwords do not match");
  } else {
    setSuccess(passwordTwo);
  }

  if (fPhoneNumber === "") {
    setError(phoneNumber, "Enter your phone number");
  } else if (fPhoneNumber.length < 11) {
    setError(phoneNumber, "Phone number must be 11 digits");
  } else {
    setSuccess(phoneNumber);
  }
};

// form.addEventListener("submit", (e) => {
//   const error = document.querySelector(".error");
//   e.preventDefault();
//   if (fName.value === "") {
//     error.innerHTML = "Please enter your name";
//     //  fName.style.border="1px solid red";
//     fName.classList.add("valid-info");
//   }
//   if (email.value == "") {
//     error.innerHTML = "Email is required";
//   }
// });
