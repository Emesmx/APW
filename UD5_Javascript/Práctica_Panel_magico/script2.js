// 1. Cambiar texto del párrafo principal
function cambiarTexto() {
  var parrafo = document.getElementById("texto");
  parrafo.textContent = "Texto Cambiado";

}

// 2. Cambiar color de fondo de la caja
function cambiarColor() {
    var caja = document.getElementById("caja");
    caja.style.backgroundColor= "yellow";

}

// 3. Añadir un nuevo párrafo dentro de la caja
function crearParrafo() {
  var caja = document.getElementById("caja");

  var nuevoparrafo = document.createElement("p");
  nuevoparrafo.textContent = "nuevo párrafo";

}

// 4. Borrar el último párrafo añadido
function borrarParrafo() {
    var caja = document.getElementById("caja");

    if (caja.children.length > 1) {
        caja.removeChild(caja.lastChild);
  }


    /// Cambiar titulo opcional
function cambiarTitulo() {
  var titulo = document.getElementById("titulo");
  titulo.textContent = "Título cambiado";
  titulo.style.color = "red"
}