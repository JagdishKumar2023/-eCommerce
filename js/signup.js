// setting focus to name field as soon as page load

let nameInput = document.getElementById("name");
nameInput.focus();

let signUpForm = document.querySelector(".signup-form");

let handleSignup = (e) => {
  e.preventDefault();

  let signUpDB = JSON.parse(localStorage.getItem("userData")) || [];

  let nameInput = document.getElementById("name");
  let nameValue = nameInput.value;

  let emailInput = document.getElementById("email");
  let emailValue = emailInput.value;

  let phoneInput = document.getElementById("tel");
  let phoneValue = phoneInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let cnfmPassInput = document.getElementById("confirmPassword");
  let confPassValue = cnfmPassInput.value;

  let signUpData = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    password: passValue,
    isLoggedIn: false,
  };

  // let checkedData = signUpDB.some((ele) => {
  //   if (ele.email === emailValue || ele.phone === phoneValue) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  let checkedData = signUpDB.some(
    (ele) => ele.email === emailValue || ele.phone === phoneValue
  );

  if (passValue !== confPassValue) {
    alert("password and confirm password do not match.");
    cnfmPassInput.focus();
  } else if (checkedData) {
    alert("email or phone number already exists.");
  } else {
    signUpDB.push(signUpData);

    localStorage.setItem("userData", JSON.stringify(signUpDB));

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    passInput.value = "";
    cnfmPassInput.value = "";

    alert("signed up successfully.");

    window.location.href = "./login.html";
  }
};

signUpForm.addEventListener("submit", handleSignup);
