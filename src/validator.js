const validator = {
  // mensajeDesdeIndex(msj){
  //   alert("mensaje recibido:" + msj)
  // },

  isValid: function (creditCardNumber, username) {
    alert("voy a validar: " + creditCardNumber + " de: " + username);
    console.log(creditCardNumber);
    //Array de los numeros de tarjeta ingresados
    const cardNumberArray = Array.from(creditCardNumber);
    console.log(cardNumberArray);
    //Pasar los numeros del array en orden inverso
    const cardNumberArrayReversed = cardNumberArray.reverse();
    console.log(cardNumberArrayReversed);
    //Aplicar operación a los numeros de las posiciones pares, multiplicado x2.
    for (let i = 0; i < cardNumberArrayReversed.length; i++) {
      //verificar si es impar -
      if (i % 2 !== 0) {
        cardNumberArrayReversed[i] = cardNumberArrayReversed[i]*2;
        console.log (cardNumberArrayReversed);
        //suma de digitos despues de multiplicar...
        if (cardNumberArrayReversed[i] >= 10) {
          //pasarlo a string/mas de un elemento -->
          const cardReversed = cardNumberArrayReversed[i].toString();
          console.log(cardReversed);
        //Guardar numero en dos dígitos-string
        cardNumberArrayReversed[i]=(parseInt(cardReversed[0]))+(parseInt(cardReversed)[1]);
      // convertirlos nuevamente en número para sumar los dos digitos.
      console.log(cardReversed);
      }
      }
      /*if (cardNumberArrayReversed[i] >= 10) {
        //pasarlo a string/mas de un elemento -->
        const cardReversed = cardNumberArrayReversed.toString();
        console.log(cardNumberArrayReversed);
      //Guardar numero en dos dígitos-string
      cardNumberArrayReversed[i]=(parseInt(cardReversed[0]))+(parseInt(cardReversed)[1]);
    // convertirlos nuevamente en número para sumar los dos digitos.
    console.log(cardReversed);
    }*/
          }}
        }
      //maskify: function(creditCardNumber) {
        //console.log("voy a enmascarar:" + creditCardNumber);
      //}
  //}
export default validator;
