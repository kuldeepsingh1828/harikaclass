let arr = [1, 2, 3, 4, 5]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//Lambda function ()->{}
// arr.forEach((element) => {
//     console.log(element)
// });

//filter
let oddArr = arr.filter(element => element % 2)
let evenArr = arr.filter(element => !(element % 2))
console.log(oddArr);
console.log(evenArr);

//map
let newArr = arr.map(element => ++element)
let squareArr = arr.map(element => element ** 2)
console.log(newArr)
console.log(squareArr)

//find
let found = arr.find(element => element == 5);
console.log(found)
//findIndex
let foundIndex = arr.findIndex(element => element == 2);
console.log(foundIndex)
//some
console.log(arr.some(e => e > 30))
//every
console.log(arr.every(e => e > -30))
//reduce
let s = arr[0];
for (let index = 1; index < arr.length; index++) {
    s += arr[index];
}
console.log(s)

console.log(arr.reduce((a, b) => a + b, 0)); //5