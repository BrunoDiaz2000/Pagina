//Scroll
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores de nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí puedes realizar la validación de los datos ingresados
    // Por simplicidad, vamos a imprimir los valores en la consola
    console.log("Nombre de usuario: " + username);
    console.log("Contraseña: " + password);
  
    // Aquí puedes agregar la lógica para verificar las credenciales, por ejemplo, enviar una solicitud al servidor
  
    // Después de verificar las credenciales, podrías redirigir al usuario a otra página
    // window.location.href = "pagina-secreta.html";
  });
  function agregarAlCarrito(precio) {
    // Crear un nuevo elemento de lista
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Productos - $" + precio;

    // Agregar el nuevo elemento al carrito
    document.getElementById("cart-items").appendChild(nuevoItem);

    // Actualizar el total
    var totalActual = parseFloat(document.getElementById("cart-total").textContent);
    totalActual += precio;
    document.getElementById("cart-total").textContent = totalActual.toFixed(2);
}

// Función para mostrar el submenú "Marcas" cuando se hace clic
function mostrarSubMenuInterno(submenuId) {
    var submenuInterno = document.getElementById(submenuId);
    submenuInterno.classList.toggle("active");
}

// Función para mostrar u ocultar el menú en pantallas pequeñas
function mostrarOcultarMenu() {
    var menu = document.querySelector('.contenedor-header .navegador ul');
    menu.classList.toggle('active');
}

// Función para ocultar el menú en pantallas pequeñas después de hacer clic en un enlace
function seleccionar() {
    var menu = document.querySelector('.contenedor-header .navegador ul');
    menu.classList.remove('active');
}

// Función para mostrar u ocultar los submenús
function mostrarSubMenu(menuId) {
    var subMenu = document.getElementById(menuId + 'SubMenu');
    if (subMenu) {
        subMenu.classList.toggle('active');
    }
}

