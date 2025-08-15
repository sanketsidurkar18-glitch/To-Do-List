let searchBox = document.querySelector("#searchBox");
let addTaskBtn = document.querySelector("#addBtn");
let taskContainer = document.querySelector(".taskContainer");
let pendingTask = document.querySelector(".pendingTask");
let pendingUl = document.querySelector(".pendingUl");
let completedTask = document.querySelector(".completedTask");
let completedUl = document.querySelector(".completedUl");
let pendingDeleteAll = document.querySelector(".pendingDeleteAll");
let completeDeleteAll = document.querySelector(".completeDeleteAll");

addTaskBtn.addEventListener("click", () => {
  if (searchBox.value != "") {
    taskContainer.classList.remove("d-none");
    pendingTask.classList.remove("d-none");

    // *List Create
    let pendingList = document.createElement("li");
    pendingUl.appendChild(pendingList);
    pendingList.classList.toggle("listitems");

    // *Div create inside the List
    let pendingDivCreate = document.createElement("div");
    pendingList.appendChild(pendingDivCreate);
    pendingDivCreate.classList.toggle("pendingText");

    // *add task inside the div
    pendingDivCreate.innerText = searchBox.value;
    searchBox.value = "";

    if (pendingUl.children.length > 1) {
      pendingDeleteAll.classList.remove("d-none"); // Hide pending task section
    } else {
      pendingDeleteAll.classList.add("d-none");
    }

    // *Create Btn div
    let = btnDiv = document.createElement("div");
    pendingList.appendChild(btnDiv);
    btnDiv.classList.toggle("listBtns");

    // *Add 'add' & 'delete' btn in Create Btn div
    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="bi bi-check-square-fill"></i>`;
    btnDiv.appendChild(checkBtn);
    checkBtn.classList.toggle("checkBtn");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    btnDiv.appendChild(deleteBtn);
    deleteBtn.classList.toggle("deleteBtn");

    // * delete Btn functioning
    deleteBtn.addEventListener("click", () => {
      pendingList.remove();

      if (pendingUl.children.length === 0) {
        pendingTask.classList.add("d-none"); // Hide pending task section
      } else if (pendingTask.children.length === 1) {
        pendingDeleteAll.remove();
      }
    });

    // * check Btn functioning
    checkBtn.addEventListener("click", () => {
      completedTask.classList.remove("d-none");

      // *List Create
      let completeList = document.createElement("li");
      completedUl.appendChild(completeList);
      completeList.classList.toggle("listitems");

      // *Div create inside the List
      let completeDivCreate = document.createElement("div");
      completeList.appendChild(completeDivCreate);
      completeDivCreate.classList.toggle("completeText");

      // *add completed task inside the completed div
      completeDivCreate.innerText = pendingDivCreate.innerHTML;
      pendingList.remove();

      if (pendingUl.children.length === 0) {
        pendingTask.classList.add("d-none");
        pendingDeleteAll.classList.add("d-none"); // Hide delete-all too
      } else if (pendingUl.children.length === 1) {
        pendingDeleteAll.classList.add("d-none");
      }

      if (completedUl.children.length > 1) {
        completeDeleteAll.classList.remove("d-none"); // Hide pending task section
      } else {
        completeDeleteAll.classList.add("d-none");
      }

      // *Create Btn div
      let = completebtnDiv = document.createElement("div");
      completeList.appendChild(completebtnDiv);
      completebtnDiv.classList.toggle("listBtns");

      let deleteBtnComplete = document.createElement("button");
      deleteBtnComplete.innerHTML = `<i class="bi bi-trash-fill"></i>`;
      completebtnDiv.appendChild(deleteBtnComplete);
      deleteBtnComplete.classList.toggle("deleteBtn");

      deleteBtnComplete.addEventListener("click", () => {
        completeList.remove();

        if (completedUl.children.length === 0) {
          completedTask.classList.add("d-none"); // Hide pending task section
          completeDeleteAll.classList.add("d-none");
        }
      });
    });

    pendingDeleteAll.addEventListener("click", () => {
      pendingList.remove();
      pendingTask.classList.add("d-none"); // Hide pending task section
    });

    completeDeleteAll.addEventListener("click", () => {
      completedUl.innerHTML = ""; // Remove all completed tasks
      completedTask.classList.add("d-none"); // Hide the section
    });
  } else {
    alert("Enter task");
  }
});
