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
let listaVisible = false;

function toggleLista() {
    const lista = document.getElementById('carrito-desplegable');
    if (!listaVisible) {
        lista.style.display = 'block'; // Mostrar lista
    } else {
        lista.style.display = 'none'; // Ocultar lista
    }
    listaVisible = !listaVisible; // Cambiar estado
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


function mostrarMensaje() {
    alert("Por favor, inicie sesión o regístrese para continuar.");
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






















// Función para agregar un producto al carrito
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

    // Guardar los productos del carrito en el almacenamiento local
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ precio: precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar los productos del carrito al cambiar de sección
function cargarProductosDelCarrito() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar los productos del carrito al DOM
    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    var total = 0;
    carrito.forEach(function (producto) {
        total += producto.precio;
        var li = document.createElement('li');
        li.textContent = 'Producto: $' + producto.precio;
        cartItems.appendChild(li);
            // Crear un botón para quitar el producto
            var btnQuitar = document.createElement('button');
            btnQuitar.textContent = 'Quitar';
            btnQuitar.onclick = function() {
                quitarDelCarrito(producto.precio, li);
            };
            
            // Agregar el botón al elemento de la lista
            li.appendChild(btnQuitar);
            
            cartItems.appendChild(li);
        
    });

    // Mostrar el total del carrito
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Llamar a la función para cargar los productos del carrito al cargar la página
window.onload = cargarProductosDelCarrito;


// Función para quitar un producto del carrito
function quitarDelCarrito(precio, elemento) {
    // Eliminar el elemento del DOM
    elemento.remove();

    // Actualizar el total
    var totalActual = parseFloat(document.getElementById("cart-total").textContent);
    totalActual -= precio;
    document.getElementById("cart-total").textContent = totalActual.toFixed(2);

    // Actualizar el almacenamiento local
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(function (producto) {
        return producto.precio !== precio;
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

