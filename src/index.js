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
    openModalBtnNMenu: document.querySelector('.buy-now-button-menu'),
    closeModalBtn: document.querySelector('.backdrop__button-close'),
    productCardBtnOpen: document.querySelector('.products__btn'),
    productCardBtnClose: document.querySelector('.products__btn-close'),
    productCarDescriptEL: document.querySelector('.products-info-modal'),
    productCarDefaultEL: document.querySelector('.products__item'),
    menu: document.querySelector('.backdrop-mb-menu'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.openModalBtn.addEventListener('click', addClassModal);
  refs.openModalBtnNMenu.addEventListener('click', addClassModal);
  refs.closeModalBtn.addEventListener('click', removeClassModal);
  refs.productCardBtnOpen.addEventListener('click', removeProdCart);
  refs.productCardBtnClose.addEventListener('click', addProdCart);

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

  function addProdCart() {
    refs.productCarDescriptEL.classList.add('is-info-hidden');
    refs.productCarDefaultEL.classList.remove('is-info-hidden');
  }

  function removeProdCart() {
    refs.productCarDescriptEL.classList.remove('is-info-hidden');
    refs.productCarDefaultEL.classList.add('is-info-hidden');
  }
})();
