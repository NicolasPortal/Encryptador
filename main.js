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

function encriptarTexto() {
  const input = document.getElementById("text-area");
  const textoOriginal = input.value;

  // Validar antes de encriptar
  if (textoOriginal === "") {
    alert("Por favor ingrese un texto para encriptar");
    ocultarSalida()
  } else {
    if (!/^[a-z\s]+$/.test(textoOriginal)) {
      alert("El texto debe contener solo letras minúsculas y espacios sin acentos ni caracteres especiales.");
      ocultarSalida();
      return;
    }
  }
  const textoEncriptado = encriptar(textoOriginal);
  mostrarSalida();
  document.getElementById("output-text").innerText = textoEncriptado;
  console.log(textoEncriptado)
}

function desencriptarTexto() {
  const input = document.getElementById("text-area");
  const textoEncriptado = input.value;

  /// Validar antes de encriptar
  if (textoEncriptado === "") {
    alert("Por favor ingrese un texto para encriptar");
    ocultarSalida()
  } else {
    if (!/^[a-z\s]+$/.test(textoEncriptado)) {
      alert("El texto debe contener solo letras minúsculas y espacios sin acentos ni caracteres especiales.");
      ocultarSalida()
      return;
    }
  }

  const textoDesencriptado = desencriptar(textoEncriptado);
  mostrarSalida();
  document.getElementById("output-text").innerText = textoDesencriptado;
  // console.log(textoDesencriptado)
}
