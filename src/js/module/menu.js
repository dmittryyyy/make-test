const menu = document.querySelector('.container-menu');
const btnShowMenu = document.querySelector('.header__btn-menu');
const btnCloseMenu = document.querySelector('.btnClose');

const showMenu = () => {
  menu.classList.add('show');
};

const closeMenu = () => {
  menu.classList.remove('show');
};

btnShowMenu.addEventListener('click', () => {
  showMenu();
});

document.addEventListener('keyup', (e) => {
  if (e.code === "Escape") {
    closeMenu();
  }
});

btnCloseMenu.addEventListener('click', () => {
  closeMenu();
});
