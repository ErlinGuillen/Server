=// Change text when the button is clicked
const changeText = () => {
  document.getElementById("msg").innerText = "Button clicked!";
};

// Log a message to the console
const logMessage = () => {
  console.log("Hello, World");
};

// Print the page
const printPage = () => {
  window.print();
};

// Show heading and paragraph
const showParagraph = () => {
  document.getElementById("demo1").innerHTML = "<ins>Information</ins>";
  document.getElementById("demo2").innerText =
    "This is currently under construction";
};

// Count button clicks
let clicks = 0;
const addClick = () => {
  clicks++;
  document.getElementById("clicks").innerText = clicks;
};

// Console info
const siteName = "Home";
console.log("Site:", siteName);

// Simple calculation
const count = 1;
const date = 8;
const sum = count + date;
console.log(sum);

// Array example
const subjects = ["Math", "Reading", "Science"];

// Modify array
subjects[2] = "Class";
subjects.push("By Erlin");

// Display array
document.getElementById("demo3").innerText = subjects.join(", ");



