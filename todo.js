
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "todos"; // Key //
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    } else {

    }
}

/*
Are you referring to the filter function's toDo? If you are, 
Then what you need to understand is that toDo argument is created by us. 
What filter will do is to call the function that we give it with the current item as a parameter.  
toDo could be named 'potato' and it will still work. 
Filter will put the current item inside of potato if that's how you name it.

*/

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();




 // To Do list 만들기 순서도
 //
 // [html]
 // 폼 생성(클라스 생성) -> 인풋 버튼 생성(placeholder 생성) -> 리스트 생성(클라스 생성) -> 자바 스크랩트 주소 링크
 // [JavaScript]
 // 경로설정 -> 이벤트함수 추가 -> li 와 button테그를 html에 추가하는 함수 생성 -> 
 // const(상수) 선언 : toDoForm, toDoInput, toDoList 경로 설정, TODOS_LS 생성 -> init(){} 생성, init() -> loadToDos(){}생성 -> 폼 변수에 eventListener추가, submit시 submitHandle함수 생성
 // const 선언 : li, span, delBtn -> span테 텍스트 추가, delBtn에 'x' 이모지추가 by appendChild함수
 // 
