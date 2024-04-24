const cards = document.querySelectorAll(".c-projects__item");
const modalsSection = document.querySelector(".c-projects__modals");
const modals = document.querySelectorAll(".c-projects__modal");
console.log("Modals", modals);
cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (targetElement.closest('.c-projects__item')) {
            modals[index].classList.add("c-projects__modal--active");
            modalsSection.classList.add("c-projects__modals--active");
        }
    });
    modals.forEach((modal, index) => {
        modal.addEventListener("click", (event) => {
            const targetElement = event.target;
            if (targetElement.classList.contains("c-projects__modal__close")) {
                modal.classList.remove("c-projects__modal--active");
                modalsSection.classList.remove("c-projects__modals--active");
            }
        });
    });
});
