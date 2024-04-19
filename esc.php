<?php

// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verificar las credenciales (aquí deberías hacer la consulta a tu base de datos)
    $valid_credentials = verificar_credenciales($username, $password);

    if ($valid_credentials) {
        // Si las credenciales son válidas, redirigir al usuario a la página de inicio
        header("Location: index.php");
        exit();
    } else {
        // Si las credenciales son inválidas, volver al formulario de inicio de sesión con un mensaje de error
        echo "<p>Credenciales incorrectas. Inténtalo de nuevo.</p>";
    }
}

// Función para verificar las credenciales del usuario (simulada)
function verificar_credenciales($username, $password) {
    // Aquí deberías hacer la consulta a tu base de datos para verificar las credenciales
    // Por simplicidad, se utiliza una verificación básica con valores hardcodeados
    $users = array(
        "usuario1" => "contraseña1",
        "usuario2" => "contraseña2"
    );

    // Verificar si el usuario existe y si la contraseña coincide
    return isset($users[$username]) && $users[$username] === $password;
}

?>