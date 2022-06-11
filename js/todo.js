const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
const toDos = []; // toDo에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈 array를 생성

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)) // toDos array를 localSotrage에 집어넣고 대입한 값을 알아서 string의 형태로 저장한다. ["a","b","c"]
}

function deleteToDo(event) {
    const li = event.target.parentElement // 버튼의 부모에 접근
    li.remove();
}

function paintToDo(newTodo) { // handleToDoSubmit 함수가 이 paintToDo를 사용할 것.
    const li = document.createElement("li") 
    const span = document.createElement("span")
    span.innerText = newTodo; // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 됨.
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo) // click --> deleteToDo함수가 실행

    li.appendChild(span) // // li는 span이라는 자식을 갖게 됨
    li.appendChild(button) 
    toDoList.appendChild(li)
}
function handleToDoSubmit(event) {
    event.preventDefault(); // 기본값을 없애줌. 
    const newTodo = toDoInput.value; // text상자에 사용자가 입력한 텍스트를 저장해야 나중에 ul태그 안에 사용할 수 있기 때문에 이를 정의하여 newTodo라는 값에 저장되게 만듦
    toDoInput.value = ""; // text 상자에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해 value를 빈 텍스트로 한다.
    toDos.push(newTodo) // newTodo를 toDos array에 push한 다음
    paintToDo(newTodo); // 화면에 그 toDo를 그려줌
    saveToDos(); // 그리고 그 toDo를 저장함 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item)
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // loclaStorage에서 가져온 string이 JS object로 변하게 함 ex)"[a,b,c,d]" (string) => [a, b, c, d] (array);
    parsedToDos.forEach(sayHello);
}

/* 정리 
local storage에 array로 저장이 안 되기 때문에 
JSON.stringify로 array처럼 생긴 string으로 저장한 후 
다시 JSON.parse 이용해 array로 꺼내는 방법
 */
