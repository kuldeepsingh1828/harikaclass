let arr = [1, 2, 3, 4, 5];

//create an array from index 2
let [a, b, ...arr2] = arr;
console.log(a, b, arr2);

let obj = { d: 234, e: 67, f: 67 };
let { e, d, f, ...newobj } = obj;
console.log(newobj)