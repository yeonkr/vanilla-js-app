const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"; // 중요한 정보를 담은게 아니라 대문자로 작성.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 
    // event object는 preventDefault함수를 기본적으로 갖고 있음
    loginForm.classList.add("HIDDEN_CLASSNAME"); // 폼 다시 숨김 
    const username = loginInput.value; // input 값을 username이라는 변수로 저장한 다음 
    localStorage.setItem("USERNAME_KEY", username); // 그 변수값을 localStorage에 username_key와 함께 저장
    paintGreetings() // paintGreetings함수 호출, input값을 인자로 넣음.
}

function paintGreetings(username) { //paintGreetings함수는 빈 h1에 "hello 이름" 이라는 텍스트 저장  
    greeting.innerText = `Hello ${username}`  // paintGreetings함수는 h1으로부터 "hidden"을 제거해 h1을 화면에 띄움
    // "Hello " + username과 같음. 둘다 스트링이랑 변수를 하나로 합쳐줌 
    // 만약 변수를 스트링안에 넣고 싶다면 ${변수명} 이렇게 표현하면 됨. ``기호로 시작할 것. 
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// loginForm.addEventListener("submit", onLoginSubmit); 
// link.addEventListener("click", handleLinkClick) // 함수 이름만 주고 실행하는건 JS의 몫.

// addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
// addEventListener의 함수에서 object에 대한 자리만 할당해주면
// 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

const savedUsername = localStorage.getItem("USERNAME_KEY") //존재여부 확인 

if(savedUsername === null) {
 // show the form
loginForm.classList.remove(HIDDEN_CLASSNAME) // loginForm으로부터 hidden classname 지움 
loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    // show the greetings
    paintGreetings(savedUsername)
}
