// // function expandLoris(){
// // var slowLoris = document.getElementById('slowLoris')
// // slowLoris.innerHTML = "<h1>This the  New Function</h1>"
// // slowLoris.className = "show"
// // // slowLoris.className = 'hidden'
// // }

// function run(){
//     var p = document.getElementsByTagName('p')
//     p[1].innerHTML = "This is the Aaray"
//     console.log(p)
// }

// function myFunction() {
//   const list = document.getElementsByTagName("ul")[0];
//   list.getElementsByTagName("li")[1].innerHTML = "Mil";
// }

// This and Bind..

// let person1 ={
//     name : "Rehan"
// }
// let person2 ={
//     name: "Ali"
// }
// function namer(){
//     return this.name
// }

//  namer.bind(person1)()
//  namer.bind(person2)()
// let number = {
//     x: 24,
//     y: 22
// }
// let count = function(){
//     console.log(this.x + this.y)
// }
// //show you undefine 

// // possible solution 
// let boundfunc = count.bind(number)

// console.log(boundfunc())

var myLanguages = function (lang1 , lang2, lang3){
    console.log("my name is " + this.name + " and i know " +lang1+ "," +lang2 + " and " + lang3)
}
// console.log(myLanguages())

var person1 = { 
    name: "Ali"
}
console.log(myLanguages.call(person1, 'javascript' ,' Python', 'HTML'))
