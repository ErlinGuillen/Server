document.getElementById("version").innerHTML = "March 2026 - Build 785 - By Erlin Guillen-Velasquez"

document.getElementById("time").innerHTML = Date()

document.getElementById("code").innerHTML = "These button aren't working";

function mystyle() {
  document.getElementById("demo").style.fontSize = "25px";
}

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic_bulboff.gif"
  } else {
    pic = "pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}