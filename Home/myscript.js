// Show a text when the button is clicked
function changeText() { 
  document.getElementById("msg").innerText = "Button clicked!"; 
}
// Show a message console when the button is clicked
function logMessage() { 
  console.log("Hello, World"); 
}
// Show an print when the button is clicked
function printPage() { 
  window.print(); 
}
// Show an heading and paragraph when the button is clicked
function myParagraph() {
  document.getElementById("demo1").innerHTML = "<ins>Information</ins>";
  document.getElementById("demo2").innerText = "This is currently under construction";
}
/* Count button clicks */
let clicks = 0;
function addClick() { 
  clicks += 1; 
  document.getElementById("clicks").innerText = clicks;
}
// Show a message console 
const siteName = "Home";
console.log("Site:", siteName);
// Show a message console when solve
const count = 1;
const date = 8;
let sum = count + date;
console.log(sum);
// Allowed
{
let clicks = 2;  
}
// Create an Array:
const subject = ["Math", "Reading", "Science"];
// Change an element:
subject[2] = "Class";
// Add an element:
subject.push("By Erlin");
// Display the Array:
document.getElementById("demo3").innerHTML = subject; 


