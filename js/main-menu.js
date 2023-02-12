let expandBtn = document.getElementById("menu-expand-btn");

let mainMenu = document.getElementById("main-header");

let mainNav = document.getElementById("main-nav");

window.addEventListener("click", function(event) {
    if (event.target == mainMenu || event.target.parentNode == mainNav) {
        expandBtn.checked = false;
    }
})