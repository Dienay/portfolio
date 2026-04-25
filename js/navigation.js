window.addEventListener("load", function () {
  const links = document.querySelectorAll(".c-header__nav-link");

  function markActive(href) {
    links.forEach((link) => {
      if (link.getAttribute("href") === href) {
        link.classList.add("c-header__nav-link--current");
      } else {
        link.classList.remove("c-header__nav-link--current");
      }
    });
  }

  const pathname = window.location.pathname;
  const isBlogOrPost =
    pathname.startsWith("/artigos") || pathname.startsWith("/artigos/");

  if (isBlogOrPost) {
    markActive("/artigos");
    return;
  }

  const pages = document.querySelectorAll(".page");

  function findCurrentPageByScroll() {
    pages.forEach((page) => {
      const pageTop = page.offsetTop;
      const pageHeight = page.clientHeight;
      if (
        window.scrollY >= pageTop - pageHeight / pages.length &&
        window.scrollY < pageTop + pageHeight / pages.length
      ) {
        let currentPage = page.getAttribute("id");
        links.forEach((link) => {
          const href = link.getAttribute("href");
          const linkTarget = href.replace(/^\/?#/, "");
          if (linkTarget === currentPage) {
            link.classList.add("c-header__nav-link--current");
          } else {
            link.classList.remove("c-header__nav-link--current");
          }
        });
      }
    });
  }

  findCurrentPageByScroll();
  window.addEventListener("scroll", findCurrentPageByScroll);
});
