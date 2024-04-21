window.addEventListener('load', function () {
    const links = document.querySelectorAll(".c-header__nav-link");
    const pages = document.querySelectorAll(".page");
    function findCurrentPageByScroll() {
        pages.forEach((page) => {
            const pageTop = page.offsetTop;
            const pageHeight = page.clientHeight;
            if (window.scrollY >= pageTop - pageHeight / pages.length
                && window.scrollY < pageTop + pageHeight / pages.length) {
                let currentPage = page.getAttribute("id");
                links.forEach((link) => {
                    if (link.getAttribute('href').substring(1) === currentPage) {
                        link.classList.add("c-header__nav-link--current");
                    }
                    else {
                        link.classList.remove("c-header__nav-link--current");
                    }
                });
            }
        });
    }
    findCurrentPageByScroll();
    window.addEventListener('scroll', findCurrentPageByScroll);
});
