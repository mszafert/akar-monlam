document.querySelector('.menu-nav')?.addEventListener('click', () => {
  document.querySelector('.menu-links')?.classList.toggle('expanded');
});

document.addEventListener('click', (e) => {
  if (!document.querySelector('nav')?.contains(e.target as Node)) {
    document.querySelector('.menu-links')?.classList.remove('expanded');
  }
});
