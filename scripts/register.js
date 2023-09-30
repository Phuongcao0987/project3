"use strict";

//==============================================Criteria 02  REGISTER ==========================================================
// Get data from input form when user click on button "Register"
btnSubmit.addEventListener("click", function () {
  const userData = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value
  );

  //If data is validated -> save to local storage -> Go to login screen
  const validate = validateData(userData);
  if (validate) {
    userArr.push(userData);
    saveToStorage("userArr", JSON.stringify(userArr));
    alert("Register Successful!");
    window.location.assign("../pages/login.html");
  }
});

//Validate input data function
function validateData(data) {
  //check if user name is already existed
  for (let i = 0; i < userArr.length; i++) {
    if (data.username === userArr[i].username) {
      alert("This Username has already been used. Input new one please!");
      inputUserName.focus();
      return false;
    }
  }
  //Check if First name has been inputted
  if (!data.firstName) {
    alert("Please input Your First Name!");
    inputFirstName.focus();
    return false;
  }
  //Check if Last name has been inputted
  if (!data.lastName) {
    alert("Please input Your Last Name!");
    inputLastName.focus();
    return false;
  }
  //Check if Last name has been inputted
  if (!data.username) {
    alert("Please input Your User Name!");
    inputUserName.focus();
    return false;
  }
  //Check if Password has been inputted
  if (!data.password) {
    alert("Please input password!");
    inputPassword.focus();
    return false;
  }
  //Check if Password has more than 8 letters
  if (data.password.length <= 8) {
    alert("You must set Password to have at least 9 letters");
    inputPassword.focus();
    return false;
  }
  //Check if Password Confirm has been inputted
  if (!inputPasswordConfirm.value) {
    alert("Please Confirm password!");
    inputPasswordConfirm.focus();
    return false;
  }
  //Check if Password Confirm are correct
  if (data.password !== inputPasswordConfirm.value) {
    alert("Confirm password wrong. Try again");
    inputPasswordConfirm.focus();
    return false;
  }
  return true;
}
