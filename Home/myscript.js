// ===== Basic JavaScript Starter =====

// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {
  
  console.log("Website loaded successfully!");

  // Example: Change text content
  const heading = document.querySelector("h1");
  if (heading) {
    heading.textContent += " 🚀";
  }

  // Example: Button interaction
  const button = document.querySelector("#myButton");
  if (button) {
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
  }

});

console.log("Hello, World!");

document.write("Hello, World!");

document.getElementById("demo").innerHTML = "Hello, World!";

alert("Hello, World!");

let name = "Alex";
console.log("Hello " + name);


