  // Reglas de encriptación
  const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
// Función que encripta el texto
function encriptar(texto) {
  return texto.split('').map(letra => reglas[letra] || letra).join('');
}