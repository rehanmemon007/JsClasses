// Temperature in kelvin store in variable "kelvin"
var kelvinTemp = 301

// Temperature in celsius store in variable "celsiusTemp"
celsiusTemp = kelvinTemp - 273.15

// Convert celsius to fahrenheit store in variable "fahrenheitTemp"
fahrenheitTemp =  celsiusTemp * (9/5) + 32

// console.log(fahrenheitTemp)

fahrenheitTemp = Math.floor(fahrenheitTemp)

//use string concetanation to leave a message
// "The Temperature is " Fahrenteit" "degree Fahrenheit"
console.log("The Temperature is " + fahrenheitTemp + " degree Fahrenheit")
