function openModal_1() {
  const { openModalBtn, closeModalBtn, modal } = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  openModalBtn.forEach(button => button.addEventListener('click', toggleModal));
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
}
openModal_1();

function openModal_2() {
  const { radioBtn, disabledButton, openModal2Btn, closeModal2Btn, modal, modal2, modal3 } = {
    radioBtn: document.querySelectorAll('[data-payment]'),
    disabledButton: document.querySelector('[data-disabled-button]'),
    openModal2Btn: document.querySelector('[data-modal2-open]'),
    closeModal2Btn: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal]'),
    modal2: document.querySelector('[data-modal2]'),
    modal3: document.querySelector('[data-modal-appear]'),
  };

  closeModal2Btn.addEventListener('click', toggleModal);
  openModal2Btn.addEventListener('click', toggleModal2);
  openModal2Btn.addEventListener('click', toggleModal3);
  radioBtn.forEach(button => button.addEventListener('click', toggleModal4));

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
    modal2.classList.toggle('is-close');
    modal3.classList.toggle('is-open');
  }
  function toggleModal2() {
    modal2.classList.toggle('is-close');
  }
  function toggleModal3() {
    modal3.classList.toggle('is-open');
  }
  function toggleModal4() {
    disabledButton.removeAttribute('disabled');
  }
}
openModal_2();
