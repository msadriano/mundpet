import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function getSchedules(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    if (!response.ok) {
      throw new Error(
        `Erro de rede: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    const schedulesDay = data.filter((schedule) => {
      return dayjs
        .utc(schedule.when)
        .tz("America/Sao_Paulo")
        .format("YYYY-MM-DD")
        .includes(date);
    });

    schedulesDay.sort((a, b) => {
      const timeStampA = new Date(a.when).getTime();
      const timeStampB = new Date(b.when).getTime();
      return timeStampA - timeStampB;
    });

    return schedulesDay;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os dados solicitados. Tente mais tarde.");
  }
}
