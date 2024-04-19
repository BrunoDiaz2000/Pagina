<?php
$servername = "localhost"; // Cambia esto si tu base de datos no está en el mismo servidor
$username = "root"; // Usuario de la base de datos
$password = "8833"; // Contraseña de la base de datos
$database = "SGIS"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";
?>