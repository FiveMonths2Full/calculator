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
const num1 = 0;
const num2 = 0;
const operator = "+";

function operate(a,b,sign) {
    return  sign == "+"  ? add(a,b) :
            sign == "-"  ? subtract(a,b) :
            sign == "*"  ? multiply(a,b) :
            sign == "/"  ? divide(a,b) : "dont work";
    }
console.log(operate(num1,num2,operator));

