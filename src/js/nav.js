// function to animate burger and nav selection
export function hamburgerMenu() {
  var hamburger = document.querySelector(".hamburger");
  var navMenu = document.querySelector(".nav-tabs");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navMenu.classList.toggle("nav-active");
  });
}

export function navhide() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-14vh";
    }
    prevScrollpos = currentScrollPos;
  };
}
