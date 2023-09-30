"use strict";
//==============================================Criteria 03  LOGIN==========================================================

let activeUser;

// Get data from input form when user click on button "Login"
btnSubmit.addEventListener("click", function () {
  let userLogin = {
    username: inputUserName.value,
    password: inputPassword.value,
  };

  //If data is validated -> save to local storage -> Go to HomePage
  const validate = validateData(userLogin);
  if (validate) {
    userLogin = activeUser;
    saveToStorage("currentUser", JSON.stringify(userLogin));
    alert(`😍 Welcome ${userLogin.username} 😍`);
    window.location.assign("../index.html");
  }
});

//Validata input data
function validateData(data) {
  //Check if Username has been inputted
  if (data.username === "") {
    alert("Please input Username! 😧");
    inputUserName.focus();
    return false;
  }

  //Check if Username has already been registered
  let activeName = false;
  for (let i = 0; i < userArr.length; i++) {
    if (data.username === userArr[i].username) {
      activeUser = userArr[i];
      activeName = true;
    }
  }
  if (!activeName) {
    alert("This Username does not exit. Please register! 😧");
    inputUserName.value = "";
    return false;
  }

  //Check if Password has been inputted
  if (data.password === "") {
    alert("Please input password! 😧");
    inputPassword.focus();
    return false;
  }

  ////Check if Password is correct
  if (data.password !== activeUser.password) {
    alert("Wrong password. Try again! 😖");
    return false;
  }
  return true;
}
