function Kettle(brand, maxVolume, minVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.minVolume = minVolume;
  this.currentVolume = 0;
  this.isOn = false;
  this.turnOn = function () {
    return (this.isOn = true);
  };
  this.turnOff = function () {
    return  (this.isOn = false);
  }
  this.addWater = function (value) {
    if (this.currentVolume + value >= this.maxVolume) {
      return (this.currentVolume = this.maxVolume);
    }
    return (this.currentVolume += value);
  }
  this.makeTea = function (value) {
    if (this.isOn === true) {
      return false;
    }
    if (this.currentVolume - value <= 0) {
      return (this.currentVolume = 0);
    }
    return this.currentVolume -= value;
  };
}
const kettle = new Kettle("saturn", 2500, 200);
console.log(kettle.turnOn());
console.log(kettle.addWater(3000));
console.log(kettle.turnOff());
console.log(kettle.makeTea(150));

// const product = {
//   name: "sugar",
//   price: 100,
//   currency: "USD",
//   isAvailable: true,
//   showInfo: function () {
//     console.log(this.name, this.price);
//   },
// };
// product.showInfo();

// function Product(name, price, currency, isAvailable) {
//   this.name = name;
//   this.price = price;
//   this.currency = currency;
//   this.isAvailable = isAvailable;
//   this.showInfo = function () {
//     return (
//       this.name +
//       " | " +
//       this.price +
//       " | " +
//       this.currency +
//       " | " +
//       this.isAvailable
//     );
//   };
// }
// const product1 = new Product("milk", 55, "USD", true);
// console.log(product1.showInfo());

// function User(login, email, password) {
//   this.login = login;
//   this.email = email;
//   this.password = password;
//   this.showInfo = function () {
//     return this.login + "\n\n" + this.password;
//   };
// }

// const user1 = new User("Naruto", "naruto@gmail.com", "dattebayo");
// const user2 = new User("Luffy", "pirateking@gmail.com", "meatniku");
// const user3 = new User(
//   "Goku",
//   "strongestfighter@gmail.com",
//   "strongestinuniverse"
// );

// console.log(user1.showInfo());
// console.log(user2.showInfo());
// console.log(user3.showInfo());

// function Country(name, population, area) {
//   this.countryName = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const germany = new Country("Germany", 83200000, 357588);
// const japan = new Country("Japan", 125700000, 377973);
// console.log(germany.getDensity());
// console.log(japan.getDensity());

// function Automobile(name, maxSpeed) {
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.currentSpeed = 0;
//   this.stop = function () {
//     return (this.currentSpeed = 0);
//   };
//   this.accelerate = function (value) {
//     if (this.currentSpeed + value >= this.maxSpeed) {
//       this.currentSpeed = this.maxSpeed;
//     } else {
//       this.currentSpeed += value;
//     }
//     return this.currentSpeed;
//   };
//   this.deAccelerate = function (value) {
//     if (this.currentSpeed - value <= 0) {
//       this.currentSpeed = 0;
//     } else {
//       this.currentSpeed -= value;
//     }
//     return this.currentSpeed;
//   };
// }

// const car = new Automobile("bmw", 270);
// console.log(car.accelerate(50));
// console.log(car.accelerate(-50));


