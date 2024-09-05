// function morningGreeting(){
//     return "Good Morning"
// }
// console.log(morningGreeting());

// var morningGreeting1 = function(firstName){
//     return firstName + " Good Morning Smit"
// }
// console.log(morningGreeting1("Rehan"))
// console.log(morningGreeting1("Asad"))

// var dogWalk = (function(Person,Dog){
//  return Person + ' is taking ' +Dog+ ' for a walk'
// }('Rehan', "Leo"))
// console.log(dogWalk)

//global and local scope

// function roadTrip() {
//     var gallon = 12
//     var mpg = 34
//     return  gallon * mpg
// }
// console.log(roadTrip())

// var gallons =10
// var mpg = 30
// function roadTrips(){
//     return gallons * mpg
// }
// console.log(gallons)
// console.log(mpg)
// console.log(roadTrips()).

// // global scope
// var height = 10

// function volume(){
//     //parent scope.s
//     var width = 10
//     var length = 10
//     var volumeOfObject = function(){
//         return length * width * height // Return the calculated volume
//     }
//     return volumeOfObject()
// }
// console.log(volume()) // this will vnow correctly print the volume


var randomBodyParts = ['head', 'neck', 'chin', 'face'];

var randomAdjectives = ['smelly', 'boring', 'lazy', 'stupid']

var randomWords = ['apple','ball','cat','engle' ,'dog']

var randomBodyPart = randomBodyParts[Math.floor(Math.random() *4)]

var randomAdjective= randomAdjectives[Math.floor(Math.random() *4)]

var randomWord= randomWords[Math.floor(Math.random() *5)]

console.log('your ' +randomBodyPart+ ' is like a '  +randomAdjective+ ' ' +randomWord+ ' !!')





