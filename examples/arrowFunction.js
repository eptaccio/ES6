function Button () {
  var myButton = document.querySelector('#button')

  this.changeColor = function () {
    myButton.style.backgroundColor = 'red'
  }

  this.sayHello = function () {
    console.log('hello')
  }

  myButton.addEventListener('click', function (event) {
    this.changeColor()
    this.sayHello()
  })
}

new Button()

// TypeError: this.changeColor is not a function[Learn More]