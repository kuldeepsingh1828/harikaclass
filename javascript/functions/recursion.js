let x = 0;
function foo() {
    console.log(x);
    x++;
    if (x > 5) {
        return;
    }
    arguments.callee()
}
foo();