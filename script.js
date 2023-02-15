let todoValue = document.getElementById("newTodoInput");
let btn = document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList");

function addTodo()
{
	if(todoValue.value)
	{
		let li = document.createElement("li");
		li.textContent = todoValue.value;
		ol.appendChild(li);
		todoValue.value = "";
	}
}
btn.addEventListener("click",addTodo);