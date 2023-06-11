//today - Kuldeep I will submit my assigment tomorrow at 3PM.

// RIGHT NOW ? CONFUSED OR WAITING TILL you submit or time is UP
// You submitted before 3 -- KEPT PROMISE
// You didn't submitted before 3 -- BROKEN PROMISE

debugger;
console.log("first");
fetch('https://fakestoreai.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(err);
    });

console.log("second");