// capturing username
var userNameEl = document.getElementById("submitUsername");
var buttonEl = document.getElementById("submitUsernamebutton");

// taking user to fightpage and saving the user name to use on fightpage. 
var submitButton= function(event) {
    event.preventDefault();
    var userName = userNameEl.value.trim();
    localStorage.setItem("Name", userName);
    location.href = "fightpage.html";
};

// event listener on button to call our function
buttonEl.addEventListener("click", submitButton);