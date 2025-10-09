import { apiConfig } from "./api-config.js";

export async function cancelSchedule(id) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert(
      "Ocorreu um erro no servidor e não foi possível cancelar o agendamento. Tente novamente mais tarde."
    );
  }
}
