// var keyword -> GLOBAL,can be accessed before
//declaration
var a;
//Intialization
a = 10;
console.log(a);
var a = "Harika";
console.log(a);

console.log(i); //undefined

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("END", i); //undefined

// Phase 1 -- Declaration
// a:Harika
// i:10

// Phase 2 -- Execution
// 10
// Harika
// undefined
// 0 1 2 3 4 5 6 7 8 9
// END 10