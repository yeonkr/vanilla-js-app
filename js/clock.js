const clock = document.querySelector("h2#clock");

function getClock() {
    const date= new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock() // 이걸 한번 실행한후 밑의 코드 실행
setInterval(getClock, 1000) // 호출하려는 함수의 이름, 기다리는 시간 두 매개변수를 받음. // 해당 펑션을 n초마다 반복한다는 의미
//setTimeout(sayHello, 5000) // 5초 기다렸다가 한번만 실행.