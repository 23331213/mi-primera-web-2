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
const formulario = document.getElementById("formContacto");
const resultado = document.getElementById("resultadoForm");
formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
 
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensajeTexto = document.getElementById("mensajeUsuario").value;

  if (nombre === "" || correo === "") {
    resultado.textContent = "⚠️ Por favor completa al menos tu nombre y correo";
    resultado.style.color = "red";
  } else {
    resultado.textContent = "¡Gracias " + nombre + "! Recibimos tu mensaje en " + correo;
    resultado.style.color = "green";
  }
});
const habilidades = ["HTML", "CSS", "JavaScript", "Git y GitHub", "Validación de formularios"];
const listaHabilidades = document.getElementById("listaHabilidades");

function mostrarHabilidades() {
  for (let i = 0; i < habilidades.length; i++) {
    const item = document.createElement("li");
    item.textContent = habilidades[i];
    listaHabilidades.appendChild(item);
  }
}

mostrarHabilidades();
const inputHabilidad = document.getElementById("nuevaHabilidad");
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function() {
  const nuevaHabilidad = inputHabilidad.value;

  if (nuevaHabilidad === "") {
    return;
  }

  habilidades.push(nuevaHabilidad);

  const item = document.createElement("li");
  item.textContent = nuevaHabilidad;
  listaHabilidades.appendChild(item);

  inputHabilidad.value = "";
});