import dayjs from "dayjs";
import { openingHours } from "../utils/opening-hours.js";

export function renderHoursTime(
  availableHours = openingHours,
  selectedDate = dayjs().format("YYYY-MM-DD")
) {
  const newSchedulingDataInput = document.getElementById("scheduling-date");
  const newSchedulingHourInput = document.getElementById("scheduling-time");

  const isToday = dayjs(selectedDate).isSame(dayjs(), "day");

  newSchedulingDataInput.min = dayjs().format("YYYY-MM-DD");
  newSchedulingDataInput.value = selectedDate;

  const currentHour = Number(dayjs().format("HH"));
  const nextHour = Number(dayjs().add(1, "hour").format("HH"));
  let selectionMade = false;

  newSchedulingHourInput.innerHTML = "";

  availableHours.forEach((hour) => {
    const [stringHour] = hour.split(":");
    const numericHour = Number(stringHour);

    if (isToday && numericHour <= currentHour) {
      return;
    }

    const option = document.createElement("option");
    option.textContent = hour;
    option.value = hour;

    if (!selectionMade && isToday && numericHour === nextHour) {
      option.selected = true;
      selectionMade = true;
    }

    newSchedulingHourInput.appendChild(option);
  });

  const optionsCount = newSchedulingHourInput.options.length;

  if (optionsCount > 0 && !selectionMade) {
    newSchedulingHourInput.options[0].selected = true;
    selectionMade = true;
  }

  if (isToday && optionsCount === 0) {
    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
    newSchedulingDataInput.value = tomorrow;
    newSchedulingDataInput.dispatchEvent(new Event("change"));
  }
}

// import dayjs from "dayjs";
// import { openingHours } from "../utils/opening-hours.js";

// // const dateInput = document.getElementById("date");

// // dateInput.value = dayjs().format("YYYY-MM-DD");

// export function renderHoursTime(availableHours = openingHours, selectedDate = dayjs().format("YYYY-MM-DD")) {
//   const newSchedulingDataInput = document.getElementById("scheduling-date");
//   const newSchedulingHourInput = document.getElementById("scheduling-time");

//   newSchedulingDataInput.min = dayjs().format("YYYY-MM-DD");
//   newSchedulingDataInput.value = dayjs().format("YYYY-MM-DD");

//   const nextHour = Number(dayjs().add(1, "hour").format("HH"));

//   newSchedulingHourInput.innerHTML = "";

//   openingHours.forEach((hour, index) => {
//     const option = document.createElement("option");
//     option.textContent = hour;
//     option.value = hour;

//     const [stringHour] = hour.split(":");
//     const numericHour = Number(stringHour);

//     if (numericHour == nextHour) {
//       option.selected = true;
//     }

//     newSchedulingHourInput.appendChild(option);
//   });

//   const momentTime = dayjs().startOf("hour").format("HH:mm");
//   const lastHour = openingHours[openingHours.length - 1];

//   if (momentTime === lastHour) {
//     for (const option of newSchedulingHourInput.options) {
//       option.selected = false;
//     }
//     newSchedulingHourInput[0].selected = true;
//     newSchedulingDataInput.min = dayjs().add(1, "day").format("YYYY-MM-DD");
//     newSchedulingDataInput.value = dayjs().add(1, "day").format("YYYY-MM-DD");
//   }
// }
