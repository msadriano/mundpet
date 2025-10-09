import { validateAvailability } from "../utils/validate-availability.js";
import { renderHoursTime } from "./render-date-input.js";

const inputDateModal = document.getElementById("scheduling-date");

inputDateModal.addEventListener("change", async (event) => {
  const date = inputDateModal.value;

  const availableHours = await validateAvailability(date);

  renderHoursTime(availableHours, date);
});
