const button = document.querySelector(".textField");
const input = document.querySelector(".button");

const inputValue = button.value;
input.textContent = inputValue;

const picture = document.querySelector(".image");
picture.src = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg";


const link = document.querySelector(".link");
const image = document.querySelector(".image2");

link.href = "https://github.com/IronHedgehog/FE_1y_12_23_JS/blob/04-DOM/js/index.js";
image.alt = "HELLO";


const list = document.querySelector(".list");

list.firstChild.textContent = "Privet";