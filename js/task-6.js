function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const inputNumber = document.querySelector(".input");

const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", () => {
const countDiv = parseInt(inputNumber.value);

if (countDiv > 0 && countDiv <= 100) {
  createBoxes(countDiv);
  inputNumber.value = "";
}
  });

function createBoxes(amount) {
  let markup = "";
  let size = 30;
 
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  boxes.innerHTML = markup;
  
};

const destroyBtn = document.querySelector(".destroy-btn");
destroyBtn.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = "";
};
