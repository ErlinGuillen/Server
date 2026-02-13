// 1. Variable declaration
let name = "Erlin";       // can be changed
const age = 20;           // constant, cannot be changed
var city = "Miami";    // old-style variable

// 2. Output statements
console.log("Hello World!");               // prints in console
alert("Welcome to my website!");           // pops up in browser
document.getElementById("message").textContent = "JS is working!";  // shows in HTML

// 3. Conditional statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 4. Loop statements
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// 5. Function statement
function greet(user) {
  return "Hello, " + user + "!";
}

console.log(greet("Erlin"));

// 6. Event example (button click)
function showMessage() {
  document.getElementById("message").textContent = "Button was clicked!";
}
