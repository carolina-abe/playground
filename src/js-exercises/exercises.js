function setAgeAndWeight() {
  let age = 27
  let weight = 75

  const person = {
    age,
    weight
  }
  console.log(person)
}

function setPIValue() {
  const pi = 3.1415

  console.log(pi)
}

// show the max numbers that can be represented in js, who is acessible trough Number.MAX_VALUE
function maxNumber(){
  let maxNumber = Number.MAX_VALUE

  console.log(maxNumber)
}

function fullName() {
    var firstName = "Carolina"
    var lastName = "Machado"

    var fullName = `${firstName} ${lastName}`

    console.log(fullName)
}

function soma() {
    var number1 = 5
    var number2 = 5

    var result = number1 + number2

    console.log(result)
}

function verifyNumber(number) {
  if( number > 0 ) {
    console.log("This number is positive")
  } else if( number < 0 ) {
    console.log("This number is negative")
  } else {
    console.log("This number is 0")
  }
}

function leapYear(year) {
  if((year % 4 === 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("This is a leap year")
  } else {
    console.log("This isnt a leap year")
  }
}

function squareNumber(number) {
  var result = number * number

  console.log(result)
}