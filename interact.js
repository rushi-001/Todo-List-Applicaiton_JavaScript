const submit = document.querySelector("#btnAddTodo");
const todoList = document.querySelector("#todoList");
const displayTodos = document.querySelector(".todos");

submit.addEventListener("click", (e)=>{
    e.preventDefault(); // Prevent default form submission behavior or prevent from refrashing automaticaly
    const todo = document.querySelector("#inputTodo").value;  // we have to initialize todo here so it updates on evry submit

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

        // important part of the code but i did't get it properly....
        // its like appendChild makes div and put the elements in the div and we append that div into the todoList div i guess

        // Append elements to the div, not directly to the todoList
        div.appendChild(checkbox);
        div.appendChild(text);
        div.appendChild(btnDelete);

        // Append the div to the todoList
        todoList.appendChild(div);

        btnDelete.addEventListener("click", (e)=>{
            e.target.parentNode.remove(); // this will remove the div which have delete button inside
        })

        document.querySelector("#inputTodo").value = "";

        checkbox.addEventListener("change", ()=>{
            if (checkbox.checked) {
                // console.log("checked");
                text.classList.add("done");
            } else {
                // console.log("not checked");
                text.classList.remove("done");

            }
        })
        
    }

    if(todo !== ""){

        // todoList.innerHTML += "<li>" + todo + "</li>"; This is also an solution
        
        // let ol = document.createElement("ol");  // creating new element "li"
        // const text = document.createElement("h3");
        // const btn = document.createElement("button");  // creating new element "button"
        // const checkbox = document.createElement("input");
        // const br = document.createElement("br");
        // checkbox.type = "checkbox";

        // // ol.textContent = todo;
        // text.textContent = todo;
        // ol.classList.add("olColor");
        // btn.textContent = "DELETE";

        // displayTodos.appendChild(checkbox);
        // displayTodos.appendChild(text);  // appending the newly created li element to todoList to remove the unnecessary content
        // displayTodos.appendChild(btn);
        // displayTodos.appendChild(br);

        // document.querySelector("#inputTodo").value = "";

        // btn.addEventListener("click", ()=>{
        //     displayTodos.removeChild(checkbox);
        //     displayTodos.removeChild(text);
        //     displayTodos.removeChild(btn);
        //     displayTodos.removeChild(br);

        // })
        
        todoDiv(todo);

    } else {
        alert("Enter Todo!!!");
    }
})