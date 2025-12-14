var usuario = prompt("Elige un usuario");
var pass = prompt("Hola " + usuario + ", introduce una contraseña");

if (usuario == "admin" && pass == "1234") {
    alert("Acceso concedido");
} else if (usuario != "admin") {
    alert("El usuario es incorrecto");
} else {
    let i = 3;
    do {
        alert("Te has equivocado. Tienes " + i + " oportunidades más.");
        i--;
        pass = prompt("Hola " + usuario + ", introduce la contraseña");
        if (pass == "1234") {
            alert("Acceso concedido");
            break;
        }
    } while (i != 0);
    if (i == 0) {
        alert("El usuario queda bloqueado. Contacte con el administrador del sitio.");
    }
}