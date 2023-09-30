"use strict";
//Function Creation for Save/Get data to/from Storage
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key) {
  return localStorage.getItem(key);
}

const userArr = JSON.parse(getFromStorage("userArr")) || [];
let currentUser = JSON.parse(
  getFromStorage("currentUser") ? getFromStorage("currentUser") : null
);

const toDoArr = JSON.parse(getFromStorage("toDoArr")) || [];

function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );
  return user;
}
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}
