// // daclare function and string parameter to be 
// //filled with argument.
// function unique(str) {
//     //run the loop to iterate through our string character 
//     for (var i = 0; i < str.length; i++) {
//         //check to see if first and last instance of charatrer are the same
//         //if not true that they are equal reture else
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false
//     }
//     // if we make it through the loop withou returning a value false
//     return true;
// }
// console.log(unique('add'))
// console.log(unique('javascript'))
// console.log(unique('bear'))
// console.log(unique('python'))
// console.log(unique('racecar'))
// console.log(unique('madam'))


// function permutation(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(permutation('baseball', 'llaasebb'));  // Output: true or false


// function maxword(str) {
//     var words = str.split(' ')
//     var biggestWord = 0
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > biggestWord){
//             biggestWord = words[i].length
//         }
//     }
//     return biggestWord
// }
// console.log(maxword('My favorite day is Monday')) //


// function maxword(str) {
//     var words = str.split(' ')
//     var biggestWord = ''
//     for (var i = 0; i < words.length; i++) {
//         if (biggestWord.length < words[i].length){
//             biggestWord = words[i]
//         }
//     }
//     return biggestWord.length
// }
// console.log(maxword('My favorite day is Monday'))


// function addAll (array){
//     var max = Math.max(array[0], array[1])
//     var min = Math.min(array[0], array[1])
//     var total = 0
//     for(var i = min; i<= max; i++){
//         total += i
//     }
//     return total
// }
// addAll([1,4])

function chopper(arr, excess) {
    arr.splice(0, excess)
    return arr
}
console.log(chopper(["abcieke", "ckdhalz", "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"],2))


function palindrom(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return(str === str.split('').reverse().join(''))
}
console.log(palindrom('racecar'))
console.log(palindrom('123'))


// palindrome function
let value = "1232"
function revVal(){
    let myRevVal = value.toString().split('').reverse().join('')
    let myStrVal = value.toString()
   if(myStrVal==myRevVal){
    console.log('Palindorme')
   }else{
    console.log('Not a Palindrome')
   }
}
revVal()




