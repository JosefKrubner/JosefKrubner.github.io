let expandBtn = document.getElementById("menu-expand-btn");

let mainMenu = document.getElementById("main-header");

let mainNav = document.getElementById("main-nav");

expandBtn.addEventListener("click", function() {
    if(mainMenu.style.display == "none" || mainMenu.style.display == "") {
        mainMenu.style.display = "block";
        return
    }
    mainMenu.style.display = "none";
})

window.addEventListener("click", function(event) {
    if (event.target == mainMenu || event.target.parentNode == mainNav) {
        mainMenu.style.display = "none";
    }
})

// window.onclick = function(event) {
//     console.log('clicked')
//     if (event.target == mainMenu) {
//         mainMenu.style.display = "none";
//     }
// }