//importar para llamar de otro js
import validator from "./validator.js";
const botonV = document.getElementById("boton-V");
const username = document.getElementById("username");
const cardNumber = document.getElementById("cardNumber");//.value=validator.maskify(cardNumber);


//DELIMITAR digitos en la tarjeta
cardNumber.addEventListener('cardNumber',function(){
  if (this.value.length > 16)
    this.value = this.value.slice(0,16);
})

//llmar los valores al momento de verificar
botonV.addEventListener("click", () => {
  const result = validator.isValid(cardNumber.value, username.value);
  if (result === true) {
    console.log("¡Tarjeta Válida!");
    const cardMaskified = validator.maskify(cardNumber.value);
    console.log (cardMaskified);
    alert ("Tarjeta válida: " + cardMaskified);
  } else if (result === false) {
    console.log("¡Tarjeta Inválida!");
    alert ("¡Ingresa una tarjeta válida!");
  }
});

