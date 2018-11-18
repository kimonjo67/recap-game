//Grab the element of the span id for userText
var userText = document.getElementById("user-text");
//Create an onkey function to grab every activity on the keyboard
document.onkeyup = function(event) {
    userText.textContent = event.key;
}