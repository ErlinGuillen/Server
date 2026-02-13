// This is a single-line comment
// It explains the code on this line

/* 
   This is a multi-line comment.
   You can write multiple lines of text here.
   Useful for longer explanations or notes.
*/

// 1. Variable declaration
let name = "Erlin";       // variable that can change
const age = 20;           // constant, cannot be changed
var city = "Miami";       // old-style variable

// 2. Output statements
console.log("Hello World!");               // prints in console
alert("Welcome to my website!");           // pops up in browser
document.getElementById("message").textContent = "JS is working!";  // shows in HTML

// 3. Conditional statement
if (age >= 18) {
  console.log("You are an adult.");       // prints if true
} else {
  console.log("You are a minor.");        // prints if false
}

/* 4. Loop statements
   Demonstrates a for loop
*/
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// Looping through an array
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);  // prints each color
}

// 5. Function example
function greet(user) {
  return "Hello, " + user + "!";
}
console.log(greet("Erlin"));

// 6. Event example (button click)
function showMessage() {
  document.getElementById("message").textContent = "Button was clicked!";
}

