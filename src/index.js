
const splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  arrows: false,
  wheel: true,
  // autoplay: true,
  // interval: 1000,
  speed: 250,
}).mount();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

