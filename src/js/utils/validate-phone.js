export function maskPhone(value) {
  const cleanedPhone = value.replace(/\D/g, "").substring(0, 11);

  let formatedPhone = "";

  if (cleanedPhone.length === 0) {
    return "";
  }

  if (cleanedPhone.length > 0) {
    formatedPhone = `(${cleanedPhone.substring(0, 2)}`;
  }

  if (cleanedPhone.length >= 3) {
    formatedPhone += `) ${cleanedPhone.substring(2, 3)}`;
  }

  if (cleanedPhone.length > 3) {
    formatedPhone += ` ${cleanedPhone.substring(3, 7)}`;
  }

  if (cleanedPhone.length > 7) {
    formatedPhone += `-${cleanedPhone.substring(7, 11)}`;
  }

  return formatedPhone;
}

export function isValidPhone(phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
  return cleanedNumber.length === 11;
}
