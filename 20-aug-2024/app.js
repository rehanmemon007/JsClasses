// var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
// var goOutSide = [];
// for (var i = 0; i < weather.length; i++) {
//     if (weather[i] > 70) {
//         goOutSide.push(weather[i])
//     }
// }
// console.log(goOutSide);

// var niceWeather = function(temp){
//     return temp > 70
// }
// var goOutSide = weather.filter(niceWeather)
// console.log(goOutSide)

// // more simple and easy 
// var goOutSide = weather.filter(function(temp){
//     return temp > 70
// })
// console.log(goOutSide)


// var forecast = [
//     {day: 'Monday', sun: true},
//     {day: 'Tuesday', sun: true},
//     {day: 'wednesday', sun: false}

// ];

// var sunnyDay = []
// for(i=0;i<forecast.length; i++){
//     if(forecast[i].sun){
//         sunnyDay.push(forecast[i])

//     }
// }
// console.log(sunnyDay);

// var sunnyDay = forecast.filter(function(weather){
//     return weather.sun
// })
// console.log(sunnyDay)

var numbers = [2,4,6,8,10,12]

var double = numbers.map(function(mult){
    return mult * 2
}).map(function(mult){
    return mult + 1
})
console.log(double);

// greeting

var greeting = ["hi","hello","hey", "thanks"];

var shout = greeting.map(function(salution){
    return salution.toUpperCase()
})
console.log(shout)

var greetingLowerCase = greeting.map(function(salution){
    return salution.toLowerCase()
})
console.log(greetingLowerCase)


var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
]
var totalNumber = homeruns.reduce(function(a,b){
    console.log('accumulative ' , a, ' current ', b)
    return a + b.batter
},0)
console.log(totalNumber);


//example
var numbers= [5,10,15,20,25]

var num = numbers.reduce(function(x,y){
    console.log(x, y)
    return x + y
},2)
console.log(num)

var number1 = [5,10,15,20,25]
var maxnumber = number1.reduce(function(acc,curr){
    if(acc > curr){
        return acc
    }else{
        return curr
    }
})
console.log(maxnumber)

// practic example
var number2 = [1,2,3,4]

var triple = number2.map(function(number){
    return number * 3
    // [3,6,9,12]
}) .reduce(function(a,b){
    return a+b
 },0)
console.log(triple)

