const modal = document.querySelector(".modal-but");
const backdrop = document.querySelector(".backdrop");
const background = document.querySelector(".modal-background");
const close = document.querySelector(".close-button");
const green = document.querySelector(".green");
const black = document.querySelector(".black");
const yellow = document.querySelector(".yellow");
const body = document.querySelector("body");
const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

modal.addEventListener("click", function (){
    background.style.display = "block";
    backdrop.style.display = "block";
});

close.addEventListener("click", function () {
    background.style.display = "none";
});

function onClickGreen(){
   body.style.background = "green";
};

function onClickBlack(){
    body.style.background = "black";
 };

 function onClickYellow(){
    body.style.background = "yellow";
 };

 green.addEventListener("click", onClickGreen);
 black.addEventListener("click", onClickBlack);
 yellow.addEventListener("click", onClickYellow);

 const getInputValue = ({ currentTarget }) => {
      nameRef.textContent = currentTarget.value.trim();  
  };
  
  inputRef.addEventListener('input', getInputValue);