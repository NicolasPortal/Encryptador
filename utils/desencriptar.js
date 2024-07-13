import { reglas } from "../configs/reglasDesencriptado.js"
import { validarTexto } from "./validarTexto.js";
import { mostrarSalida, ocultarSalida } from "./alternarSalida.js";

function desencriptar(texto) {
  ocultarSalida()
  const isValid = validarTexto(texto)
  /// Validar antes de encriptar
  if (texto === "") {
    alert("Por favor ingrese un texto para encriptar");
    return;
  }

  if (!isValid) {
    alert("El texto debe contener solo letras minúsculas y espacios sin acentos ni caracteres especiales.");
    return;
  }
  mostrarSalida();
  // Crear una expresión regular que coincida con cualquier clave de encriptación
  const regex = new RegExp(Object.keys(reglas).join('|'), 'g');

  // Función de desencriptación
  return texto.replace(regex, (match) => reglas[match]);
}

export { desencriptar }