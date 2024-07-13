# Proyecto de Encriptación y Desencriptación de Texto

Este proyecto proporciona una herramienta simple para encriptar y desencriptar texto utilizando reglas específicas para cada letra. Las reglas de encriptación utilizadas son las siguientes:

- La letra "e" se convierte en "enter".
- La letra "i" se convierte en "imes".
- La letra "a" se convierte en "ai".
- La letra "o" se convierte en "ober".
- La letra "u" se convierte en "ufat".

## Requisitos

- El programa funciona únicamente con letras minúsculas del alfabeto inglés (a-z).
- No se permiten letras con acentos ni caracteres especiales en el texto de entrada.
- Debe ser posible convertir una palabra en su versión encriptada y viceversa para su versión original.

## Ejemplos de Uso

### Encriptación

Para encriptar una palabra, se reemplaza cada letra según las reglas establecidas:

Ejemplo:
Entrada: "gato"
Salida: "gaitober"

### Desencriptación

Para desencriptar una palabra, se aplican las reglas en reversa:

Ejemplo:
Entrada: "gaitober"
Salida: "gato"