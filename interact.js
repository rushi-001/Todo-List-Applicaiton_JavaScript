const submit = document.querySelector("#btnAddTodo");
const todoList = document.querySelector("#todoList");
const displayTodos = document.querySelector(".todos");

submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior or prevent from refrashing automaticaly
  const todo = document.querySelector("#inputTodo").value; // we have to initialize todo here so it updates on evry submit

  function todoDiv(todon) {
    const todo = todon;
    const text = document.createElement("h4");
    const btnDelete = document.createElement("button");
    const checkbox = document.createElement("input");
    const div = document.createElement("div");
    div.className = "todoList";
    div.classList = "todoList";
    checkbox.type = "checkbox";

    text.innerText = todo;
    btnDelete.innerText = "DELETE";

    // style the text, button and checkbox
    text.classList.add("text");
    checkbox.classList.add("checkbox");
    btnDelete.classList.add("btnDelete");

    // important part of the code but i did't get it properly....
    // its like appendChild makes div and put the elements in the div and we append that div into the todoList div i guess

    // Append elements to the div, not directly to the todoList
    div.appendChild(checkbox);
    div.appendChild(text);
    div.appendChild(btnDelete);

    // Append the div to the todoList
    todoList.appendChild(div);

    btnDelete.addEventListener("click", (e) => {
      const confirm1 = confirm("Do you want to Delete ?");

      if (confirm1 == true) {
        e.target.parentNode.remove(); // this will remove the div which have delete button inside
      }
    });

    document.querySelector("#inputTodo").value = "";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // console.log("checked");
        text.classList.add("done");
      } else {
        // console.log("not checked");
        text.classList.remove("done");
      }
    });
  }

  if (todo !== "") {
    todoDiv(todo);
  } else {
    alert("Enter Todo!!!");
  }
});
