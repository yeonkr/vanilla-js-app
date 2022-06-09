/* #3.2 
- getElementsByClassName() : 배열 
- getElementsByTagName() : 배열
- getElementById() : 하나의 값
위에서 id 빼고는 배열을 가져오기 때문에 title.innerText 는 사용할 수 없다.
Id를 가진 태그의 하위 태그를 선택하고 싶을 때 위의 방법으로는 한계가 있다.

이때 사용하는 게 querySelector/querySelectorAll
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. .hello h1:first-child)
단 하나의 element를 return해줌
⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
const title = document.querySelector(".hellos h1"); 와 같이 쓰면
.hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다
*/

/* #3.3
javascript가 document로 html을 불러올 수 있고 수정 추가도 가능하다

- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
- element의 내부를 보고 싶으면 console.dir()
기본적으로 object로 표시한 element를 보여줌(전부 js object임)
그 element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것
모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
title.style.color = "blue";
}
title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
    // toggle : h1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면 토글은 clicked를 제거한다.
    // 만약 h1의 classList에 clicked class가 이미 존재하지 않는다면 토글은 clicked를 classList에 추가해준다.
    
    // 토글 한 줄이 이 밑의 코드들과 같음.
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
}
// classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
// className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"; 
}
/* document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);
*/
function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}
h1.addEventListener("click", handleTitleClick) // 클릭 이벤트가 발생하면 handleTitleClick 함수가 동작
// 유저가 타이틀을 클릭할 경우 자스가 나 대신 실행버튼을 눌러주게 함.
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/* #3.5
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.
*/