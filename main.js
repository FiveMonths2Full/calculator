function add (a,b) {
    return roundIfNecessary((a + b));
};
function subtract (a,b) {
    return roundIfNecessary((a - b));
};
function multiply (a,b) {
    return roundIfNecessary((a * b));
};
function divide (a,b) {
    return b !== 0 ? roundIfNecessary((a/b)) : undefined;
};
function roundIfNecessary(result) {
    const resultStr = result.toString();
    if (resultStr.includes(".") && resultStr.split(".")[1].length > 4) {
        return Number(result.toFixed(4));
    }
    return result;
}
let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;
let shouldClearDisplay = false;
let deleteNumber = false;
let addDot = false;
let clickCount = 0;

function operate(a,b,sign) {

    return  sign == "+"  ? add(a,b) :
            sign == "-"  ? subtract(a,b) :
            sign == "x"  ? multiply(a,b) :
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
        // Clear display if flagged
        if (shouldClearDisplay) {
            calcDisplay.textContent = "";
            shouldClearDisplay = false;
        }

        // Append digit to display
        if (deleteNumber) {
            deleteNumber = false;
            return;
        }
        else {
            calcDisplay.textContent += numButton.textContent;
        }

        // Add digit to correct variable
        if (!isSecondNumber) {
            num1 += numButton.textContent;
        } else {
            num2 += numButton.textContent;
        }
    });
});

// OPERATOR BUTTON LOGIC
operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", () => {
        const pressed = opButton.textContent;

        // Handle negative second number (e.g., x - or ÷ -)
        if (pressed === "-" && operator && num2 === "") {
            calcDisplay.textContent = "-";
            num2 = "-";
            return;
        }

        // Don't allow operator without a first number
        if (num1 === "") return;

        clickCount++;

        if (clickCount === 1) {
            // First operator click
            operator = pressed;
            isSecondNumber = true;
            shouldClearDisplay = true;
        } else if (clickCount > 1 && num2 !== "") {
            // Chaining operations
            num1 = operate(Number(num1), Number(num2), operator);
            calcDisplay.textContent = num1;

            // Reset for next operation
            num2 = "";
            operator = pressed;
            isSecondNumber = true;
            clickCount = 1;
            shouldClearDisplay = true;
        }

        // Debug logs
        console.log("num1:", num1);
        console.log("num2:", num2);
        console.log("operator:", operator);
        console.log("clickCount:", clickCount);
        console.log("isSecondNumber:", isSecondNumber);
    });
});

equalsButton.addEventListener("click", () => {
    if (num1 === "" || num2 === "") return;
    else if (num1 !== "" && operator !== "" && num2 !== "") {
        num1 = operate(Number(num1), Number(num2), operator);
        calcDisplay.textContent = num1;

        // Reset for next operation
        num2 = "";
    }
})
delButton.addEventListener("click", () =>  {
    if (calcDisplay.textContent === "") return;
    else if(calcDisplay.textContent !== "") {
        let arrCalcDisplay = calcDisplay.textContent.split("");
        arrCalcDisplay.pop();
        calcDisplay.textContent = arrCalcDisplay.join("");
        deleteNumber = true;
        if (!isSecondNumber) {
            num1 = num1.slice(0, -1);
        } 
        else {
            num2 = num2.slice(0, -1);
        }

    }
})
clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    calcDisplay.textContent = "";
    clickCount = 0;
    isSecondNumber = false;
    shouldClearDisplay = false;
    deleteNumber = false;
})
dotButton.addEventListener("click", () => {
    if (calcDisplay.textContent === "") return;
    else if (calcDisplay.textContent !== "") {
        let arrCalcDisplay = calcDisplay.textContent.split("");
        if (arrCalcDisplay.includes(".")) {
            return;
        }
        else if(!arrCalcDisplay.includes(".")) {
            arrCalcDisplay.push(".")
            calcDisplay.textContent = arrCalcDisplay.join("");
            addDot = true;
             if (!isSecondNumber) {
            num1 = num1 + ".";
            } 
            else {
            num2 = num2 + ".";
            
        };
    };
}});




