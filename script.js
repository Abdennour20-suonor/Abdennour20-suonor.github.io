var userEmail = document.getElementById('userEmail');
var textBox = document.getElementById('textBox');
var submitButton = document.getElementById('submitButton');
var successMessage = document.getElementById('successMessage');
var mainContainer = document.getElementById('main-container');

submitButton.addEventListener("click", function(){
    successMessage.style = "display: block";
    mainContainer.style = "display: none";
    var email = document.createElement("li");
    email.innerHTML = textBox.value;
    userEmail.appendChild(email);
    textBox.value = "";
});

var dismiss = document.getElementById('dismiss');

dismiss.addEventListener("click", function(){
    successMessage.style = "display: none";
    mainContainer.style = "visibility: visible";
});