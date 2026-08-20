const perfil = {
  nombre: "Matias",
  pais: "Chile",
  meta: "Crear páginas web profesionales"
};

document.getElementById("nombrePerfil").textContent = "Hola, soy " + perfil.nombre;
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
const mensajesRecibidos = [];

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const texto = document.getElementById("mensajeUsuario").value;

  if (nombre === "" || correo === "") {
    resultado.textContent = "⚠️ Por favor completa al menos tu nombre y correo";
    resultado.style.color = "red";
    return;
  }

  const nuevoMensaje = {
    nombre: nombre,
    correo: correo,
    texto: texto
  };

  mensajesRecibidos.push(nuevoMensaje);

  resultado.textContent = "¡Gracias " + nombre + "! Recibimos tu mensaje en " + correo;
  resultado.style.color = "green";

  mostrarMensajes();
  formulario.reset();
});

function mostrarMensajes() {
  const contenedor = document.getElementById("bandejaMensajes");
  contenedor.innerHTML = "";

  for (let i = 0; i < mensajesRecibidos.length; i++) {
    const m = mensajesRecibidos[i];
    const div = document.createElement("div");
    div.textContent = m.nombre + " (" + m.correo + "): " + m.texto;
    contenedor.appendChild(div);
  }
}
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
const proyectos = [
  { titulo: "Mi primera web", descripcion: "Página de presentación con HTML, CSS y JS" },
  { titulo: "Contador interactivo", descripcion: "Botón que cuenta clics con mensajes dinámicos" }
];

const listaProyectos = document.getElementById("listaProyectos");

for (let i = 0; i < proyectos.length; i++) {
  const proyectoActual = proyectos[i];

  const div = document.createElement("div");
  div.innerHTML = "<strong>" + proyectoActual.titulo + "</strong><br>" + proyectoActual.descripcion;

  listaProyectos.appendChild(div);
  listaProyectos.appendChild(document.createElement("br"));
}