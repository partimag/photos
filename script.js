const modals = document.querySelector(".modal");
const overlays = document.querySelector(".overlay");
const openModal = () => {
  console.log("modal is open");
  modals.classList.add("active");
  overlays.classList.add("overlayactive");
};
const closeModal = () => {
  modals.classList.remove("active");
  overlays.classList.remove("overlayactive");
};
