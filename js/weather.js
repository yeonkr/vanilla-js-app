const API_KEY = "d1734c32b62f45c8893f66bf40815916"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)  // URL을 fetch하고 response를 받아야함. 
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:nth-child(2)")
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${Math.floor(data.main.temp)}˚C`;})




        // const city = document.querySelector("#weather span:last-child")
        // city.innerText = data.name;
        // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
}

function onGeoError() {
    alert("Can't find you. No weather for you.")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // 브라우저에서 위치 좌표를 줄 것임 
//getCurrentPosition (잘됏을때 실행할 함수, 에러가 발생할때 실행될 함수)
