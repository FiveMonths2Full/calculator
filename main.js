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
const zeroButton = document.createElement("button");
//classes
oneButton.classList.add("btn", "num");
twoButton.classList.add("btn", "num");
threeButton.classList.add("btn", "num");
fourButton.classList.add("btn", "num");
fiveButton.classList.add("btn", "num");
sixButton.classList.add("btn", "num");
sevenButton.classList.add("btn", "num");
eightButton.classList.add("btn", "num");
nineButton.classList.add("btn", "num");
zeroButton.classList.add("btn", "num");
//text
oneButton.textContent = "1"
twoButton.textContent = "2"
threeButton.textContent = "3"
fourButton.textContent = "4"
fiveButton.textContent = "5"
sixButton.textContent = "6"
sevenButton.textContent = "7"
eightButton.textContent = "8"
nineButton.textContent = "9"
zeroButton.textContent = "0"

//operator buttons
const plusButton = document.createElement("button");
const minusButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
//classes
plusButton.classList.add("btn", "operator");
minusButton.classList.add("btn", "operator");
multiplyButton.classList.add("btn", "operator");
divideButton.classList.add("btn", "operator");
//text
plusButton.textContent ="+";
minusButton.textContent ="-";
multiplyButton.textContent ="x";
divideButton.textContent ="/";
//clear button
const clearButton = document.createElement("button");
//class
clearButton.classList.add ="btn", "clear";
//text
clearButton.textContent = "C";
//delete button
const delButton = document.createElement("button");
//class
delButton.classList.add = "btn", "del";
//text
delButton.textContent = "<";
//dot Button
const dotButton = document.createElement("button");
//class
dotButton.classList.add = "btn", "dot";
//text
dotButton.textContent = ".";
//equals button
const equalsButton = document.createElement("button");
//class
equalsButton.classList.add ="btn", "equals";
//text
equalsButton.textContent = "="
//number display
const numDisplay = document.createElement("div");
//class
numDisplay.classList.add ="numDisplay"
//example text
numDisplay.textContent = "69";

const container = document.querySelector(".calculator");
container.appendChild(numDisplay);




