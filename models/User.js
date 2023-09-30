"use strict";
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");
const btnLogOut = document.getElementById("btn-logout");

//=========================================Criteria 01 CLASS CREATION=======================================================

class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    //For setting function-Criteria 09
    //Default setting : PageSize: 10, category: General
    pageSize = 10,
    category = "general"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.pageSize = pageSize;
    this.category = category;
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
