"use strict";
// Setting function is only accessed when user is logged in
if (currentUser) {
  const inputPageSize = document.getElementById("input-page-size");
  const inputCategory = document.getElementById("input-category");
  const btnSubmit = document.getElementById("btn-submit");
  //==============================================Criteria 09  CHANGE SETTING==========================================================
  //Process when user change setting. After saving, the News page is displayed according to the parameters entered.
  btnSubmit.addEventListener("click", function () {
    if (validate()) {
      currentUser.pageSize = Number.parseInt(inputPageSize.value);
      currentUser.category = inputCategory.value;
      saveToStorage("currentUser", JSON.stringify(currentUser));
      alert("Your setting is done ✔");
      window.location.assign("../pages/news.html");
    }
  });
  //Function: Validate data if user does not fill in.
  function validate() {
    if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
      alert("Please input Page size you want");
      return false;
    }

    if (!inputCategory.value) {
      alert("Please choose category which you're interested in");
    }
    return true;
  }
} else {
  alert("Please register/log in to see more");
  window.location.assign("../index.html");
}
