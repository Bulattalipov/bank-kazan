export default () => {
  const menuBtn = document.querySelector(".header__mobile-burger");
  const menu = document.querySelector('.main-menu');
  const menuCloseBtn = document.querySelector('.main-menu__close');
  const body = document.querySelector('body');

  menuBtn.addEventListener('click', function () {
    menu.classList.add("active");
    body.classList.add("disable-scroll");
  })

  menuCloseBtn.addEventListener('click', function () {
    menu.classList.remove("active");
    body.classList.remove("disable-scroll");
  });
}
