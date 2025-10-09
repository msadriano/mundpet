import { renderHoursTime } from "./render-date-input.js";

const newSchedulingButton = document.getElementById("newSchedulingButton");
const newSchedulingDialog = document.getElementById("modal-content");
const newSchedulingDialogOverlay = document.getElementById("modal-overlay");
const newSchedulingDialogClose = document.getElementById("window-close");

newSchedulingButton.addEventListener("click", (event) => {
  newSchedulingDialogOverlay.classList.add("modal-overlay-show");
  newSchedulingDialog.showModal();
  renderHoursTime();
});

newSchedulingDialogClose.addEventListener("click", (event) => {
  clearInputs();
  newSchedulingDialogOverlay.classList.remove("modal-overlay-show");
  newSchedulingDialog.close();
});

export function newSchedulingWindowClose() {
  const lastDateInput = document.getElementById("scheduling-date");
  const lastDateSelected = lastDateInput.value;
  clearInputs();
  newSchedulingDialogOverlay.classList.remove("modal-overlay-show");
  newSchedulingDialog.close();
  return lastDateSelected;
}

function clearInputs() {
  const tutorName = document.getElementById("tutor-name");
  const petName = document.getElementById("pet-name");
  const tutorPhone = document.getElementById("tutor-phone");
  const serviceDescription = document.getElementById("service-description");
  const schedulingDate = document.getElementById("scheduling-date");
  const schedulingHour = document.getElementById("scheduling-time");

  tutorName.value = "";
  petName.value = "";
  tutorPhone.value = "";
  serviceDescription.value = "";
  schedulingDate.value = "";
  schedulingHour.value = "";
}
