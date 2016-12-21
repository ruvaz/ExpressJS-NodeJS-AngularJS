"use strict"
console.log(process.argv)

var args = process.argv.slice(2)
console.log(args);

var result ="\n \t Introduce bien los parametros";

var operacion = args[0]
var num1 =parseFloat(args[1])
var num2 =parseFloat(args[2])


if(args.length ==3){
  switch (operacion) {
      case 'mas':
        result = "Suma: "+parseFloat(num1+num2)
      break;

      case 'menos':
          result = "Suma: "+parseFloat(num1-num2)
        break;

      case 'por':
        result = "Suma: "+parseFloat(num1*num2)
      break;

      case 'entre':
          result = "Suma: "+parseFloat(num1/num2)
        break;
  }
}

console.log(result)
