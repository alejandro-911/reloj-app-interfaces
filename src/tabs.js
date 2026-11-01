// Todos los enlaces de la barra y todas las secciones de la página 
const enlaces = document.querySelectorAll("nav a");
const secciones = document.querySelectorAll("main > section");

function mostrarPestana() {
    // Se mira la URL. Si no hay nada después de la #, se usa el reloj.
    let actual = location.hash;
    if (actual == "") {
        actual = "#clock";
    }

    // Se recorren los enlaces: el que conicide con la URL se marca como activo.
    enlaces.forEach((enlace) => {
        const esLaActiva = enlace.getAttribute("href") === actual;
        enlace.classList.toggle("active", esLaActiva);
    });

    // Se recorren las secciones (su id es "clock", "alarm", ...)
    secciones.forEach((seccion) => {
        const esLaActiva = "#" + seccion.id === actual;
        seccion.classList.toggle("active", esLaActiva);
    });
}

// Cuando el usuario cambia de pestaña, la URL cambia y se lanza "hashchange"
window.addEventListener("hashchange", mostrarPestana);

// Se debe ejecutar una vez almenos 
mostrarPestana();
