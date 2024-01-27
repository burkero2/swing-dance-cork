
// Declare variables to be used
let navBarBtn = document.querySelector("#nav-toggle i");
let navElem = document.getElementsByTagName("nav")[0];

// Add Event Listener on the Drop down button to call the function to toggle the hide feature
navBarBtn.addEventListener("click", navBarToggle);

function navBarToggle(e) {
    navElem.classList.toggle("hide");
}


// Anonymous function to hide the menu again if the user clicks anywhere on the screen that's not the button
document.addEventListener("click", function (e) {
    if (e.target != navBarBtn) {
        navElem.classList.add("hide");
    }
});

