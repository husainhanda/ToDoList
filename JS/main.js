const todoIn=document.querySelector(".todo-input"),toDoBttn=document.querySelector(".todo-btn"),taskList=document.querySelector(".todo-list"),stdTheme=document.querySelector(".standard-theme"),liteTheme=document.querySelector(".light-theme"),darkTheme=document.querySelector(".darker-theme");

toDoBttn.addEventListener("click",addToDo),taskList.addEventListener("click",deletecheck),document.addEventListener("DOMContentLoaded",getTodos),stdTheme.addEventListener("click",()=>changeTheme("standard")),liteTheme.addEventListener("click",()=>changeTheme("light")),darkTheme.addEventListener("click",()=>changeTheme("darker"));let savedTheme=localStorage.getItem("savedTheme");

function addToDo(e){e.preventDefault();const t=document.createElement("div");t.classList.add("todo",`${savedTheme}-todo`);const o=document.createElement("li");if(""===todoIn.value)alert("You must write something!");else{o.innerText=todoIn.value,o.classList.add("todo-item"),t.appendChild(o),savelocal(todoIn.value);const e=document.createElement("button");e.innerHTML='<i class="fas fa-check"></i>',e.classList.add("check-btn",`${savedTheme}-button`),t.appendChild(e);const a=document.createElement("button");a.innerHTML='<i class="fas fa-trash"></i>',a.classList.add("delete-btn",`${savedTheme}-button`),t.appendChild(a),taskList.appendChild(t),todoIn.value=""}}function deletecheck(e){const t=e.target;"delete-btn"===t.classList[0]&&(t.parentElement.classList.add("fall"),removeLocalTodos(t.parentElement),t.parentElement.addEventListener("transitionend",function(){t.parentElement.remove()})),"check-btn"===t.classList[0]&&t.parentElement.classList.toggle("completed")}function savelocal(e){let t;(t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"))).push(e),localStorage.setItem("todos",JSON.stringify(t))}function getTodos(){let e;(e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"))).forEach(function(e){const t=document.createElement("div");t.classList.add("todo",`${savedTheme}-todo`);const o=document.createElement("li");o.innerText=e,o.classList.add("todo-item"),t.appendChild(o);const a=document.createElement("button");a.innerHTML='<i class="fas fa-check"></i>',a.classList.add("check-btn",`${savedTheme}-button`),t.appendChild(a);const n=document.createElement("button");n.innerHTML='<i class="fas fa-trash"></i>',n.classList.add("delete-btn",`${savedTheme}-button`),t.appendChild(n),taskList.appendChild(t)})}function removeLocalTodos(e){let t;const o=(t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"))).indexOf(e.children[0].innerText);t.splice(o,1),localStorage.setItem("todos",JSON.stringify(t))}function changeTheme(e){localStorage.setItem("savedTheme",e),savedTheme=localStorage.getItem("savedTheme"),document.body.className=e,"darker"===e?document.getElementById("title").classList.add("darker-title"):document.getElementById("title").classList.remove("darker-title"),document.querySelector("input").className=`${e}-input`,document.querySelectorAll(".todo").forEach(t=>{Array.from(t.classList).some(e=>"completed"===e)?t.className=`todo ${e}-todo completed`:t.className=`todo ${e}-todo`}),document.querySelectorAll("button").forEach(t=>{Array.from(t.classList).some(o=>{"check-btn"===o?t.className=`check-btn ${e}-button`:"delete-btn"===o?t.className=`delete-btn ${e}-button`:"todo-btn"===o&&(t.className=`todo-btn ${e}-button`)})})}changeTheme(null===savedTheme?"standard":localStorage.getItem("savedTheme"));
