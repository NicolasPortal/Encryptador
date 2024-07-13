import { validarTexto } from "./validarTexto.js";

const textoAclaracion = document.getElementById("parrafo-botones")

function validar(input) {
  const texto = input.value;
  const isValid = validarTexto(texto);

  if (isValid) {
    input.classList.remove("error");
    textoAclaracion.classList.remove("error");
    textoAclaracion.classList.remove("fondo-rojo");
  } else {
    input.classList.add("error");
    textoAclaracion.classList.add("error");
    textoAclaracion.classList.add("fondo-rojo");
  }
}

export { validar }