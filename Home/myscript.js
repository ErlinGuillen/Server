function showAlert() { 
  window.alert("This setting is unavaliable (Error: 404)"); 
}
function changeText() { 
  document.getElementById("msg").innerText = "Button clicked!"; 
}
function logMessage() { 
  console.log("Hello, World"); 
}
function printPage() { 
  window.print(); 
}

let clicks = 0;
function addClick() { 
  clicks += 1; 
  document.getElementById("clicks").innerText = clicks;
}

const siteName = "Home";
console.log("Site:", siteName);

let count, date, sum;
count = 0;
count = count + 1;
date = 0;
date = date + 6;
sum = count + date;
console.log(sum);
