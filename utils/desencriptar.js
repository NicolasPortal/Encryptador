function desencriptar(texto) {
  // Reglas de desencriptación (en orden de longitud decreciente para evitar conflictos)
  const reglas = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
  };

  // Crear una expresión regular que coincida con cualquier clave de encriptación
  const regex = new RegExp(Object.keys(reglas).join('|'), 'g');

  // Función de desencriptación
  return texto.replace(regex, (match) => reglas[match]);
}