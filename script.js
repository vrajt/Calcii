let displayValue = '';// Variable to store the displayed value

function display(value) {     //Function to add value on display
    displayValue += value;
    updateDisplay();
}
//function to clear display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
//fuction to remove a character
function removeLastChar() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
//function to update the value  on display
 function updateDisplay() {
     document.getElementById('display').value = displayValue;
 }
//function to calculate
function calculate() {
    if (firstOperand !== '' && displayValue !== '') {
        secondOperand = displayValue;
        let result = '';
//to check if it is operator
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
                        result = 'Error';
                        break;
                    }
                    break;
            }
        }
    }
//update the display with the result
    displayValue = result.toString();
    updateDisplay();
}
