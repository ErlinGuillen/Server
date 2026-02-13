// This is a single-line comment
// It explains the code on this line

/* 
   This is a multi-line comment.
   You can write multiple lines of text here.
   Useful for longer explanations or notes.
*/

// 1. Variable declaration
// Using let (can change value later)
let name = "Erlin";
let age = 17;

// Using const (cannot change value)
const country = "USA";

// Using var (old way, can change value)
var city = "Miami";

// Changing a let or var variable
name = "Alex";
age = 18;
city = "New York";

// Trying to change const will cause an error
// country = "Canada"; // ❌ This will break the cod
// 2. Output statements

console.log(name);         // prints in console
alert("Welcome " + name);  // shows popup
document.getElementById("message").textContent = "Hello " + name; // prints in HTML

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
let number = 10;           // number
let text = "Hello World";  // string
let isStudent = true;      // boolean (true/false)
let colors = ["red", "green", "blue"]; // array
let person = {name: "Erlin", age: 17}; // object

// 5. Function example
function greet(user) {
  return "Hello, " + user + "!";
}
console.log(greet("Erlin"));

// 6. Event example (button click)
function showMessage() {
  document.getElementById("message").textContent = "Button was clicked!";
}

