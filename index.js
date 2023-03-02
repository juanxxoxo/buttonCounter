var text = "Hey there, you can start the count now, enjoy! 😎✌🏽";
var i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("chat-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}

typeText();


let count = 0;
function buttonCounter() {
    count++;
    document.getElementById("onClick").innerHTML = count;
}
document.getElementById("add").addEventListener("click", buttonCounter);


function buttonReset() {
    count = 0;
    document.getElementById("onClick").innerHTML = count;
}
document.getElementById("reSet").addEventListener("click", buttonReset);

function buttonSubtract() {
    if (count > 0) {
        count--;
        document.getElementById("onClick").innerHTML = count;
    }
}
document.getElementById("subtract").addEventListener("click", buttonSubtract)