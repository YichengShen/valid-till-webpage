(() => {
  const openMenus = () => document.querySelectorAll('details.header-menu[open]');

  const closeMenus = () => {
    openMenus().forEach((menu) => {
      menu.removeAttribute('open');
    });
  };

  document.addEventListener('click', (event) => {
    openMenus().forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.removeAttribute('open');
      }
    });
  });

  document.addEventListener('focusin', (event) => {
    openMenus().forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.removeAttribute('open');
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenus();
    }
  });
})();
