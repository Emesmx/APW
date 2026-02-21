// Referencias a elementos
const caja = document.getElementById("caja");
const textoPrincipal = document.getElementById("texto");

// 1. Cambiar texto del párrafo principal
function cambiarTexto() {
  textoPrincipal.textContent = "El texto ha sido cambiado";
}

// 2. Cambiar color de fondo de la caja
function cambiarColor() {
  const colores = ["lightblue", "lightgreen", "lightpink", "khaki", "lavender"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  caja.style.backgroundColor = colorAleatorio;
}

// 3. Añadir un nuevo párrafo dentro de la caja
function crearParrafo() {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Nuevo párrafo añadido";
  caja.appendChild(nuevoParrafo);
}

// 4. Borrar el último párrafo añadido
function borrarParrafo() {
  const parrafos = caja.getElementsByTagName("p");

  // Evita borrar el párrafo principal
  if (parrafos.length > 1) {
    caja.removeChild(parrafos[parrafos.length - 1]);
  }
}

    /// Cambiar titulo opcional
function cambiarTitulo() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Título cambiado";
}