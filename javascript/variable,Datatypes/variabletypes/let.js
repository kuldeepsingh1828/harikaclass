//Let -> Block scope, redeclaration not allowed, reassigned allowed, FINAL in java
let x = 20;
let xy = 35;

debugger;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
debugger;
console.log(i);