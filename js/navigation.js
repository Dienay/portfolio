window.addEventListener("load", function () {
  const baseUrl = window.BASE_URL ?? "";

  const pathname = window.location.pathname.replace(baseUrl, "") || "/";

  if (pathname !== "/" && pathname !== "") {
    return;
  }

  const links = document.querySelectorAll(".c-header__nav-link");
  const pages = document.querySelectorAll(".page");

  function clearActive() {
    links.forEach((link) => {
      link.classList.remove("c-header__nav-link--current");
    });
  }

  function findCurrentPageByScroll() {
    pages.forEach((page) => {
      const pageTop = page.offsetTop;
      const pageHeight = page.clientHeight;

      if (
        window.scrollY >= pageTop - pageHeight / pages.length &&
        window.scrollY < pageTop + pageHeight / pages.length
      ) {
        const currentPage = page.getAttribute("id");

        clearActive();

        links.forEach((link) => {
          const href = link.getAttribute("href");
          const hash = new URL(href, window.location.origin).hash.replace(
            "#",
            "",
          );

          if (hash === currentPage) {
            link.classList.add("c-header__nav-link--current");
          }
        });
      }
    });
  }

  findCurrentPageByScroll();
  window.addEventListener("scroll", findCurrentPageByScroll);
});
