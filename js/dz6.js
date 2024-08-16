const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".check");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const plus = document.querySelector(".plus");
const field = document.querySelector(".field");
const submit = document.querySelector(".submit");
const total = document.querySelector(".total");
const checkTotal = document.querySelector(".checkTotal");
const email = document.querySelector(".email");
const checkEmail = document.querySelector(".checkEmail");



function onClick(){
    const symbols1 = input1.value.length;
    const symbols2 = input2.value.length;
    if (symbols1 && symbols2 > 1){
        alert("Обидва поля заповнені")
      } else{
          alert("Не всі поля заповнені")
      };
      
};

button.addEventListener("click", onClick);



function onCheck(){
    
    if (Number(number1.value) + Number(number2.value) > 10){
        alert("Сума більша за 10")
    } else{
        alert("Сума меньша або дорівнює 10")
    }
};

plus.addEventListener("click", onCheck);


function onSubmit(){
    if (field.value.includes("JavaScript")){
        alert("Текст містить слово")
    } else{
        alert("Текст не містить слово")
    }
};

submit.addEventListener("click", onSubmit);


function check(){
  if ( Number(total.value) < 20 && Number(total.value) > 10){
    alert("Число входить в діапазон від 10 до 20")
  } else {
    alert("Число не входить в діапазон від 10 до 20")
  }
};

checkTotal.addEventListener("click", check);


function emailCheck(){
    if (email.value.includes("@" , ".") && email.value.length > 6){
        window.location.href = 'https://www.google.com/search?client=opera-gx&q=гугл&sourceid=opera&ie=UTF-8&oe=UTF-8';
    } else {
        alert("Помилка")
    }
};

checkEmail.addEventListener("click", emailCheck);