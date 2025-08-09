const modal = document.querySelector('.backdrop');
const modalOpenButton = document.querySelector('.header-button');
const modalCloseButton = document.querySelector('.modal-close-button');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalOpenButton.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);
