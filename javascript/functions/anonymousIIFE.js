
console.log(gamer);
var gamer = function () {
    return "Aric";
}
console.log(gamer());
let a = "undefined";

//Immidiately Invoked Function Expression -- IIFE
(function () {
    console.log(a ?? "A is undefined...");
})();