const menu = document.querySelector('.container-menu');
const btnShowMenu = document.querySelector('.header__btn-menu');
const dontMenu = document.querySelector('.container');

btnShowMenu.addEventListener('click', () => {
    menu.classList.add('show');
    document.body.style.overflowY = "hidden";
});

menu.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal__inner');
    if (!modal) {
      modalForm.classList.remove('active');
      body.classList.remove('lock')
    };
  });

document.addEventListener('keyup', (e) => {
    if (e.code === "Escape") {
    menu.classList.remove('show');
    document.body.style.overflowY = "scroll";
    };
  });
