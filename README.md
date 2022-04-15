# Validate Id Mongo
Esta es una libreria que nos permite la validación de los ID's de mongoDB, verificando si tiene el formato BSON, la cual también nos ayuda a darle al usuario un mensaje de error personalizado en caso de querer hacelo.

## Instalación
````
$ npm i validate-id-mongo --save
````


## Ejemplo de uso

````
const { validateIdMongo } = require('validate-id-mongo');

await validateIdMongo(id, mensaje);
````
 
**Requerido**
El id, es basicamente el id de mongo que recibimos por parte de nuestro cliente/usuario.


**Opcional**
El mensaje nos sirve para personalizar el mensaje de error y tener mas control de que se le va a mostrar al usuario.

</br>


