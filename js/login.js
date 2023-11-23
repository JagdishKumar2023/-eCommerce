let emailInput = document.getElementById("email");
emailInput.focus();

let loginForm = document.querySelector(".login-form");

let handleLogin = (e) => {
  e.preventDefault();

  let signUpDB = JSON.parse(localStorage.getItem("userData"));

  let emailInput = document.getElementById("email");
  let emailValue = emailInput.value;

  let passInput = document.getElementById("password");
  let passValue = passInput.value;

  let checkUserData = signUpDB.find((ele) => {
    if (ele.email === emailValue) {
      return ele;
    }
  });

  if (!checkUserData) {
    alert("email id does not exists.");
    emailInput.focus();
  } else if (checkUserData.password !== passValue) {
    alert("password does not match.");
    passInput.focus();
  } else {
    window.location.href = "./index.html";
  }
};

loginForm.addEventListener("submit", handleLogin);
