const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
 const keys = Object.keys(user);
 const values = Object.values(user);

 for (const key of keys){
    console.log("ключ: " + user[key])
 };


 const countProps = function sdsd(obj) { 
  return Object.keys(obj).length;
  };


  console.log(countProps({}));
  

  const findBestEmployee = function (employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
  };

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 100,
      lorence: 99,
    }),
  );

  function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 

  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  

  console.log(getAllPropValues(products, 'name'));


  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice = product.price * product.quantity;
        break;
      }
    }
  
    return totalPrice;
  }

  console.log(calculateTotalPrice(products, 'Радар'))