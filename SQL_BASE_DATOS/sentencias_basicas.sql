CREATE TABLE clientes (
	id INT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100)
);

ALTER TABLE clientes
MODIFY COLUMN id INT AUTO_INCREMENT;

CREATE TABLE pedidos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    total DECIMAL(10, 2),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);


INSERT INTO clientes (nombre, correo) VALUES
('hector sanchez', 'hector@gmail.com'),
('Laura Martínez', 'laura.martinez@example.com'),
('Andrés Pérez', 'andres.perez@example.com'),
('Sofía Ramírez', 'sofia.ramirez@example.com'),
('Miguel Torres', 'miguel.torres@example.com');

SELECT * FROM clientes;


INSERT INTO pedidos (fecha, total, id_cliente) VALUES
('2025-06-01', 1200.00, 1),
('2025-06-02', 450.50, 1),
('2025-06-03', 850.00, 2),
('2025-06-03', 999.99, 3),
('2025-06-04', 300.00, 3),
('2025-06-05', 1500.00, 4);

SELECT * FROM pedidos;

SELECT nombre, correo FROM clientes;

SELECT nombre, correo FROM clientes WHERE id = 1;

SELECT * FROM pedidos WHERE total > 500;

SELECT SUM(total) AS suma_total  FROM pedidos; 

SELECT COUNT(*) AS cantidad_pedidos FROM pedidos;

SELECT id_cliente, SUM(total) AS total_compras_cliente
FROM pedidos
GROUP BY id_cliente;


SELECT c.nombre, p.fecha, p.total
FROM  clientes c
LEFT JOIN pedidos p ON c.id = p.id_cliente;

SELECT c.nombre, p.fecha, p.total
FROM clientes c
INNER JOIN pedidos p ON c.id = p.id_cliente;

SELECT clientes.nombre, pedidos.fecha, pedidos.total
FROM clientes 
INNER JOIN pedidos ON clientes.id = pedidos.id_cliente;
