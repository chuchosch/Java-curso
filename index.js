// caminata
// console.log("Bienvenido a su caminata");
// let pasos = prompt("Cuantos pasos quiere hacer?");
// let i = 0;
// while (i < pasos) {
//     i++;
//     alert(`usted va ${i} pasos caminados`);
//     if  (i%2 == 0){
//       alert("Lleva un numero par de pasos")
//     }
//     else{
//     alert("Lleva un numero impar de pasos");
//     }
// }

// entradas
// console.log("Cantidad de entradas");
// let cantidad = prompt("Cuantas entradas queres?");
// if (cantidad > 0){
//   alert(`usted quiere ${cantidad} entradas`);
// }
// else { 
//   alert("vuelva a ingresar una cantidad")
// }


// pasos diarios
// console.log("Pasos diarios");
// let pasos = parseInt(prompt("Cuantos pasos hiciste?"))
// let suma = 0
// while (suma < 60) {
//   suma = pasos + suma
//   pasos = parseInt(prompt(`vas ${suma} pasos, camina mas`))
//   if(suma+pasos>=60){
//     break
//   }
// }
// alert("objetivo cumplido")

// suma
console.log("goles")
let goles = parseInt(prompt("Cuantos goles hiciste"))
while (goles > 0) {
  alert(`vas ${goles} goles, sos normal`)
  goles++;
  if(goles >= 10){
    break
  }
}
alert("sos bueno")

