function validarTexto(texto) {
  return /^[a-z\s]*$/.test(texto); // Permitir letras minúsculas y espacios
}

export { validarTexto }