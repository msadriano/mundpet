import dayjs from "dayjs";
import { getSchedules } from "../services/get-schedule.js";

export async function getSchedulesByDay(date) {
  const periodMorning = document.getElementById("morning");
  const periodAfternoon = document.getElementById("afternoon");
  const periodNight = document.getElementById("night");

  periodMorning.innerHTML = "";
  periodAfternoon.innerHTML = "";
  periodNight.innerHTML = "";

  const response = await getSchedules(date);

  response.forEach((item) => {
    const currentPeriod = getPeriodNow(dayjs(item.when).format("HH"));
    const scheduleItem = createElement(item);
    switch (currentPeriod) {
      case "morning":
        periodMorning.appendChild(scheduleItem);
        break;
      case "afternoon":
        periodAfternoon.appendChild(scheduleItem);
        break;
      case "night":
        periodNight.appendChild(scheduleItem);
        break;
      default:
        break;
    }
  });
}

function getPeriodNow(now) {
  if (now <= 12) {
    return "morning";
  } else if (now <= 18) {
    return "afternoon";
  } else {
    return "night";
  }
}

function createElement(item) {
  const parentElement = document.createElement("li");
  const spanScheduleData = document.createElement("span");
  const spanService = document.createElement("span");
  const spanCancelService = document.createElement("span");

  spanScheduleData.classList.add("schedule-data");
  spanService.classList.add("col-service");
  spanCancelService.classList.add("col-cancel");
  parentElement.dataset.scheduleId = item.id;

  parentElement.appendChild(spanScheduleData);
  parentElement.appendChild(spanService);
  parentElement.appendChild(spanCancelService);

  spanService.textContent = item.serviceDescription;
  spanCancelService.textContent = "Remover agendamento";

  spanScheduleData.innerHTML = `<span class="col-hour">${dayjs
    .utc(item.when)
    .local()
    .format("HH:mm")}</span>
    <span class="col-client"><span class="col-pet">${item.petName}</span> / ${
    item.tutorName
  }</span>`;

  return parentElement;
}
