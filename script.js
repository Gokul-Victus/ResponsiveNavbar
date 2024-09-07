let buttonElement = document.getElementById("buttonEle");

let navLink = document.getElementById("nav-link");
buttonElement.addEventListener("click", function() {
    navLink.classList.toggle("menus");

});