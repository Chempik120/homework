const age = 16;

console.log(age);

const name = "Andrey";

console.log(name);

const isStudent = true;

console.log(isStudent);

const myString = "Привіт";

console.log(myString);

const myNumber = 1700;
myNumber + 10;

console.log(myNumber);

const myNull = null;

console.log(myNull);


const yourName = prompt("Введіть ваше ім'я");

alert(`Привіт,` + yourName);

const conf = confirm("Підтвердіть дію");

if (conf == true){
    x = "Дякую за підтвердження!"
} else {
    x = "Дію відмінено!"
};

alert(x);

alert("Увага! Ця дія може бути небезпечною.");

const userConfirmed = confirm("Ви впевнені, що хочете продовжити?");

if (userConfirmed) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
