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

// ---------- RENDERIZAR MENU ----------
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

// ---------- FILTRAR PLATILLOS POR CATEGORIA ----------
function filtrarCategoria(categoria) {

  const contenedorMenu = document.getElementById('contenedorMenu');
  contenedorMenu.innerHTML = '';
 
  // Se construye un arreglo temporal con los platillos que coinciden
  const platillosFiltrados = [];
 
  for (let i = 0; i < menu.length; i++) {
    if (categoria === 'Todos' || menu[i].categoria === categoria) {
      platillosFiltrados.push(menu[i]);
    }
  }
 
  // Se dibuja cada platillo filtrado (mismo procedimiento que en renderMenu)
  for (let i = 0; i < platillosFiltrados.length; i++) {
 
    const platillo = platillosFiltrados[i];
 
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
 
  // ---------- Se marca visualmente el boton activo ----------
  const btnTodos = document.getElementById('btnTodos');
  const btnEntradas = document.getElementById('btnEntradas');
  const btnPlatosFuertes = document.getElementById('btnPlatosFuertes');
  const btnPostres = document.getElementById('btnPostres');
 
  // Primero se dejan los 4 botones sin la clase "activo"
  btnTodos.className = 'btn-filtro';
  btnEntradas.className = 'btn-filtro';
  btnPlatosFuertes.className = 'btn-filtro';
  btnPostres.className = 'btn-filtro';
 
  // Luego se le agrega "activo" solamente al boton que corresponde
  if (categoria === 'Todos') {
    btnTodos.className = 'btn-filtro activo';
  } else if (categoria === 'Entrada') {
    btnEntradas.className = 'btn-filtro activo';
  } else if (categoria === 'Plato Fuerte') {
    btnPlatosFuertes.className = 'btn-filtro activo';
  } else if (categoria === 'Postre') {
    btnPostres.className = 'btn-filtro activo';
  }
}

// ---------- VALIDACION FORMULARIO DE RESERVA ----------
function validarFormulario() {
  
  let formularioValido = true;
 
  // Se obtienen los elementos del formulario y los elementos donde se mostraran los errores
  const inputNombre = document.getElementById('nombre');
  const inputCorreo = document.getElementById('correo');
  const inputFecha = document.getElementById('fecha');
  const inputPersonas = document.getElementById('personas');
  const errorNombre = document.getElementById('errorNombre');
  const errorCorreo = document.getElementById('errorCorreo');
  const errorFecha = document.getElementById('errorFecha');
  const errorPersonas = document.getElementById('errorPersonas');
  const btnReservar = document.getElementById('btnReservar');
 
  const nombre = inputNombre.value;
  const correo = inputCorreo.value;
  const fecha = inputFecha.value;
  const personas = inputPersonas.value;
 
  // ---------- VALIDAR NOMBRE ----------
  // Obligatorio, minimo 5 caracteres, solo letras y espacios.
  // Se revisa caracter por caracter con un for, en vez de usar una expresion regular.
  if (nombre === '') {
    errorNombre.innerHTML = 'El nombre es obligatorio.';
    formularioValido = false;
  } else if (nombre.length < 5) {
    errorNombre.innerHTML = 'El nombre debe tener al menos 5 caracteres.';
    formularioValido = false;
  } else {
 
    let nombreValido = true;
 
    // Se recorre cada caracter del nombre y se valida que sea una letra o un espacio
    for (let i = 0; i < nombre.length; i++) {
      const caracter = nombre.charAt(i).toLowerCase();
      const esLetra = (caracter >= 'a' && caracter <= 'z') || caracter === ' ' ||
        caracter === 'á' || caracter === 'é' || caracter === 'í' || caracter === 'ó' ||
        caracter === 'ú' || caracter === 'ñ';
 
      if (!esLetra) {
        nombreValido = false;
      }
    }
 // Si se encontro un caracter invalido, se muestra el mensaje de error
    if (!nombreValido) {
      errorNombre.innerHTML = 'El nombre solo puede contener letras y espacios.';
      formularioValido = false;
    } else {
      errorNombre.innerHTML = '';
    }
  }
 
  // ---------- VALIDAR CORREO ----------
  // Obligatorio, debe contener un "@" y un "." despues del "@".
  // Se busca con indexOf en vez de una expresion regular.
  if (correo === '') {
    errorCorreo.innerHTML = 'El correo es obligatorio.';
    formularioValido = false;
  } else {
 
    const posicionArroba = correo.indexOf('@');
    let correoValido = true;
 
    if (posicionArroba <= 0) {
      // No tiene "@" o esta al inicio del texto
      correoValido = false;
    } else {
      const posicionPunto = correo.indexOf('.', posicionArroba);
      if (posicionPunto === -1 || posicionPunto === correo.length - 1) {
        // No tiene un "." despues del "@", o el punto queda al final
        correoValido = false;
      }
    }
 
    if (!correoValido) {
      errorCorreo.innerHTML = 'El formato del correo no es válido.';
      formularioValido = false;
    } else {
      errorCorreo.innerHTML = '';
    }
  }
 
  // ---------- VALIDAR FECHA ----------
  // Obligatoria, no puede ser una fecha pasada.
  // El input fecha entrega el texto en formato "AAAA-MM-DD", por lo que se puede
  // comparar directamente como texto contra la fecha de hoy armada igual.
  if (fecha === '') {
    errorFecha.innerHTML = 'La fecha es obligatoria.';
    formularioValido = false;
  } else {
 
    const hoy = new Date();
    const anio = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();
 
    if (mes < 10) {
      mes = '0' + mes;
    }
    if (dia < 10) {
      dia = '0' + dia;
    }
 
    const fechaHoyTexto = anio + '-' + mes + '-' + dia;
 
    if (fecha < fechaHoyTexto) {
      errorFecha.innerHTML = 'La fecha no puede ser pasada.';
      formularioValido = false;
    } else {
      errorFecha.innerHTML = '';
    }
  }
 
  // ---------- VALIDAR NUMERO DE PERSONAS ----------
  // Obligatorio, entre 1 y 20.
  if (personas === '') {
    errorPersonas.innerHTML = 'El número de personas es obligatorio.';
    formularioValido = false;
  } else if (personas < 1 || personas > 20) {
    errorPersonas.innerHTML = 'Debe ser un número entre 1 y 20.';
    formularioValido = false;
  } else {
    errorPersonas.innerHTML = '';
  }
 
  // Se habilita o deshabilita el boton segun el resultado
  btnReservar.disabled = !formularioValido;
 
  return formularioValido;
}

// ---------- AGREGAR RESERVA ----------
function agregarReserva() {

  // Se obtienen los elementos del formulario
  const inputNombre = document.getElementById('nombre');
  const inputCorreo = document.getElementById('correo');
  const inputFecha = document.getElementById('fecha');
  const inputHora = document.getElementById('hora');
  const inputPersonas = document.getElementById('personas');
 
  // Se construye el objeto con los datos de la nueva reserva
  const nuevaReserva = {
    nombre: inputNombre.value,
    correo: inputCorreo.value,
    fecha: inputFecha.value,
    hora: inputHora.value,
    personas: parseInt(inputPersonas.value)
  };
 
  // Se guarda la reserva en el arreglo global, con push como se vio en clase
  reservas.push(nuevaReserva);
 
  // Se crea la fila de la tabla
  const cuerpoTablaReservas = document.getElementById('cuerpoTablaReservas');
 
  const fila = document.createElement('tr');
  fila.className = 'fila-reserva';
 
  // Si la reserva tiene 6 o mas personas, se resalta la fila
  if (nuevaReserva.personas >= 6) {
    fila.className = 'fila-reserva grupo-grande';
  }
 
  const celdaNombre = document.createElement('td');
  celdaNombre.innerHTML = nuevaReserva.nombre;
 
  const celdaCorreo = document.createElement('td');
  celdaCorreo.innerHTML = nuevaReserva.correo;
 
  const celdaFecha = document.createElement('td');
  celdaFecha.innerHTML = nuevaReserva.fecha;
 
  const celdaHora = document.createElement('td');
  celdaHora.innerHTML = nuevaReserva.hora;
 
  const celdaPersonas = document.createElement('td');
  celdaPersonas.innerHTML = nuevaReserva.personas;
 
  // Se agregan las celdas a la fila y la fila al cuerpo de la tabla
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaCorreo);
  fila.appendChild(celdaFecha);
  fila.appendChild(celdaHora);
  fila.appendChild(celdaPersonas);
 
  cuerpoTablaReservas.appendChild(fila);
 
  // Se actualiza el resumen con la nueva informacion
  actualizarResumen();
 
  // Se limpia el formulario despues de agregar la reserva
  document.getElementById('form-reserva').reset();
  document.getElementById('btnReservar').disabled = true;
 
  // Se limpian los mensajes de error que pudieran quedar
  document.getElementById('errorNombre').innerHTML = '';
  document.getElementById('errorCorreo').innerHTML = '';
  document.getElementById('errorFecha').innerHTML = '';
  document.getElementById('errorPersonas').innerHTML = '';
}

