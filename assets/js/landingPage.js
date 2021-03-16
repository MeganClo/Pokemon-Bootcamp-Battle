// capturing username
var userNameEl = document.getElementById("submitUsername");
var buttonEl = document.getElementById("submitUsernamebutton");


var submitButton= function(event) {
    event.preventDefault();
    var userName = userNameEl.value.trim();
    console.log(userName);
    location.href = "index.html";
};

console.log(buttonEl);

buttonEl.addEventListener("click", submitButton);