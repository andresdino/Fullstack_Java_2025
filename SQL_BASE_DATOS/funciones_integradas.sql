CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    salario DECIMAL(10,2),
    departamento VARCHAR(50),
    fecha_ingreso DATE
);

INSERT INTO empleados (nombre, correo, salario, departamento, fecha_ingreso)
VALUES 
('Ana López', 'ana@empresa.com', 2500.50, 'Ventas', '2022-03-15'),
('Carlos Ruiz', 'carlos@empresa.com', 3000.00, 'Marketing', '2021-07-01'),
('María Torres', 'maria@empresa.com', 3500.75, 'Ventas', '2020-11-20'),
('Luis Gómez', 'luis@empresa.com', 2800.00, 'TI', '2023-01-10'),
('Sofía Pérez', 'sofia@empresa.com', 4000.00, 'TI', '2020-01-05');

SELECT * FROM empleados;


SELECT CONCAT(nombre, '/', correo) AS concatenacion
FROM empleados;

SELECT nombre, length(nombre) AS cant_caracteres
FROM empleados;

SELECT nombre, substring(nombre, 1, 5) AS sub_texto
FROM empleados;

SELECT nombre, upper(nombre) AS nombre_mayuscula, lower(nombre) as nombre_minuscula
FROM empleados;



SELECT SUM(salario) AS suma_salarios
FROM empleados;

SELECT avg(salario) AS promedio_salarios
FROM empleados;

SELECT MAX(salario) AS salario_alto, MIN(salario) salario_bajo
FROM empleados;


SELECT NOW() AS fecha_hora_actual;

SELECT nombre, DATE_FORMAT(fecha_ingreso, '%d-%m-%y') AS formato_actual
FROM empleados;




SELECT * FROM empleados
ORDER BY nombre DESC;

SELECT * FROM empleados
ORDER BY nombre ASC;

SELECT nombre, departamento, salario
FROM empleados
ORDER BY departamento ASC, salario DESC;

SELECT nombre, departamento, fecha_ingreso
FROM empleados
WHERE departamento = 'TI'
ORDER BY fecha_ingreso DESC;


SELECT departamento, COUNT(*) AS total_empleados
FROM empleados
group by departamento;

SELECT departamento, AVG(salario) AS primedio_salario
FROM empleados
group by departamento;


SELECT nombre, salario
FROM empleados
ORDER BY nombre
LIMIT 3;

SELECT nombre, salario
FROM empleados
ORDER BY nombre
LIMIT 3 OFFSET 3;





