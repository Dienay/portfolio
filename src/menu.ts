// handle button

const headerElement = document.querySelector(".c-header") as HTMLElement;
const buttonElement = headerElement.querySelector('.c-header__menu') as HTMLElement;

const handleNavBar = headerElement.querySelector(
  ".c-header__navbar-collapse"
) as HTMLElement;

headerElement.addEventListener("click", (event: Event) => {
  const targetElement = event.target as HTMLElement;

  if (targetElement.closest('.c-header__menu')) {
    handleNavBar.classList.toggle("c-header__navbar-collapse--open");
    buttonElement.classList.toggle("c-header__menu--open")
  } else {
    handleNavBar.classList.remove("c-header__navbar-collapse--open");
    buttonElement.classList.remove("c-header__menu--open")
  }
});
