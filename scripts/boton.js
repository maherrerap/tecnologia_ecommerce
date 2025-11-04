const  button = document.getElementById("btn-action");


button.addEventListener("click", function() {
    alert("hice click");
})

button.addEventListener("click", function() {
    console.log("hice click");
})

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    console.log("form submitted");
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
})