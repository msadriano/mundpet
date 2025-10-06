const newSchedulingButton = document.getElementById("newSchedulingButton");
const newSchedulingDialog = document.getElementById("modal-content");
const newSchedulingDialogOverlay = document.getElementById("modal-overlay");
const newSchedulingDialogClose = document.getElementById("window-close");

newSchedulingButton.addEventListener("click", (event) => {
  newSchedulingDialogOverlay.classList.add("modal-overlay-show");
  newSchedulingDialog.showModal();
});

newSchedulingDialogClose.addEventListener("click", (event) => {
  newSchedulingDialogOverlay.classList.remove("modal-overlay-show");
  newSchedulingDialog.close();
});
