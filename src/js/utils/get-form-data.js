import dayjs from "dayjs";

export function createScheduleData() {
  const tutorName = document.getElementById("tutor-name");
  const petName = document.getElementById("pet-name");
  const tutorPhone = document.getElementById("tutor-phone");
  const serviceDescription = document.getElementById("service-description");
  const schedulingDate = document.getElementById("scheduling-date");
  const schedulingHour = document.getElementById("scheduling-time");

  const id = String(new Date().getTime());
  const [hour, minute] = schedulingHour.value.split(":");
  const when = dayjs(schedulingDate.value)
    .add(hour, "hour")
    .add(minute, "minute")
    .toISOString();

  const scheduleData = {
    id: id,
    petName: petName.value,
    tutorName: tutorName.value,
    tutorPhone: tutorPhone.value,
    serviceDescription: serviceDescription.value,
    when: when,
  };

  return scheduleData;
}
