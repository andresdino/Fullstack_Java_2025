// Booleanos
let esLunes = true;
let esFinDeSemana = false;
console.log("¿Es lunes?:", esLunes); // true
console.log("¿Es fin de semana?:", esFinDeSemana); // false

// Operadores de comparación
let numero = 10;
console.log("¿El número es mayor que 5?:", numero > 5); // true

let edad = 20;
console.log("¿Es mayor o igual a 18?:", edad >= 18); // true

// Igualdad débil vs estricta
console.log("¿'5' == 5?:", "5" == 5);   // true (compara valor)
console.log("¿'5' === 5?:", "5" === 5); // false (compara valor y tipo)

// Condicional simple
let esDeDia = true;

if (esDeDia) {
  console.log("¡Explora el mundo!");
}

if (esDeDia == true) {
  console.log("Además, ¡usa una gorra!");
}

// if - else
let mascota = "perro";

if (mascota == "perro") {
  console.log("¡Tienes un amigo peludo!");
} else {
  console.log("¡Tienes un compañero misterioso!");
}

// if - else if - else
let clima = "lluvioso";

if (clima == "soleado") {
  console.log("¡Es un día perfecto para un picnic!");
} else if (clima == "lluvioso") {
  console.log("¡Hora de saltar en charcos!");
} else {
  console.log("¡Vamos a tirarnos en trineo en la nieve!");
}

// Operadores lógicos
let temperatura = 25;
let estaLloviendo = false;

if (temperatura >= 20 && !estaLloviendo) {
  console.log("¡Este es un buen día para dar un paseo!");
}

if (temperatura >= 20 || !estaLloviendo) {
  console.log("¡Podría ser un buen día para salir!");
}
