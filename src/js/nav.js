// function to animate burger and nav selection
export function hamburgerMenu() {
    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector(".nav-tabs");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
        navMenu.classList.toggle("nav-active");
    });

}
