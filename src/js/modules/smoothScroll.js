export default () => {
  document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      if (this.closest(".main-menu")) {
        this.closest(".main-menu").classList.remove('active');

        const body = document.querySelector("body");
        body.classList.remove("disable-scroll");
      }

      console.log(this.closest(".main-menu"));

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = -10;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });

    });
  })
}
