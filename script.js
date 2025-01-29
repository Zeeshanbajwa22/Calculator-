
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // eval is used to evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
}
