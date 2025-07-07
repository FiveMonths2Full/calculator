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

let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;
let clickCount = 0;

function operate(a,b,sign) {

    return  sign == "+"  ? add(a,b) :
            sign == "-"  ? subtract(a,b) :
            sign == "*"  ? multiply(a,b) :
            sign == "/"  ? divide(a,b) : "dont work";
    }
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
//- classes
const numButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton];
numButtons.forEach(button => button.classList.add("btn", "num"));
//- text
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].textContent = `${i}`;
}
//operator buttons
const plusButton = document.createElement("button");
const minusButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
//- classes

//- text
plusButton.textContent ="+";
minusButton.textContent ="-";
multiplyButton.textContent ="x";
divideButton.textContent ="/";

const operatorButtons = [plusButton, minusButton, multiplyButton, divideButton] 
operatorButtons.forEach(button => button.classList.add("btn", "operator"));
//clear button
const clearButton = document.createElement("button");
//- class & text
clearButton.classList.add("btn", "clear");
clearButton.textContent = "C";

//delete button
const delButton = document.createElement("button");
//- class & text
delButton.classList.add("btn", "del");
delButton.textContent = "<";

//dot Button
const dotButton = document.createElement("button");
//- class & text
dotButton.classList.add("btn", "dot");
dotButton.textContent = ".";

//equals button
const equalsButton = document.createElement("button");
//- class & text
equalsButton.classList.add("btn", "equals");
equalsButton.textContent = "=";


//number display
const calcDisplay = document.createElement("div");
//class
calcDisplay.classList.add("calcDisplay")
//example text
calcDisplay.textContent = "";

const container = document.querySelector(".calculator");
container.appendChild(calcDisplay);

const numBtnContainer = document.createElement("div");
numBtnContainer.classList.add("numBtnContainer");
//numbers
numBtnContainer.appendChild(oneButton);
numBtnContainer.appendChild(twoButton);
numBtnContainer.appendChild(threeButton);
numBtnContainer.appendChild(fourButton);
numBtnContainer.appendChild(fiveButton);
numBtnContainer.appendChild(sixButton);
numBtnContainer.appendChild(sevenButton);
numBtnContainer.appendChild(eightButton);
numBtnContainer.appendChild(nineButton);
//
numBtnContainer.appendChild(dotButton);
//
numBtnContainer.appendChild(zeroButton);
//
numBtnContainer.appendChild(delButton);
//operators
const operatorBtnContainer = document.createElement("div");
operatorBtnContainer.classList.add("operatorBtnContainer");

operatorBtnContainer.appendChild(plusButton);
operatorBtnContainer.appendChild(minusButton);
operatorBtnContainer.appendChild(multiplyButton);
operatorBtnContainer.appendChild(divideButton);

const funcBtnContainer = document.createElement("div");
funcBtnContainer.classList.add("funcBtnContainer");
funcBtnContainer.appendChild(clearButton)
funcBtnContainer.appendChild(equalsButton)

const mainBtnContainer = document.createElement("div");
mainBtnContainer.classList.add("mainBtnContainer");

mainBtnContainer.appendChild(numBtnContainer);
mainBtnContainer.appendChild(operatorBtnContainer);

container.appendChild(funcBtnContainer);
container.appendChild(mainBtnContainer);

numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
        calcDisplay.textContent += numButton.textContent;
        if (!isSecondNumber) {
            num1 += numButton.textContent;
        } else {
            num2 += numButton.textContent;
        }
    });
});

operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", () => {
        const pressed = opButton.textContent;

        if (pressed === "-" && operator && num2 === "") {
            // Inject negative sign for num2
            calcDisplay.textContent = "-";
            num2 = "-";
            return;
        }

        // Regular operator flow
        if (num1 === "") return;

        clickCount++;
        
        if (clickCount === 1) {
            operator = pressed;
            isSecondNumber = true;
            calcDisplay.textContent = "";
        } else if (clickCount > 1 && num2 !== "") {
            num1 = operate(Number(num1), Number(num2), operator);
            calcDisplay.textContent = num1;
            num2 = "";
            operator = pressed;
            isSecondNumber = true;
        }
        
    });
});

