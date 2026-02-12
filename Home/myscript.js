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
  document.getElementById("demo4").innerHTML = "Car owner is " + car.owner;
  document.getElementById("demo5").innerHTML = carName;
  document.getElementById("myp6").innerHTML = question + " <br> " + answer1 + " <br> " + answer2  + " <br> " + answer3
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

// demo3
var subjects = ["Class", "Class", "Class"]; // You can create a constant array:
subjects[0] = "Math"; // You can change an element:
subjects[1] = "Reading"; // You can change an element:
subjects[2] = "Science"; // You can change an element:
subjects.push("By Erlin"); // You can add an element:

// demo4
var car = {type:"Fiat", model:"500", color:"red"}; // Create an object
car.color = "red"; // Change a property:
car.owner = "Veneranda"; // Add a property:

// demo5
carName = "Nissian";
var carName;

var name = "Home";
var subs = 10;
var isLive = true;

console.log(typeof name);   // "string"
console.log(typeof subs);  // "number"
console.log(typeof isLive); // "boolean"

// myp6
var question = "What is 10 + 9";
var answer1 = "10";
var answer2 = "21";
var answer3 = "9";


