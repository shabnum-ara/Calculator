// Get the input text element
const inputText = document.getElementById("inputtext");

// Function to clear the display
function clr() {
  inputText.value = "";
}

// Function to delete the last character from the display
function del() {
  inputText.value = inputText.value.slice(0, -1);
}

// Function to append the clicked value to the display
function Calculate(value) {
  inputText.value += value;
}

// Function to evaluate the expression in the display
function Result() {
  try {
    // Evaluate the expression and update the display
    inputText.value = eval(inputText.value);
  } catch (error) {
    // If an error occurs, display an error message
    inputText.value = " ";
  }
}
