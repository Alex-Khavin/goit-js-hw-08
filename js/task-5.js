function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
colorBtn.addEventListener("click", changeColor);

const textColor = document.querySelector(".color");

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}


