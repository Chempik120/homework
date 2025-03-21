function Account(login, email) {
    this.login = login;
    this.email = email;
  }
  
  Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  class User {
    constructor(name, age, followers) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  class Storage {
    constructor(items) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  class StringBuilder {
    constructor(value) {
      this._value = value;
    }
  
    get value() {
      return this._value;
    }
  
    append(str) {
      this._value += str;
    }
  
    prepend(str) {
      this._value = str + this._value;
    }
  
    pad(str) {
      this._value = str + this._value + str;
    }
  }
  
  class Car {
    constructor({ maxSpeed, price }) {
      this.speed = 0;
      this.price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }
  
    static getSpecs(car) {
      console.log(
        `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
      );
    }
  
    get price() {
      return this._price;
    }
  
    set price(value) {
      this._price = value;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      } else {
        this.speed = this.maxSpeed;
      }
    }
  
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      } else {
        this.speed = 0;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price); 
  mustang.price = 4000;
  console.log(mustang.price); 
  
  