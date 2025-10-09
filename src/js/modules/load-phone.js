import { maskPhone, isValidPhone } from "../utils/validate-phone.js";

const inputPhone = document.getElementById("tutor-phone"); // ID do seu input

inputPhone.addEventListener("input", (event) => {
  event.target.value = maskPhone(event.target.value);
});

inputPhone.addEventListener("blur", (event) => {
  if (!isValidPhone(event.target.value)) {
    alert("O número do telefone digitado é inválido, tente novamente.");
    return "";
  }
});
