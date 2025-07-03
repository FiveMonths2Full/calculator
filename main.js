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
//number buttons
const oneButton = document.createElement("button");
const twoButton = document.createElement("button");
const threeButton =document.createElement("button");
const fourButton =document.createElement("button");
const fiveButton =document.createElement("button");
const sixButton =document.createElement("button");
const sevenButton =document.createElement("button");
const eightButton =document.createElement("button");
const nineButton =document.createElement("button");
//operator buttons
const plusButton = document.createElement("button");
const minusButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
//clear button
const clearButton = document.createElement("button");
//delete button
const delButton = document.createElement("button");
//dot Button
const dotButton = document.createElement("button");



