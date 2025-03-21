
  const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];

  const getInactiveUsers = users => {
    const activeUsers = users.filter((users)=>{ return users.isActive === false;});
  
    return activeUsers
  };



console.log(getInactiveUsers(users));

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));


const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));


const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

console.log(getUserWithEmail(users, 'elmahead@omatom.com'));


const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));


const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users));



const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker'));

console.log(getUsersWithFriend(users, 'Goldie Gentry'));

const getNamesSortedByFriendsCount = users => users.slice().sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));


const getSortedUniqueSkills = users => [...new Set(users.flatMap(user => user.skills))].sort();

console.log(getSortedUniqueSkills(users));

const getNames = userList => userList.map(person => person.name);
console.log(getNames(users));

const getUsersByEyeColor = (userList, eyeColor) => userList.filter(person => person.eyeColor === eyeColor);
console.log(getUsersByEyeColor(users, 'blue'));

const getNamesByGender = (userList, userGender) => userList.filter(person => person.gender === userGender).map(person => person.name);
console.log(getNamesByGender(users, 'male'));

const getinactiveUsers = userList => userList.filter(person => !person.isActive);
console.log(getInactiveUsers(users));

const findUserByEmail = (userList, email) => userList.find(person => person.email === email);
console.log(findUserByEmail(users, 'shereeanthony@kog.com'));
console.log(findUserByEmail(users, 'elmahead@omatom.com'));

const getUsersInAgeRange = (userList, minAge, maxAge) => userList.filter(person => person.age >= minAge && person.age <= maxAge);
console.log(getUsersInAgeRange(users, 20, 30));
console.log(getUsersInAgeRange(users, 30, 40));

const sumBalances = userList => userList.reduce((totalBalance, person) => totalBalance + person.balance, 0);
console.log(sumBalances(users));

const getNamesByFriend = (userList, friendName) => userList.filter(person => person.friends.includes(friendName)).map(person => person.name);
console.log(getNamesByFriend(users, 'Briana Decker'));
console.log(getNamesByFriend(users, 'Goldie Gentry'));

const getNamesSortedByFriendCount = userList => userList.slice().sort((a, b) => a.friends.length - b.friends.length).map(person => person.name);
console.log(getNamesSortedByFriendCount(users));

const getUniqueSkills = userList => [...new Set(userList.flatMap(person => person.skills))].sort();
console.log(getUniqueSkills(users));

