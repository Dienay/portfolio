// handle button
var headerElement = document.querySelector(".c-header");
var handleNavBar = headerElement.querySelector(".c-header__navbar-collapse");
headerElement.addEventListener("click", function (event) {
    var targetElement = event.target;
    if (targetElement.closest('.c-header__button')) {
        handleNavBar.classList.toggle("c-header__navbar-collapse--open");
    }
});
