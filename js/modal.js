const body = document.body;
const modal = document.querySelector('.backdrop');
const modalOpenButton = document.querySelectorAll('.header-button');
const modalCloseButton = document.querySelector('.modal-close-button');

const toggleModal = () => modal.classList.toggle('is-hidden');
const toggleBody = () => body.classList.toggle('is-open');

modalOpenButton.forEach(button => {
  button.addEventListener('click', toggleModal);
});
modalCloseButton.addEventListener('click', toggleModal);
modalOpenButton.forEach(button => {
  button.addEventListener('click', toggleBody);
});
modalCloseButton.addEventListener('click', toggleBody);
