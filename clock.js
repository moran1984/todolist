/* String(문자)
    const name = "Yun Sangjin";
*/

/*  Boolean(참, 거짓)
    const gender = true;
*/

/* Numbers(숫자)
    const age = 35;
*/

/* Float(숫자, 소수점 포함)
    const wat = 55.4;
*/


/* array & object : 배열, 데이터를 저장하는 곳
camel Case = 등이 구불구불
lower로 시작해서 스페이스 대신 대문자를 써주고 다른 스페이스가 필요하면 다시 대문자를 써줌
    const daysOfWeek = 


const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

/*  해당 변수들을 출력하는것이 굉장히 비효율적.
    따라서 배열(array)를 활용


const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(daysOfWeek); //배열 전체 출력
console.log(daysOfWeek[2]) //특정 데이타(배열의) 출력

/* Object(객체)
    배열과 객체의 차이점 : 객체는 각  value(값)에 Label(이름)을 줄 수 있음


const nicoInfoByArray = ["Nicolas", "55", true, "Seoul"];
console.log(nicoInfoByArray);
const nicoInfoByObject = {
    name : "Nico",
    age : 33,
    gender : "Male",
    isHansome:true,
    favMovies : ["Along the gods", "LOTR", "Oldboy"], // 객체 안에 배열
    favFood : [
        {name : "Kimch", fatty: false},  // 객체 안에 객체
        {name : "Cheese burger", fatty : true}]
}
console.log(nicoInfoByObject);
console.log(nicoInfoByObject.name);

console.log(nicoInfoByObject.gender);
nicoInfoByObject.gender = "Female";
console.log(nicoInfoByObject.gender);
nicoInfoByObject.gender = "Male";

function sayHello1(potato, babo){
    console.log('Hello', potato, ', you are', babo, 'years of old.');
}
sayHello1('Nicolas', 30);

function sayHello2(name, age){
    console.log(`Hello ${name}, you are ${age} years old.`);
}
sayHello2('Nicolas', 35);

function sayHello3(name,age){
    return `Hello ${name}, you are ${age} years old.`
}
greetNicolas = sayHello3('Nicolas', 40);
console.log(greetNicolas);

/*
const calculator = {
    plus : function (a, b){
        return a + b;
    }
}

const plus = calculator.plus(5,5);
console.log(plus);

// console.log(greetNicolas);
// calculator.plus(5, 5);


const calculatorPlus = {
    plus : function(a,b){
        return a + b;
    }
}
const Plus = calculatorPlus.plus(20,50);
console.log(Plus);


const calculatorMinus = {
    minus : function(a,b){
        return a - b;
    }
}
const Minus = calculatorMinus.minus(20,50);
console.log(Minus);


const calculatorMultiplication = {
    multiplication : function(a,b){
        return a * b;
    }
}
const Multiplication = calculatorMultiplication.multiplication(20,50);
console.log(Multiplication);

const calculatorDivision = {
    division : function(a,b){
        return a/b;
    }
}
const Division = calculatorDivision.division(20,50);
console.log(Division);

const calculatorSquareRoot = {
    squareroot : function(a,b){
        return a**b, a/b;
    }
}
const SquareRoot = calculatorSquareRoot.squareroot(20,50);
console.log(SquareRoot);


const calculator = {
    Plus : function (a,b){
        return a+b;
    },
    Minus : function (a,b){
        return a-b;
    },
    Multiplication : function(a,b){
        return a*b;
    },
    Division : function(a,b){
        return a/b;
    },
    Pow : function(a,b){
        return Math.pow(a,b);
    }
}
const plus = calculator.Plus(5,5);
console.log(plus);

const minus = calculator.Minus(5,5);
console.log(minus);

const multiplication = calculator.Multiplication(5,5);
console.log(multiplication);

const division = calculator.Division(5,5);
console.log(division);

const pow = calculator.Pow(5,5); 
console.log(pow);

const resultView = `
    Plus: ${plus}
    Minus: ${minus}
    Multiplication: ${multiplication}
    Division: ${division}
    Pow: ${pow}
`

console.log(resultView);

console.log(`${plus}, ${minus}, ${multiplication}, ${division}, ${pow}`);

/*
const titleOfHead = document.getElementById("title");
titleOfHead.innerHTML = "I am king of the world."
titleOfHead.style.color = "red";
document.title = "I own you"
console.dir(document);
*/


/*
if("10" === 10){
    console.log("hi");
}
else if("10" === "11"){
    console.log("lalala");
}
else {
    console.log("ho");
}

if(20>5 && "nicolas" === "nicolas"){
    console.log("true");
}
else {
    console.log("false");
}

if(20>5 || "nicolas" === "nicolas"){
    console.log("true");
}
else {
    console.log("false");
}

const age = prompt("how old are you ?");

if(age >= 18 && age <= 21){
    console.log("You can drink but you should not");
}
else if(age > 21){
    console.log("Go ahead");
}

else {
    console.log("You can't drink")
}
*/
/*
const headOne = document.querySelector(".title");
const BASE_COLOR = "rgb(45, 52, 54)";
const OTHER_COLOR = "rgb(178, 190, 195)";

function clickHandle(){
    const currentColor = headOne.style.color;
    if(currentColor === BASE_COLOR){
        headOne.style.color = OTHER_COLOR;
    }
    else {
        headOne.style.color = BASE_COLOR;
    }
}

function init(){
    headOne.style.color = BASE_COLOR;
    headOne.addEventListener("click", clickHandle);
}

init();
*/

/*
const title = document.querySelector(".title"); //클라스임, id 아님
const BASE_COLOR = "blue";
const OTHER_COLOR = "red";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/






/*

function handleOffline(){
    console.log("Bye Bye");
}

function handleOnline(){
    console.log("Welcome")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "tomato";
}

title.addEventListener("click", handleClick);
*/

/*
const headOne = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    headOne.classList.toggle(CLICKED_CLASS);
    }

function init(){
    headOne.addEventListener("click", handleClick);
}

init();
*/

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
   const date = new Date();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   clockTitle.innerText = 
   `${
       hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
