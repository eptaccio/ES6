const fullPerson = {
  name: 'Alan',
  secondName: 'Musk',
  email: 'alanzinho@hotmail.com',
  phones: [
    '98756651', '98876651'
  ]
}

const {name, phones} = fullPerson

// name -> Alan
// phones -> ['98756651', '98876651']

const [first, second] = phones

// first -> 98756651
// second -> 98876651
