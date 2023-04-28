//importar para llamar de otro js
import validator from "./validator.js";
const botonV = document.getElementById("boton-V");
const username = document.getElementById("username");
const cardNumber = document.getElementById("cardNumber");//.value=validator.maskify(cardNumber);

botonV.addEventListener("click", () => {
  const result = validator.isValid(cardNumber.value, username.value);
  if (result === true) {
    console.log("¡Tarjeta Válida!");
  } else if (result === false) {
    console.log("¡Tarjeta Inválida!");
    alert ("¡Ingresa una tarjeta válida!");
  }
});

cardNumber.addEventListener("input",function(){
  const result=validator.maskify(cardNumber.value);
  console.log(result);
  alert ("Su tarjeta:"+ result + "se va a verificar");
});
