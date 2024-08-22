let option = 1;
let message = "";

switch (option){
    case 1:
        message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
        break;
        case 2:
            message = "Кур'єр доставить посилку завтра з 12:00 в нашому офісі";
            break;
            case 3:
                message = "Посилка буде відправлена сьогодні";
                break;
                default:
                    message = "Вам передзвонить менеджер";
};
console.log(message);

let stars = 1;
let price = "";

switch (stars){
    case 1:
        price = "20$";
        break;
        case 2:
            price = "30$";
            break;
            case 3:
                price = "50$";
                break;
                case 4:
                    price = "70$";
                    break;
                    case 5:
                        price = "120$";
                        break;
default:
    price = "Такої кількості зірок немає";                      
};
console.log(price);


const result = document.querySelector(".result");
const select = document.querySelector(".drink");

function onSelect(){
let resuult = "";

switch (select.value){
    case "coffee":
        resuult = "Coffee";
        break;
        case "tea":
            resuult = "Tea";
            break;
            case "juice":
                resuult = "Juice";
                break;
                default:
                    resuult = "None";
};

select.addEventListener('change', onSelect);

result.textContent = resuult;
}


const day = document.querySelector(".day");
const checkDay = document.querySelector(".checkDay");

function dayCheck(){
    switch (day.value){
        case "понеділок" || "вівторок" || "середа" || "четвер" || "п'ятниця":
            alert("Сьогодні робочий день");
            break;

            case "субота" || "неділя":
            alert("Сьогодні вихідний день");
            break;

            default:
                alert("Невідомий день тижня");
    };
};

checkDay.addEventListener("click", dayCheck);

const numberOf = document.querySelector(".numberOf");
const checkMonths = document.querySelector(".checkMonths");

function checkNumber(){
    switch(numberOf.value){
     case "1" || "2" || "12":
        alert("Зима");
        break;
        case "3" || "4" || "5":
            alert("Весна");
            break;
            case "6" || "7" || "8":
                alert("Літо");
                break;
                case "9" || "10" || "11":
                    alert("Осінь");
                    break;
                    default:
                        alert("Невідомий місяць");
    };
};

checkMonths.addEventListener("click", checkNumber);


const month = document.querySelector(".month");
const checkDays = document.querySelector(".checkDays");

function checkDaysNumber(){
    switch(month.value){
     case "1" || "3" || "5" || "7" || "8" || "10" || "12":
        alert("31 день");
        break;
        case "4" || "6" || "9" || "11":
            alert("30 днів");
            break;
            default:
               alert("Невідомий місяць");
    };
};

checkDays.addEventListener("click", checkDaysNumber);

const color = document.querySelector(".color");
const checkColor = document.querySelector(".checkColor");

function onColor(){
    switch(color.value){
     case "червоний":
        alert("стоп");
        break;
        case "зелений":
            alert("йти");
            break;
            case "жовтий":
            alert("чекати");
            break;
            default:
               alert("Невідомий колір");
    };
};

checkColor.addEventListener("click", onColor);

const numeral1 = document.querySelector(".numeral1");
const numeral2 = document.querySelector(".numeral2");
const operation = document.querySelector(".operation");
const doOp = document.querySelector(".do");


function onOperation(){
    const numberOne = Number(numeral1.value);
    const numberTwo = Number(numeral2.value);

    switch(operation.value){
       case "+":
        alert(numberOne + numberTwo);
        break;
        case "-":
        alert(numberOne - numberTwo);
        break;
        case "*":
        alert(numberOne * numberTwo);
        break;
        case "/":
        alert(numberOne / numberTwo);
        break;
        default:
            alert("Помилка");
    };
};

doOp.addEventListener("click", onOperation);