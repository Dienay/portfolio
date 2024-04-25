const cards = document.querySelectorAll(".c-projects__item");
const modalsSection = document.querySelector(".c-projects__modals") as HTMLElement;
const modals = document.querySelectorAll(".c-projects__modal")

cards.forEach((card: HTMLElement, index) => {
  card.addEventListener("click", (event: Event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement.closest('.c-projects__item')) {
      modals[index].classList.add("c-projects__modal--active");
      modalsSection.classList.add("c-projects__modals--active");
    }
  })

  modals.forEach((modal: HTMLElement, index) => {
    modal.addEventListener("click", (event: Event) => {
      const targetElement = event.target as HTMLElement;

      if (targetElement.classList.contains("c-projects__modal__close")) {
        modal.classList.remove("c-projects__modal--active");
        modalsSection.classList.remove("c-projects__modals--active");
      }
    })
  })
})


