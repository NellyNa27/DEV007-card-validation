const validator = {
  // mensajeDesdeIndex(msj){
  //   alert("mensaje recibido:" + msj)
  // },

  isValid: function (creditCardNumber, username) {
    //alert("voy a validar: " + creditCardNumber + " de: " + username);
    console.log(creditCardNumber);
    console.log(username);
    //Array de los numeros de tarjeta ingresados
    const cardNumberArray = Array.from(creditCardNumber);
    console.log(cardNumberArray);
    //Pasar los numeros del array en orden inverso
    const cardNumberArrayReversed = cardNumberArray.reverse().map(Number);
    console.log(cardNumberArrayReversed);
    //Aplicar operación a los numeros de las posiciones pares, multiplicado x2.
    for (let i = 0; i < cardNumberArrayReversed.length; i++) {
      //verificar si es impar -
      if (i % 2 !== 0) {
        cardNumberArrayReversed[i] = cardNumberArrayReversed[i] * 2;
        console.log(cardNumberArrayReversed);
        //suma de digitos despues de multiplicar...
        if (cardNumberArrayReversed[i] >= 10) {
          //pasarlo a string/mas de un elemento -->git
          const cardReversed = cardNumberArrayReversed[i].toString();
          console.log(cardReversed);
          //Guardar numero en dos dígitos-string
          // convertirlos nuevamente en número para sumar los dos digitos.
          const firstDigit = parseInt(cardReversed[0]);
          const secondDigit = parseInt(cardReversed[1]);
          console.log(firstDigit);
          console.log(secondDigit);
          //Sumar los dos digitos para poder hacer un nuevo arreglo
          const sumD = firstDigit + secondDigit;
          cardNumberArrayReversed[i] = sumD;
        }
      }
    }
    console.log(cardNumberArrayReversed);
    //Sumar todo el arreglo
    const sumF = cardNumberArrayReversed.reduce((a, b) => a + b, 0);
    console.log(sumF);
    return sumF % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    console.log(creditCardNumber);

    const cuatroNum = creditCardNumber.slice(-4);
    console.log(cuatroNum);
    const primerosNum = creditCardNumber.slice(0, -4);
    console.log(primerosNum);
    const numMask = primerosNum.replace(/./g, "#");
    console.log(numMask);

    console.log(numMask+cuatroNum);
    return numMask+cuatroNum;
  },
};

export default validator;
