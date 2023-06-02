function parent() {
    let a;
    var x;
    const z = 10;
    console.log("parent")
}

function child(parent) {
    console.log("child")
    parent();
}
child(parent);
