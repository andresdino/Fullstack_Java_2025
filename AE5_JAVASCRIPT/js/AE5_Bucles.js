console.log("---- Bucle FOR: contar de 0 a 2 ----");

for (let i = 0; i < 3; i++) {
  console.log("i vale:", i);
}

console.log("\n---- Bucle FOR: contar de 10 a 1 ----");

for (let i = 10; i > 0; i--) {
  console.log("i vale:", i);
}

console.log("\n---- Bucle WHILE: contar de 0 a 2 ----");

let j = 0;
while (j < 3) {
  console.log("j vale:", j);
  j++; // Incrementamos para evitar bucle infinito
}

console.log("\n---- Ejemplo de bucle infinito (comentado) ----");

// ⚠️ ¡Este código NO se debe ejecutar! Es solo para mostrar el error
/*
let k = 0;
while (k < 3) {
  console.log("k vale:", k);
  // ERROR: falta k++
}
*/

console.log("\n---- Operadores ++ y -- ----");

let contador = 5;
console.log("Valor inicial:", contador);

contador++; // incremento
console.log("Después de contador++:", contador);

contador--; // decremento
console.log("Después de contador--:", contador);
