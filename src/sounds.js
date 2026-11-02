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