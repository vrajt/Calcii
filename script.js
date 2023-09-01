// Variable to store the displayed value
let displayValue = ''; 
// track if the last input was an operator
let lastInputWasOperator = false; 
//  track if calculation has been done
let calculationDone = false; 


// Function to add value on display
function display(value) {
    if (calculationDone && !isNaN(value)) {
        displayValue = value;
        calculationDone = false;
    } else if (lastInputWasOperator && isNaN(value)) {
        displayValue = displayValue.slice(0, -1) + value;
    } else {
        displayValue += value;
    }

    lastInputWasOperator = isNaN(value) && value !== '.';
    updateDisplay();
}

// Function to clear display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
    calculationDone = false; // Reset the flag
}

// Function to remove a character
function removeLastChar() {
    if (!calculationDone) {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
        lastInputWasOperator = isNaN(displayValue.slice(-1)) && displayValue.slice(-1) !== '.';
    }
}

// Function to update the value on display
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Function to perform calculations
function calculate() {
    let currentExpression = displayValue.split(/([+\-*/])/);  
    let result = parseFloat(currentExpression[0]);

    for (let i = 1; i < currentExpression.length; i += 2) {
        let operator = currentExpression[i];
        let operand = parseFloat(currentExpression[i + 1]);

        if (!isNaN(operand)) {
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand !== 0) {
                        result /= operand;
                    } else {
                        displayValue= "error";
                        updateDisplay();
                        
                        return;
                    }
                    break;
            }
        }
    }

    if (!isNaN(result)) {
        result = parseFloat(result.toFixed(17));
        displayValue = result.toString();
    } 
    
    updateDisplay();
    calculationDone = true;
}


