const colors = ['blue', 'red']

const allColors = ['gray', 'green', ...otherColors]

// ['gray', 'green', 'blue', 'red']

function paint (...colors) {
  colors.forEach(color => console.log(color))
} 

paint('gray', 'blue', 'green')

// gray
// blue
// green

function sendMessage (person, message) {
  // magic
}

const arguments = ['alanzinho@hotmail.com', 'hi bro']
sendMessage(...arguments)
