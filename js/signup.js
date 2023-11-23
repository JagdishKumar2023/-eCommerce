let handleSignup = (event) => {
  event.preventDefault();

  let userSignupData = JSON.parse(localStorage.getItem("userSignupData")) || [];

  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;

  let telInput = document.getElementById("tel");
  let telValue = telInput.value;

  let emailInput = document.getElementById("email");
  let emailValue = emailInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let confirmPassInput = document.getElementById("confirmPassInput");
  let confirmPassValue = confirmPassInput.value;

  let signUpData = {
    name: nameValue,
    phone: telValue,
    email: emailValue,
    password: passValue,
  };

  if (
    !nameValue ||
    !telValue ||
    !emailValue ||
    !passValue ||
    !confirmPassValue
  ) {
    alert(`Please fill the required fields`);
  } else if (passValue !== confirmPassValue) {
    alert(`Password and confirm password does not match`);
  } else {
    userSignupData.push(signUpData);
    localStorage.setItem("userSignupData", JSON.stringify(userSignupData));

    alert("signed up successfully");
    nameInput.value = "";
    telInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    confirmPassInput.value = "";

    nameInput.focus();
  }

  //   console.log(userSignupData);
};

let signup_form = document.getElementById("handleSignup");
signup_form.addEventListener("submit", handleSignup);
