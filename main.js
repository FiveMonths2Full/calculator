function add (a,b) {
    return a + b;
}
function subtract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;
}
function divide (a,b) {
    b !== 0 ? a/b : undefined;
}
console.log(add(4,0));
console.log(subtract(4,0));
console.log(multiply(4,0));
console.log(divide(4,0));
