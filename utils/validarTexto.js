function validarTexto() {
  const input = document.getElementById("text-area");
  const textoAclaracion = document.getElementById("parrafo-botones")
  const texto = input.value;
  const esValido = /^[a-z\s]*$/.test(texto); // Permitir letras minúsculas y espacios

  if (esValido) {
    input.classList.remove("error");
    textoAclaracion.classList.remove("error");
    textoAclaracion.classList.remove("fondo-rojo");
  } else {
    input.classList.add("error");
    textoAclaracion.classList.add("error");
    textoAclaracion.classList.add("fondo-rojo");
  }
}