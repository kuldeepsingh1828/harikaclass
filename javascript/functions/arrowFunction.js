// => Arrow to be used instead of function keyword

//General
function gamer() {
    console.log("My first game is PUBG");
}

//anonymous
let gamer = function () {
    console.log("My first game is PUBG");
}


//arrow function type 1 
// NO paramter to function and function returns nothing
gamer = () => {
    console.log("My first game is PUBG");
}

//arrow function type 1 
// some paramter(>1) to function and function returns nothing
gamer = (game, name) => {
    console.log(name, " first game is ", game);
}

//arrow function type 1 
// 1 paramter(=1 i.e skip parentheses) to function and function returns nothing
gamer = game => {
    console.log("My first game is ", game);
}

//arrow function type 1 
// some paramter(>1) to function and function returns only
gamer = (game, name) => name + " first game is " + game;



//arrow function type 1 
// 1 paramter(=1 i.e skip parentheses) to function and function returns only
gamer = game => "My first game is " + game;
