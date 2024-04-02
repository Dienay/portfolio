const links = document.querySelectorAll(".c-header__nav-link");
links.forEach(function (link) {
    link.addEventListener("click", toggleCurrentClass);
});
function toggleCurrentClass(event) {
    const targetElement = event.currentTarget;
    if (targetElement.classList.contains("c-header__nav-link--current")) {
        return;
    }
    links.forEach(function (link) {
        if (link !== targetElement) {
            link.classList.remove("c-header__nav-link--current");
        }
    });
    targetElement.classList.toggle("c-header__nav-link--current");
}
