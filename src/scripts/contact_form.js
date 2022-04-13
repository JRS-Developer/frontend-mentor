const emailInput = document.getElementById("contact-form-email");
const emailFeeback = document.getElementById("contact-email-feedback");
const form = document.getElementById("contact-form");
let error = false;
const errorMessage = "Whoops, make sure, it's an email";

const inputClasses = {
  invalid: "is-invalid",
  valid: "is-valid",
};

const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const showError = () => {
  emailInput.classList.add(inputClasses.invalid);
  emailFeeback.innerText = errorMessage;
  error = true;
};

const handleInput = (e) => {
  const input = e.target;
  const email = input.value;

  if (regexEmail.test(email)) {
    // if email is valid show success
    error = false;
    emailFeeback.innerText = "";

    input.classList.remove(inputClasses.invalid);
    input.classList.add(inputClasses.valid);
    return;
  } else if (email === "") {
    // if email is empty it will not show any error
    input.classList.remove(inputClasses.invalid);
    input.classList.remove(inputClasses.valid);
    return;
  }

  showError();
};

const handleSubmit = (e) => {
  if (error) return e.preventDefault();

  if (emailInput.value === "") {
    showError();
    return e.preventDefault();
  }
};

emailInput.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
