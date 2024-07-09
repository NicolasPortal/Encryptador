function copiarTexto() {
  var texto = document.getElementById('output-text');
  var textoSeleccionado = window.getSelection();
  var rango = document.createRange();
  rango.selectNodeContents(texto);
  textoSeleccionado.removeAllRanges();
  textoSeleccionado.addRange(rango);

  // Intentar copiar el contenido seleccionado al portapapeles
  try {
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al intentar copiar: ', err);
    alert('No se pudo copiar el texto. Por favor, seleccione el texto y use Ctrl+C (Cmd+C en Mac) para copiar.');
  }
  // Deseleccionar el texto después de copiar
  textoSeleccionado.removeAllRanges();
}