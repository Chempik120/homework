const num = [1,2,3];
num[1] = 10;

console.log(num);


const str = ["Hi","My name","Is"];
str[3] = "Andrey";

console.log(str);


const numbers = [1,4,3,7,8,9,10,11];
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7]);


const number = [1,2,3,4,5];

for (let counter = 0; counter <= number.length; counter++) {
    console.log(counter);
};


let strings = ["Helloooo","Hi","I","Me","Sky"];

for (let o = 0; o < strings.length; o++ ) { 
if(strings[o].length > 5){
        console.log(strings[o]);
    }

};


const numbers2 = [1,5,32,35,4,77,82,81];

let maxNumber = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > maxNumber) {
        maxNumber = numbers2[i];
    }
};
console.log(maxNumber);

const numbers3 = [1,2,8,3,12,18,19,33,77,55,52];

for (let c = 0; c < numbers3.length; c++){
    if (numbers3[c] % 2 === 0){
        console.log(numbers3[c])
    }
};