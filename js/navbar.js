let userData = JSON.parse(localStorage.getItem("userData"));

let loggedInUser = userData.find((ele) => {
  if (ele.isLoggedIn === true) {
    return ele;
  }
});

let navbarUl = document.getElementById("navbarUl");

let login = document.getElementById("login");

login.innerText = loggedInUser.name;
login.setAttribute("href", "#");

// creating logout:
let logoutLi = document.createElement("li");
logoutLi.style = "cursor:pointer";

let logoutAnchor = document.createElement("a");

logoutAnchor.innerText = "logout";

logoutLi.append(logoutAnchor);

navbarUl.append(logoutLi);

// making user logout:

function logoutUser() {
  let logOutUser = userData.map((ele) => {
    if (ele.isLoggedIn === true) {
      return {
        ...ele,
        isLoggedIn: false,
      };
    }
    return ele;
  });

  localStorage.setItem("userData", JSON.stringify(logOutUser));

  logoutAnchor.innerText = "";

  login.innerText = "login";
  login.setAttribute("href", "./login.html");
  window.location.href = "./index.html";
}

logoutLi.addEventListener("click", logoutUser);
