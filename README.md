# Validate Id Mongo

## APlicacion

````
const { validateIdMongo } = require('validate-id-mongo');

await validateIdMongo(id-mongo, mensaje);
````

El id-mongo es un valor requerido para la valdiacion.

El mensaje es opcional, pero sirve para personalizar el mensaje de error y tener mas control de que se le va a mostrar al usuario.

</br>

## Nota
Normalmente cuando realizamos una consulta a mongo debe donde este involucrado el Id de cualquiera de los documentos, mongo no puede decirno el id ha sido incorrecto, debido a eso esta funcion se encargara de validar si lo que nos llega es realmente un id valido de mongoDB


