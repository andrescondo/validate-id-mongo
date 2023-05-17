# Validate Id Mongo

**Indice**
- [Spanish](#es)
- [English](#en)



## English <a name="en"></a>
## Description
This is a library that allows us to validate the mongoDB ID's, checking if they have the BSON format, which also helps us to give the user a custom error message if they want to do so.


## Installation
````
$ npm i validate-id-mongo --save
````


## Case use

````
const { validateIdMongo } = require('validate-id-mongo');

await validateIdMongo(id, message);
````
 
**Required**
The id is basically the mongo id that we receive from our client/user.


**Optional**
The message helps us to customize the error message and have more control over what is going to be shown to the user.

</br>
</hr>



## Spanish<a name="es"></a>
## Descripción
Esta es una libreria que nos permite la validación de los ID's de mongoDB, verificando si tiene el formato BSON, la cual también nos ayuda a darle al usuario un mensaje de error personalizado en caso de querer hacerlo.


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


