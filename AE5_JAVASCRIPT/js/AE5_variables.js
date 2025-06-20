// variables.js

// Declaración de variables - Tipo de dato primitivo
let edad = 50
let valor = 23.7
let apellidos = "Santos"
let meGustaJS = true


console.log("Apellidos:", apellidos);
console.log("¿Te gusta JavaScript?:", meGustaJS);
console.log("Edad:", edad);


// Cambio de tipo de dato
edad = "Cincuenta";
console.log("Edad ahora como texto:", edad);



// Operadores básicos
let suma = 12 + 3;
let concatenacion = "12" + "3";
let resta = 12 - 3;
let multiplicacion = 12 * 3;
let division = 12 / 3;
let divisionDecimal = 12 / 5;

console.log("Suma:", suma);
console.log("Concatenación:", concatenacion);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("División decimal:", divisionDecimal);

// Precedencia de operadores
let resultado = 2 + 4 * 10;
let resultado2 = (2 + 4) * 10;

console.log("Resultado sin paréntesis:", resultado);  // 42
console.log("Resultado con paréntesis:", resultado2); // 60




// Operadores de asignación compuesta
let puntos = 10;
puntos += 5;  
puntos -= 3;
puntos *= 2;
puntos /= 4;

console.log("Puntos finales:", puntos);

// Uso con cadenas
let mensaje = "¡Hola, ";
mensaje += "mundo!";  
console.log(mensaje);

// Tipos de datos
let numero = 42;
let texto = "Hola mundo";
let booleano = false;
let indefinido;
let nulo = null;

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);
