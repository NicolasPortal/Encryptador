import { reglas } from "../configs/reglasEncriptado.js"
import { validarTexto } from "./validarTexto.js";
import { ocultarSalida, mostrarSalida } from "./alternarSalida.js";

// Función que encripta el texto
function encriptar(texto) {
  ocultarSalida();
  const isValid = validarTexto(texto)
  // Validar antes de encriptar
  if (texto === "") {
    alert("Por favor ingrese un texto para encriptar");
    return;

  }
  if (!isValid) {
    alert("El texto debe contener solo letras minúsculas y espacios sin acentos ni caracteres especiales.");
    return;
  }

  mostrarSalida()
  return texto.split('').map(letra => reglas[letra] || letra).join('');
}

export { encriptar }