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
    menu: document.querySelector('.backdrop-mb-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-body');
  }
})();
