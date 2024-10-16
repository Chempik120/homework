const plusMoney = document.querySelector(".plusMoney");
const gotMoney = document.querySelector(".gotMoney");
const plusButton = document.querySelector(".plusButton");
const gotButton = document.querySelector(".gotButton");
const weatherCheck = document.querySelector(".weatherCheck");
const ratingCheck = document.querySelector(".ratingCheck");



const bankAccount = {
    ownerName : "Andrey",
    accountNumber : "12312312314",
    balance : 370,
    deposit: function(money){
     bankAccount.balance = Number.parseFloat(bankAccount.balance) + Number.parseFloat(plusMoney.value) + "$";
     console.log('Your balance', bankAccount.balance);
    }
};

plusButton.addEventListener("click" , bankAccount.deposit);



const weather = {
    temperature: 25,
    humidity:"",
    windSpeed:"20 km/ph",
    tempMessage: function(){
        const temp = prompt("Введіть температуру");
        if(temp < 0){
           alert("Температура нижча 0 градусів Цельсія")
        } else if(temp >= 0) {
         alert("Температура вища за 0 градусів Цельсія")
        }
    }
}

weatherCheck.addEventListener("click", weather.tempMessage);

const movie = {
    title:"Movie",
    director:"Andrew",
    year:"2017",
    rating: 9 ,
    checkRating: function(){
        if(this.rating >= 8){
            console.log("true")
        } else if(this.rating < 8){
            console.log("false")
        };
        console.log(movie.title,movie.director,movie.year,movie.rating);
    }
};

ratingCheck.addEventListener("click", movie.checkRating);