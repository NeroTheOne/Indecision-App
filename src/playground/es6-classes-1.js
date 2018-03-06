class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return  `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age, major);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getGreeting() {
    let desciption = super.getGreeting();
    if (this.major) {
      desciption += ` Their major is ${this.major}`
    }
    return desciption;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation
  }
  getGreeting() {
    
  }
}

let person = new Student('Nero', 20, 'Computer Science');
console.log(person.getGreeting());

let person2 = new Student();
console.log(person2.getGreeting());
