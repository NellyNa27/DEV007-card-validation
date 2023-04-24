//importar para llamar de otro js
import validator from "./validator.js";
const botonV = document.getElementById("boton-V");
const username = document.getElementById("username");
const cardNumber = document.getElementById("cardNumber");

botonV.addEventListener("click", () => {
  validator.isValid(cardNumber.value, username.value);
});
