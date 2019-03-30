/*

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();    // He/She is not
    } else {
        paintGreeting(currentUser); //He is / She is
    }
}

function init(){
    loadName();
}

init();




 목표 : 사이트에 이름 입력 칸 생성, 저장, 리프레시 후에도 계속 이름 기억하게 하기.
 html에 이름입력 칸 생성(form 안에 input 태그, 클라스 생성), 이름입력후에는 값을 리턴하는 태그(h4)생성 및 클라스 생성
 css에서 이름입력 칸을 'none' 또는 'block' 형태로 display 할것
 !! js에서 할일 !!

    &&  변수 설정
        querySelector를 통해 html에서 변경할 tag, class 경로 설정 (form, input, greeting)
        USER_LS & SHOWING_CN 변수 설정

    1. 실행(init)함수 생성;
    2. 실행(init)안에 실행시킬 함수(loadName)삽입;
    3. 실행시킬 함수(loadName) :
       - 만약에 currentUser값이 없다면(null), 이름을 묻는 함수 실행(askForName)하고,
       - currentUser값이 있다면, [h4]태그에 "Hello UserName"이 나오도록 css을 바꾸고 텍스트를 삽입하는 함수 실행
           * askForName함수에는 이름이 무엇인지 묻는 창이 보이게 설정하고, 이름 제출시 'handleSubmit함수'가 발동하도록 이벤트리스너 추가
           * paintGreeting함수에는 form 객체에 showing 클라스 삭제, greeting 클라스에 showing 클라스 추가, greeting 클라스에 innerText 추가 "Hello xxx";
           * handleSubmit함수에는 이벤트 초기화 방지 함수(코드)삽입, 현재값을 input.value로 변수지정, paintGreeting함수에 currentValue를 argument로 지정, saveName함수에 currentValue를 argument로 설정
           * saveName함수에 localStorage.setItem 함수의 저장할 property와 값을 지정
        
            $$ workFlow $$ 
                html :  form 태그 삽입(클라스 지정), form태그내 input태그 삽입 : 사용자의 입력값을 받는 공간 생성하는 액할
                        h4태그 삽입 : 사용자가 입력한 값을 이 태그에 삽입시켜 보여주는 역할
                css : 표시할(display)할 코드 생성 . display : none / display : block, 이 코드를 html내 form 태그 와 h4 태그 클라스에 포함시켜 보여줄것과 보여주지 않을것을 정함
                JS : 실행 함수(init) -> loadName함수(if문에 의한 2가지 조건문 발동) -> 1.askForName함수 -> handleSubmit함수  ->saveName 함수
                                                                           -> 2.paintGreeting함수

                                                                        
*/


const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentName",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = 
    `Hello ${text}.
     May the Load will bless your day.😃`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();