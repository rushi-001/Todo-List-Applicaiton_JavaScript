const submit = document.querySelector("#btnAddTodo");
const todoList = document.querySelector("#todoList");

submit.addEventListener("click", ()=>{
    const todo = document.querySelector("#inputTodo").value;  // we have to initialize todo here so it updates on evry submit

    if(todo !== ""){

        // todoList.innerHTML += "<li>" + todo + "</li>"; This is also an solution
        
        const li = document.createElement("li");  // creating new element "li"
        const btn = document.createElement("button");  // creating new element "button"
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        li.textContent = todo;
        btn.textContent = "DELETE";

        todoList.appendChild(checkbox);
        todoList.appendChild(li);  // appending the newly created li element to todoList to remove the unnecessary content
        todoList.appendChild(btn);

        btn.addEventListener("click", ()=>{
            todoList.removechile(checkbox);
            todoList.removeChild(li);
            todoList.removeChild(btn);
        })

        checkbox.addEventListener("change", ()=>{
            if (checkbox.checked) {
                console.log("checked");
            } else {
                console.log("not checked");
            }
        })
        


    } else {
        alert("Enter Todo!!!");
    }
})