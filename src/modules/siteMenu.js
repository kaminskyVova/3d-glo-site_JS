const siteMenu = (function () {
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      // closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

     // делегир
     btnMenu.addEventListener('click', () => {
      menu.classList.add('active-menu');
    });

    const body = document.querySelector('body');

    body.addEventListener('click', (even) => {

      let target = event.target;
      target = target.closest('.menu');
      if (target === btnMenu) {
        menu.classList.add('active-menu');
      } else {
        let target = event.target;
        if (target.closest('menu')) {
          if (target.closest('.close-btn')) {
            menu.classList.remove('active-menu');
          } else {
            if (target.closest('a')) {
              menu.classList.remove('active-menu');
            }
          }
        } else menu.classList.remove('active-menu');
      }
    });
  };
  toggleMenu();
});

export default siteMenu;