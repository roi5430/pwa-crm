const splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  arrows: false,
  drag: true,
  speed: 250,
}).mount();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('open');
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.nav__mob-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
    openModalBtn: document.querySelector('.buy-now-button'),
    closeModalBtn: document.querySelector('.backdrop__button-close'),
    menu: document.querySelector('.backdrop-mb-menu'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.backdrop'),
    cardBtn: document.querySelector('.products__btn-common'),
    frontEl: document.querySelector('.front'),
    backEl: document.querySelector('.back'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.openModalBtn.addEventListener('click', addClassModal);
  refs.closeModalBtn.addEventListener('click', removeClassModal);
  refs.cardBtn.addEventListener('click', toggleCardClass);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-body');
  }

  function addClassModal() {
    refs.backdrop.classList.add('is-open');
    refs.body.classList.add('no-scroll');
  }

  function removeClassModal() {
    refs.backdrop.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }

  function toggleCardClass() {
    refs.frontEl.classList.toggle('is-passive');
    refs.backEl.classList.toggle('is-active');
  }
})();
