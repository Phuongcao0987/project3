"use strict";
const logInModel = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
//=========================================Criteria 04   HOME PAGE INTERFACE =========================================================
//The interface displayed first when user accesses the application
displayHome();

//Function for changing interface mode
function displayHome() {
  //The interface when user is logged in
  if (currentUser) {
    logInModel.style.display = "none";
    mainContent.style.display = "block";
    welcomeMessage.textContent = `Welcome ${currentUser.firstName}`;
  }
  //The interface when user is not logged in
  else {
    logInModel.style.display = "block";
    mainContent.style.display = "none";
  }
}

//=========================================Criteria 05   LOGOUT  ====================================================================
// Log out when user click on button "Logout"
btnLogOut.addEventListener("click", function () {
  const isLogOut = confirm("You're logging out. Are you sure?");
  if (isLogOut) {
    console.log(currentUser);
    currentUser = null;
    saveToStorage("currentUser", currentUser);
    displayHome();
  }
});
