function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    // Convert input to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      reject("Invalid input: Please enter valid numbers");
      return;
    }

    switch (operation) {
      case '+':
        resolve(num1 + num2);
        break;
      case '-':
        resolve(num1 - num2);
        break;
      case '*':
        resolve(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          reject("Error: Division by zero");
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject("Invalid operation: Please use +, -, *, or /");
    }
  });
}

// Function to handle the calculation
function handleCalculation() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;
  const resultElement = document.getElementById('result');

  calculate(num1, num2, operation)
    .then(result => {
      resultElement.textContent = `Result: ${result}`;
    })
    .catch(error => {
      resultElement.textContent = `Error: ${error}`;
    });
}

// Add event listener to the calculate button
document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', handleCalculation);
});
