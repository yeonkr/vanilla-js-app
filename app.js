// #2.14 
// isNaN 은 무언가가 NaN인지 판별하는 방법
const age= parseInt(prompt("How old are you?"));
console.log(isNaN(age));
// 숫자입력하면 false = age가 number라는 뜻.
// 글자입력하면 ture 

if(condition){
// 실행코드=true ---실행
// 실행코드=false ----다음 else 값 실행
} else{

}
// condition은 boolean으로 판별가능해야 한다, (true , false)

if(isNaN(age) || age < 0) {
    console.log("please write a number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <=80) {
    console.log("You should exercise");
} else if(age > 80 ) {
    console.log("You cna do whatever you want.")
}

// #2.15
// && and 둘 다 true이면 true
// || or 둘 중 하나만이라도 true이면 true

// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false

//--------------------------------------------//
// #3 AVASCRIPT ON THE BROWSER

const title = document.getElementById("title");

title.innerText = "Got you"

console.log(title.id);
console.log(title.className);


