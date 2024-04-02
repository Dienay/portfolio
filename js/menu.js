// handle button
const headerElement = document.querySelector(".c-header");
const buttonElement = headerElement.querySelector('.c-header__menu');
const handleNavBar = headerElement.querySelector(".c-header__navbar-collapse");
headerElement.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.closest('.c-header__menu')) {
        handleNavBar.classList.toggle("c-header__navbar-collapse--open");
        buttonElement.classList.toggle("c-header__menu--open");
    }
    else {
        handleNavBar.classList.remove("c-header__navbar-collapse--open");
        buttonElement.classList.remove("c-header__menu--open");
    }
});
