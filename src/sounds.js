// Se busca la etiqueta <audio> del HTML por su id
const sonidoAlarma = document.querySelector("#alarm-sound");
const sonidoTemporizador = document.querySelector("#timer-sound");

// cuando una alarma suena, Alarm.js lanza el evento "ring"
function sonarAlarma() {
    sonidoAlarma.play();
}
// Cuando el temporizador llega a 0, Timer.js lanza el evento "stop"
function sonarTemporizador() {
    sonidoTemporizador.play();
}

document.addEventListener("ring", sonarAlarma);
// sonarlarma sin paréntesis, si llevara (), se estaria ejecutando en ese momento
// y le pasaría a addEventListener el resultado, no la función.
// sin (), le digo: "ejecútala tú más tarde, cuando ocurra el evento"


// Sin paréntesis: le decimos "ejecútala más tarde, cuando ocurra el evento"
document.addEventListener("stop", sonarTemporizador);

// Para el sonido de la alarma y lo deja listo para la próxima vez 
function pararAlarma() {
    sonidoAlarma.pause();
    sonidoAlarma.currentTime = 0;
}
// Si el usuario pulsa "desactivar" (pause) o "eliminar" 
// en una alarma, se para el sonido
document.addEventListener("click", (evento) => {
    const clases = evento.target.classList;
    const dentroDeAalarma = evento.target.closest("x-alarm"); // closest("x-alarm") sube por los padres del elemento pulsado y devuelve x-alarm si está dentro de uno, o null si no 
    if( dentroDeAalarma && (clases.contains("pause") || clases.contains("delete")) ) { // dentroDeAlarma es un elemento (objeto) que cuenta como truthy (verdadero) o falsy (null)
        pararAlarma();
    }
});
