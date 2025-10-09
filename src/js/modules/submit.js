import dayjs from "dayjs";
import { createScheduleData } from "../utils/get-form-data.js";
import { postNewSchedule } from "../services/post-new-schedule.js";
import { newSchedulingWindowClose } from "../modules/handlerModal.js";
import { getSchedulesByDay } from "./render-schedules.js";
import { validateForm } from "../utils/validate-form.js";

const button = document.getElementById("schedule-button");
const form = document.getElementById("scheduling-form");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const schedulingData = createScheduleData();
    const validate = validateForm(schedulingData);
    if (validate) {
      await postNewSchedule(schedulingData);
      const newDate = newSchedulingWindowClose();
      const inputDate = document.getElementById("date");
      inputDate.value = newDate;
      getSchedulesByDay(newDate);
    }
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível fazer o cadastro do serviço. Tente novamente mais tarde."
    );
  }
};
