let user = {
  name: 'Nero',
  cities: ['Naga', 'San Francisco', 'Las Vegas'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
}

user.printPlacesLived();

const multiplier = {
  numbers: [2, 2, 2],
  multiplyBy: 5,
  multiply: function {
    return this.numbers.map((val) => val * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
