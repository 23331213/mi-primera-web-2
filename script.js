const boton = document.getElementById("btnSaludo");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  mensaje.textContent = "¡Hola Matias! Vas muy bien aprendiendo 🚀";
});

let clics = 0;
const btnContador = document.getElementById("btnContador");
const textoContador = document.getElementById("contador");

btnContador.addEventListener("click", function() {
  clics = clics + 1;

  if (clics < 5) {
    textoContador.textContent = "Has hecho clic " + clics + " veces";
  } else if (clics < 20) {
    textoContador.textContent = "¡Ya vas por " + clics + "! Sigue así";
  } else if (clics < 30) {
    textoContador.textContent = "¡" + clics + " clics! Ya eres un experto haciendo clic 😂";
  } else if (clics < 50) {
    textoContador.textContent = "¡" + clics + " clics! Eres un maestro del click 🤯";
  } else {
    textoContador.textContent = "¡" + clics + " clics! No hay quien te pare 🔥";
  }
});