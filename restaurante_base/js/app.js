const menu = [
  { nombre: 'Bruschetta Clásica',     descripcion: 'Pan tostado con tomate y albahaca fresca',    precio: 4500,  categoria: 'Entrada'      },
  { nombre: 'Tabla de Quesos',         descripcion: 'Selección de quesos importados con mermelada', precio: 7800,  categoria: 'Entrada'      },
  { nombre: 'Lomo al Vino Tinto',      descripcion: 'Lomo de res en reducción de vino tinto',       precio: 15500, categoria: 'Plato Fuerte' },
  { nombre: 'Pasta Carbonara',         descripcion: 'Pasta con tocino, huevo y queso parmesano',    precio: 10200, categoria: 'Plato Fuerte' },
  { nombre: 'Salmón a la Plancha',     descripcion: 'Filete de salmón con vegetales al vapor',      precio: 13800, categoria: 'Plato Fuerte' },
  { nombre: 'Tiramisú',               descripcion: 'Postre italiano con café y mascarpone',          precio: 5200,  categoria: 'Postre'       },
  { nombre: 'Cheesecake de Maracuyá', descripcion: 'Cheesecake cremoso con coulis de maracuyá',    precio: 4800,  categoria: 'Postre'       },
];

const reservas = [];

// Simbolo de moneda usado en el precio de cada platillo
const SIMBOLO_COLON = '₡';


function renderMenu() {

 // Se obtiene el contenedor del menu y se limpia su contenido para volver a dibujar
  const contenedorMenu = document.getElementById('contenedorMenu');
  contenedorMenu.innerHTML = '';
 // Se recorre el arreglo de menu con un for clasico y se crean los elementos HTML para cada platillo
  for (let i = 0; i < menu.length; i++) {
 
    const platillo = menu[i];
 
    const columna = document.createElement('div');
    columna.className = 'col-md-4 col-sm-6';
 
    const card = document.createElement('div');
    card.className = 'card-plato';
 
    const titulo = document.createElement('h3');
    titulo.innerHTML = platillo.nombre;
 // Se crea un elemento p para la descripcion y se le asigna la clase descripcion-plato y el contenido de la descripcion del platillo
    const descripcion = document.createElement('p');
    descripcion.className = 'descripcion-plato';
    descripcion.innerHTML = platillo.descripcion;
 
  // Se formatea el precio con puntos como separador de miles y se crea un elemento p para el precio
    const textoPrecio = platillo.precio.toString();
    let precioFormateado = '';
    let contadorCifras = 0;

 // Se recorre el texto del precio de derecha a izquierda y se agrega un punto cada 3 cifras
    for (let j = textoPrecio.length - 1; j >= 0; j--) {
      precioFormateado = textoPrecio[j] + precioFormateado;
      contadorCifras = contadorCifras + 1;
      if (contadorCifras % 3 === 0 && j !== 0) {
        precioFormateado = '.' + precioFormateado;
      }
    }
 
    // Se crea un elemento p para el precio y se le asigna la clase precio-plato y el contenido del precio formateado con el simbolo de colon
    const precio = document.createElement('p');
    precio.className = 'precio-plato';
    precio.innerHTML = SIMBOLO_COLON + precioFormateado;
 
    const etiquetaCategoria = document.createElement('span');
    etiquetaCategoria.className = 'categoria-plato';
    etiquetaCategoria.innerHTML = platillo.categoria;
 
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(etiquetaCategoria);
 
    columna.appendChild(card);
    contenedorMenu.appendChild(columna);
  }


}


function filtrarCategoria(categoria) {

}

function validarFormulario() {

  return false; // Cambiar según la validación
}

function agregarReserva() {

}


function actualizarResumen() {

}


document.addEventListener('DOMContentLoaded', function () {
  renderMenu();

});


document.getElementById('form-reserva').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recarga de página

});
