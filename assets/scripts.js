const modalOverlay = document.querySelector('.modal-overlay');
const iframe = modalOverlay.querySelector("iframe");

const openModal = () => {
  modalOverlay.classList.add('active');
  iframe.src = "https://www.youtube.com/embed/ieaXFu4wcXI";
};

const closeModal = () => {
  modalOverlay.classList.remove("active");
  iframe.src = "";
};