class Car {
  constructor (color) {
    this.color = color
  }

  getColor () {
    return this.color
  }
}

const car = new Car('red')

console.log(car.getColor())
