let navBarBtn = document.getElementById("nav-toggle");
navBarBtn.addEventListener("click", navBarToggle);

function navBarToggle(e) {
    let navElem = document.getElementsByTagName("nav")[0];
    navElem.classList.toggle("hide");
}