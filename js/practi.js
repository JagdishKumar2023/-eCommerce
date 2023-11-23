let updateIsLoggedIn = (cheakUserData) => {
  let userData = JSON.parse(localStorage.get("userData"));
};

let loggedInUser = userData.map((ele, idx) => {
  if (cheakUserData.email === ele.email) {
    return {
      ...ele,
      isloggedIn: true,
    };
  }
  return ele;
});

let newupdateIsLoggedIn = (cheakUserData) => {
  let userData = JSON.parse(localStorage.getItem("userDaata"));
};

let newloggedInUser = userData.map((ele, idx) => {
  if (cheakUserData.email === ele.email) {
    return {
      ...ele,
      islogg,
    };
  }
});
