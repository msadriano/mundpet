import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);

export function validateForm(schedulingData) {
  const petName = schedulingData.petName;
  const tutorName = schedulingData.tutorName;
  const tutorPhone = schedulingData.tutorPhone;
  const when = schedulingData.when;

  if (!petName) {
    alert("Entre com um nome de Pet válido.");
    return false;
  }

  if (!tutorName) {
    alert("Entre com um nome de Tutor válido.");
    return false;
  }

  if (!tutorPhone) {
    alert("Entre com um número de telefone válido.");
    return false;
  }

  if (!when) {
    alert("Entre com uma data e horários válidos.");
    return false;
  } else {
    const currentDate = dayjs.utc();
    const dateStored = dayjs.utc(when);

    if (dateStored.isSameOrBefore(currentDate)) {
      alert("Data inválida. Tente novamente.");
      return false;
    }
  }
  return true;
}
