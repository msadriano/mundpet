import { apiConfig } from "./api-config.js";

export async function postNewSchedule(data) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível cadastrar o novo agendamento, tente novamente mais tarde."
    );
  }
}
