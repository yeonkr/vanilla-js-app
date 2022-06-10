
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

// 이미지 랜덤으로 가져옴
const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS에서 이미지를 만들고, 이걸 html에 추가
const bgImage = document.createElement("img"); // createElement(" ") JS에서 html 요소를 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appendChild()는 body에 html을 추가함.
