"use strict";
// To do list function is only accessed when user is logged in
if (currentUser) {
  const toDoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputTask = document.getElementById("input-task");

  //==============================================Criteria 08  TO DO LIST==========================================================
  displayToDoList();
  //Funcion: Displays the Tasks of the current user.
  function displayToDoList() {
    let html = "";
    toDoArr
      .filter((toDo) => toDo.owner === currentUser.username)
      .forEach(function (toDo) {
        html += `
      <li class=${toDo.isDone ? "checked" : ""}>${
          toDo.task
        }<span class="close">×</span></li>`;
      });
    toDoList.innerHTML = html;

    toggleTask();
    deleteTask();
  }
  // Process when user click on button "add"
  btnAdd.addEventListener("click", function () {
    //check if task is inputted
    if (inputTask.value === "") {
      alert("Please fill in task");
    }
    // when task is inputted -> save to local storage -> update to do list
    else {
      const toDo = new Task(inputTask.value, currentUser.username, false);
      toDoArr.push(toDo);
      saveToStorage("toDoArr", JSON.stringify(toDoArr));
      displayToDoList();
      inputTask.value = "";
    }
  });

  //Function: When user click on a Task, Task is marked as complete or incomplete, this data is also updated to the corresponding LocalStorage.
  function toggleTask() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        if (e.target !== liEl.children[0]) {
          liEl.classList.toggle("checked");
          const toDo = toDoArr.find(
            (toDoItem) =>
              toDoItem.owner === currentUser.username &&
              toDoItem.task === liEl.textContent.slice(0, -1)
          );
          toDo.isDone = liEl.classList.contains("checked") ? true : false;
          saveToStorage("toDoArr", JSON.stringify(toDoArr));
        }
      });
    });
  }

  //Function: When clicking the Delete button next to the Tasks, delete the corresponding task from the list
  function deleteTask() {
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        const isDelete = confirm("You're deleting this task. Are you sure?");
        if (isDelete) {
          const index = toDoArr.findIndex(
            (item) =>
              item.owner === currentUser.username &&
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );

          toDoArr.splice(index, 1);
          saveToStorage("toDoArr", JSON.stringify(toDoArr));

          displayToDoList();
        }
      });
    });
  }
} else {
  alert("Please register/log in to see more");
  window.location.assign("../index.html");
}
