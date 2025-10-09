import dayjs from "dayjs";
import { getSchedulesByDay } from "./render-schedules.js";
import { getSchedules } from "../services/get-schedule.js";

document.addEventListener("DOMContentLoaded", (event) => {
  const now = dayjs().format("YYYY-MM-DD");
  const inputDate = document.getElementById("date");
  inputDate.value = now;
  getSchedulesByDay(now);
});
