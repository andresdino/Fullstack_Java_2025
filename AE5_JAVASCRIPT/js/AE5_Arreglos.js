// Crear un arreglo con datos de un empleado
let userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com"];
console.log("Datos iniciales:", userData);

// Agregar un nuevo dato al final
userData.push("Piloto");
console.log("Después de .push('Piloto'):", userData);

// Actualizar un elemento del arreglo (cambiar 'Piloto' por 'Fotógrafo')
userData[3] = "Fotógrafo";
console.log("Después de actualizar el pasatiempo:", userData);

// Eliminar el último elemento del arreglo
userData.pop();
console.log("Después de .pop():", userData);

// Ver cantidad de elementos con .length
console.log("Cantidad de datos del usuario:", userData.length);

// Acceder a elementos usando índices
console.log("Nombre:", userData[0]);
console.log("Correo:", userData[2]);

// Ejemplo con arreglo de compras
let comprasSemanaFeb15 = [45.0, 62.5, 30.0, 90.2, 12.0];
console.log("\nLista de compras:", comprasSemanaFeb15);

// Acceder al primer y último elemento
console.log("Primera compra: $" + comprasSemanaFeb15[0]);

let numeroDeCompras = comprasSemanaFeb15.length;
let ultimaCompra = comprasSemanaFeb15[numeroDeCompras - 1];
console.log("Última compra: $" + ultimaCompra);

// Calcular total de gastos con un bucle
let total = 0;
for (let i = 0; i < comprasSemanaFeb15.length; i++) {
  total += comprasSemanaFeb15[i];
}
console.log("Gasto total de la semana: $" + total);

// Demostración de arreglo con tipos mixtos
let cosasVariadas = ["Texto", 99, true, [1, 2, 3]];
console.log("\nArreglo mixto:", cosasVariadas);
console.log("Elemento dentro del subarreglo:", cosasVariadas[3][1]); // Accede al 2
