// Class define kar rahe hain
class Car {
    constructor(brand, model) {
      this.brand = brand;  // yeh property hai
      this.model = model;  // yeh bhi property hai
    }
  
    // Method define kar rahe hain
    start() {
      console.log(`${this.brand} ${this.model} ki gaadi start ho gayi!`);
    }
  }
  
  // Class ka object banaate hain
  const myCar = new Car('Tesla', 'Model X');
  myCar.start(); // Output: Tesla Model X ki gaadi start ho gayi!
  
  // Inheritance ka example
  class ElectricCar extends Car {
    constructor(brand, model, batteryLife) {
      super(brand, model); // super keyword se parent class ke constructor ko call kar rahe hain
      this.batteryLife = batteryLife; // ElectricCar ki apni property
    }
  
    // Method override kar rahe hain (Polymorphism)
    start() {
      console.log(`${this.brand} ${this.model} ki electric gaadi start ho gayi! Battery life: ${this.batteryLife}`);
    }
  }
  
  const myElectricCar = new ElectricCar('Tesla', 'Model S', '85%');
  myElectricCar.start(); // Output: Tesla Model S ki electric gaadi start ho gayi! Battery life: 85%
      