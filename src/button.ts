// handle button

const headerElement = document.querySelector(".c-header") as HTMLElement;
const handleNavBar = headerElement.querySelector(
  ".c-header__navbar-collapse"
) as HTMLElement;

headerElement.addEventListener("click", (event) => {
  const targetElement = event.target as HTMLElement;

  if (targetElement.closest('.c-header__button')) {
    handleNavBar.classList.toggle("c-header__navbar-collapse--open");
  }
});
