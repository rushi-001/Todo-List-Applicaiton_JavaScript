const submit = document.querySelector("#btnAddTodo");
const todoList = document.querySelector("#todoList");
const displayTodos = document.querySelector("#todos");

submit.addEventListener("click", (e)=>{
    e.preventDefault(); // Prevent default form submission behavior or prevent from refrashing automaticaly
    const todo = document.querySelector("#inputTodo").value;  // we have to initialize todo here so it updates on evry submit

    function newUl(todoss){
        // create new ul, insite ul create new ol
        // put content inside the ol
    
        let ul = document.createElement("ul");
        let ol = document.createElement("ol");

        ol.innerText = todoss;
        ul.innerHTML = ul;

        displayTodos.appendChild(ol);
        
        console.log("run");
        
    }

    if(todo !== ""){

        // todoList.innerHTML += "<li>" + todo + "</li>"; This is also an solution
        
        let ol = document.createElement("ol");  // creating new element "li"
        const btn = document.createElement("button");  // creating new element "button"
        const checkbox = document.createElement("input");
        const br = document.createElement("br");
        checkbox.type = "checkbox";
        // const newUL = newUl();

        ol.textContent = todo;
        btn.textContent = "DELETE";

        todoList.appendChild(checkbox);
        // todoList.appendChild(ol);  // appending the newly created li element to todoList to remove the unnecessary content
        newUl(todo);
        todoList.appendChild(btn);
        todoList.appendChild(br);

        document.querySelector("#inputTodo").value = "";

        btn.addEventListener("click", ()=>{
            todoList.removeChild(checkbox);
            // todoList.removeChild(ol);

            todoList.removeChild(btn);
            todoList.removeChild(br);

        })

        checkbox.addEventListener("change", ()=>{
            if (checkbox.checked) {
                // console.log("checked");
                ol.classList.add("done");
            } else {
                // console.log("not checked");
                ol.classList.remove("done");

            }
        })
        


    } else {
        alert("Enter Todo!!!");
    }
})