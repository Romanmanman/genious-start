const bodys = document.body;
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpenButton = document.querySelector('.header-burger');
const mobileMenuCloseButton = document.querySelectorAll(
  '.mobile-menu-close-button',
);

const toggleMobileMenu = () => mobileMenu.classList.toggle('is-open');
const toggleBodys = () => bodys.classList.toggle('is-open');

mobileMenuOpenButton.addEventListener('click', toggleMobileMenu);
mobileMenuCloseButton.forEach(button => {
  button.addEventListener('click', toggleMobileMenu);
});
mobileMenuOpenButton.addEventListener('click', toggleBodys);
mobileMenuCloseButton.forEach(button => {
  button.addEventListener('click', toggleBodys);
});
