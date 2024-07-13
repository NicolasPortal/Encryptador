'use strict'
import { encriptar } from "./utils/encriptar.js";
import { desencriptar } from "./utils/desencriptar.js";
import { validar } from "./utils/validarInput.js";
import { copiarTexto } from "./utils/copiarTexto.js";

const botonEncriptado = document.getElementById("btn-encriptado")
const botonDesencriptado = document.getElementById("btn-desencriptado")
const botonCopiar = document.getElementById("btn-copiar")
const input = document.getElementById("text-area");
const outputText = document.getElementById("output-text")

function encriptarTexto() {
  const textoOriginal = input.value;
  const textoEncriptado = encriptar(textoOriginal);
  if (textoEncriptado) {
    outputText.innerText = textoEncriptado;
  }
}

function desencriptarTexto() {
  const textoEncriptado = input.value;
  const textoDesencriptado = desencriptar(textoEncriptado);
  if (textoDesencriptado) {
    outputText.innerText = textoDesencriptado;
  }
}

function validarInput() { validar(input) }

botonEncriptado.addEventListener("click", encriptarTexto)
botonDesencriptado.addEventListener("click", desencriptarTexto)
botonCopiar.addEventListener("click", copiarTexto)
input.addEventListener("input", validarInput)