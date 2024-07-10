// grab the red box
var box = document.getElementById('box');

// grab the button
var button = document.getElementById('button');

var colors = ['blue', 'green', 'purple', 'red'];

var currentColor = 0;

box.style.backgroundColor = colors[currentColor];

// when the button is clicked, change the color of the box to blue
button.addEventListener('click', function() {
  if (currentColor === colors.length - 1) {
    currentColor = 0;
  } else {
    currentColor++;
  }

  box.style.backgroundColor = colors[currentColor];
});




// calculator

// get the calculate button
var calculateButton = document.getElementById('calculate');

// when the calculate button is clicked, calculate the result
calculateButton.addEventListener('click', function() {
  // get the first number
  var firstNumber = Number(document.getElementById('num1').value)
  // get the second number
  var secondNumber = Number(document.getElementById('num2').value)
  // get the operator
  var operator = document.getElementById('operator').value

  var result = null;

  if (operator === 'add') {
    result = firstNumber + secondNumber;
  } else if (operator === 'subtract') {
    result = firstNumber - secondNumber;
  } else if (operator === 'multiply') {
    result = firstNumber * secondNumber;
  } else {
    result = firstNumber / secondNumber;
  }

  // get the result div
  var resultDiv = document.getElementById('calcResult');
  console.log(result)

  // set the inner text to the result
  resultDiv.innerHTML = result;
})
