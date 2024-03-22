// handle button
const headerElement = document.querySelector(".c-header");
const handleNavBar = headerElement.querySelector(".c-header__navbar-collapse");
headerElement.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.closest('.c-header__button')) {
        handleNavBar.classList.toggle("c-header__navbar-collapse--open");
    }
});
