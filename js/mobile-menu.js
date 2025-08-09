const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpenButton = document.querySelector('.header-burger');
const mobileMenuCloseButton = document.querySelector(
  '.mobile-menu-close-button',
);

const toggleMobileMenu = () => mobileMenu.classList.toggle('is-open');

mobileMenuOpenButton.addEventListener('click', toggleMobileMenu);
mobileMenuCloseButton.addEventListener('click', toggleMobileMenu);
