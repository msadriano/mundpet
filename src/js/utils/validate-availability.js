import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getSchedules } from "../services/get-schedule.js";
import { openingHours } from "./opening-hours.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function validateAvailability(date) {
  const scheduledHours = await getSchedules(date);
  const scheduleTimes = scheduledHours.map((schedule) => {
    const itemScheduled = dayjs.utc(schedule.when).local().format("HH:mm");
    return itemScheduled;
  });

  const setScheduleTimes = new Set(scheduleTimes);
  const newTimes = openingHours.filter(
    (hourAvailable) => !setScheduleTimes.has(hourAvailable)
  );

  return newTimes;
}