// ---------- ACTUALIZAR RESUMEN DE RESERVAS ----------
function actualizarResumen() {

  const resumenReservas = document.getElementById('resumenReservas');
 
  // Si todavia no hay reservas, se muestra el mensaje por defecto
  if (reservas.length === 0) {
    resumenReservas.innerHTML = '<p>Aún no hay reservas registradas.</p>';
    return;
  }
 
  // Total de reservas registradas
  const totalReservas = reservas.length;
 
  // Total de personas esperadas
  let totalPersonas = 0;
  for (let i = 0; i < reservas.length; i++) {
    totalPersonas = totalPersonas + reservas[i].personas;
  }
 
  // Reserva con mayor numero de personas
  let reservaMayor = reservas[0];
  for (let i = 1; i < reservas.length; i++) {
    if (reservas[i].personas > reservaMayor.personas) {
      reservaMayor = reservas[i];
    }
  }
 // Se construye el contenido HTML del resumen y se asigna
  resumenReservas.innerHTML =
    '<p><strong>Total de reservas:</strong> ' + totalReservas + '</p>' +
    '<p><strong>Total de personas esperadas:</strong> ' + totalPersonas + '</p>' +
    '<p><strong>Reserva con más personas:</strong> ' + reservaMayor.nombre +
    ' (' + reservaMayor.personas + ' personas)</p>';

}

// ---------- EVENTOS ----------
 
document.addEventListener('DOMContentLoaded', function () {
 
  // Se muestra el menu completo al cargar
  renderMenu();
 
  // Se muestra el resumen inicial (sin reservas todavia)
  actualizarResumen();
 
  // Cada boton de filtro se escucha por separado con addEventListener,
  // igual que se vio en la Unidad 3 con el boton "Agregar Tarea".
  document.getElementById('btnTodos').addEventListener('click', function () {
    filtrarCategoria('Todos');
  });
 
  document.getElementById('btnEntradas').addEventListener('click', function () {
    filtrarCategoria('Entrada');
  });
 
  document.getElementById('btnPlatosFuertes').addEventListener('click', function () {
    filtrarCategoria('Plato Fuerte');
  });
 
  document.getElementById('btnPostres').addEventListener('click', function () {
    filtrarCategoria('Postre');
  });
 
  // Se valida el formulario cada vez que el usuario escribe o cambia algo
  document.getElementById('form-reserva').addEventListener('input', function () {
    validarFormulario();
  });
 
});
 
 
document.getElementById('form-reserva').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recarga de página
 
  if (validarFormulario()) {
    agregarReserva();
  }
});

