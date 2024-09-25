const  friends = ['Andrey', 'Egor', 'Vlad'];
let string = friends.join(",");
console.log(string);

for (let cont = 0; cont <= friends.length; cont++) {
    if(cont < 3){
        console.log(friends[0] + "," + friends[1] + "," + friends[2]);
    }
};

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const remove = cards.splice(cards.indexOf("Карточка-3"),1);
console.log(remove);
console.log(cards);

const plus = cards[5] = "Карточка-6";
console.log(cards);

cards.splice(4,1, "Карточка-9");
console.log(cards);

