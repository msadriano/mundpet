import { cancelSchedule } from "../services/cancel-schedule";
import { getSchedulesByDay } from "../modules/render-schedules.js";

const periods = document.querySelectorAll(".scheduled-period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("col-cancel")) {
      const itemId = event.target.closest("li").dataset.scheduleId;
      await cancelSchedule(itemId);
      const inputDate = document.getElementById("date");
      const now = inputDate.value;
      getSchedulesByDay(now);
    }
  });
});
