const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked]'),
    quantity: document.querySelector('[data-quantity]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked1]'),
    quantity: document.querySelector('[data-quantity1]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked2]'),
    quantity: document.querySelector('[data-quantity2]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked3]'),
    quantity: document.querySelector('[data-quantity3]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked4]'),
    quantity: document.querySelector('[data-quantity4]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked5]'),
    quantity: document.querySelector('[data-quantity5]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked6]'),
    quantity: document.querySelector('[data-quantity6]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked7]'),
    quantity: document.querySelector('[data-quantity7]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();

(() => {
  const refs = {
    dishChoise: document.querySelector('[data-dish-is-checked8]'),
    quantity: document.querySelector('[data-quantity8]'),
  };

  refs.dishChoise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.quantity.classList.toggle('available');
  }
})();
