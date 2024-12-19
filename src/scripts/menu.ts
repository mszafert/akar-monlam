const menuLinks = document.querySelector('.menu-links');

document.querySelector('.menu-nav')?.addEventListener('click', () => {
  menuLinks?.classList.toggle('expanded');
});
