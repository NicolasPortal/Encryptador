let outputArea = document.getElementById("output-section")
let outputAreaVacia = document.getElementById("output-section-vacia")

function ocultarSalida() {
  outputArea.classList.add("ocultar");
  outputAreaVacia.classList.remove("ocultar");
};

function mostrarSalida() {
  outputArea.classList.remove("ocultar");
  outputAreaVacia.classList.add("ocultar");
};

export {
  ocultarSalida,
  mostrarSalida
}