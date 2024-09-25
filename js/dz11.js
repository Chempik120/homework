function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  };
const items =  ['Mango', 'Poly', 'Ajax'];
logItems(items);


function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');  
    const totalPrice = words.length * pricePerWord;  
    return totalPrice;
  };
  
  function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  };

  
  function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + '...';
    }
  };


  function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
      return true;
    }
    return false;
  };


  let numbers = [];
let total = 0;

while (true) {
  let input = prompt("Введіть число або натисніть Cancel для завершення:");
  if (input === null) {
    break;
  }
  let number = Number(input);
  if (!isNaN(number)) {
    numbers.push(number); 
  } else {
    alert("Введене значення не є числом. Спробуйте ще раз.");
  }
}
if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Ви не ввели жодного числа.");
};
