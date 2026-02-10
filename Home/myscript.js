// Change text when the button is clicked
function changeText() {
  document.getElementById("msg").innerText = "Button clicked!";
}

// Log a message to the console
function logMessage() {
  console.log("Hello, World");
}

// Print the page
function printPage() {
  window.print();
}

// Show heading and paragraph
function myParagraph() {
  document.getElementById("demo1").innerHTML = "<ins>Information</ins>";
  document.getElementById("demo2").innerText = "This is currently under construction";
  document.getElementById("demo3").innerText = subjects
}

// Count button clicks
var clicks = 0;
function addClick() {
  clicks += 1;
  document.getElementById("clicks").innerText = clicks;
}

// Console info
var siteName = "Home";
console.log("Site:", siteName);

// Simple calculation
var count = 1;
var date = 8;
var sum = count + date;
console.log(sum);

// Array example
var subjects = ["Class", "Class", "Class"]; // You can create a constant array:
subjects[0] = "Math"; // You can change an element:
subjects[1] = "Reading"; // You can change an element:
subjects[2] = "Science"; // You can change an element:
subjects.push("By Erlin"); // You can add an element:



