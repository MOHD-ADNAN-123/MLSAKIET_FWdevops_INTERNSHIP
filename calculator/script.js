// Function to append numbers to the display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
