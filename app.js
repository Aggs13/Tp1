// =======================
// Programa principal
// =======================
//Importamos desde la librería
const { input, close } = require("./lib/nodeImperativo");

// Función principal 
async function main() {

let op;
let num1
let num2
function suma(num1,num2){
    const resultado = num1 + num2
    console.log(num1+" + "+ num2+" = "+resultado)
}

function resta(num1,num2){
  const resultado = num1 - num2
  console.log("---------Resultado------------")
  console.log(num1+" - "+ num2+" = "+resultado)
  console.log("------------------------")

}


do{
console.log("-------------")
console.log("1-Suma")
console.log("2-Resta")
console.log("3-Multiplicacion")
console.log("4-Division")
console.log("-------------")
console.log("Ingrese el numero de la operacion: ")
op = await input("> ");


switch(op){
  case "1":
    num1 = parseFloat(await input("Ingrese un numero: ")) 
    num2 = parseFloat(await input("Ingrese un numero: ")) 
    suma(num1,num2)
  break;

  case"2":
    num1 = parseFloat(await input("Ingrese un numero: ")) 
    num2 = parseFloat(await input("Ingrese un numero: ")) 
    resta(num1,num2)
  break;

  case"3":
  break;

  case"4":
  break;

  case"0":
  break;
}


}while(op !== "0")

  close(); // cerramos cuando ya no se necesita
}

// Ejecutar el programa
main();
