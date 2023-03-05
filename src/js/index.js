const modalOverlay = document.querySelector('.modal-overlay');
const modal = modalOverlay.querySelector(".modal");

const openModal = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('frameborder', 0);
  modal.insertAdjacentElement('afterbegin', iframe);
  iframe.src = "https://www.youtube.com/embed/ieaXFu4wcXI";
  modalOverlay.classList.add('active');
};

const closeModal = () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector('iframe').remove();
};