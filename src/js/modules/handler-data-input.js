import dayjs from "dayjs";
import { getSchedulesByDay } from "./render-schedules.js";
const inputDate = document.getElementById("date");

inputDate.addEventListener("change", (event) => {
  const newDate = inputDate.value;
  getSchedulesByDay(newDate);
});
