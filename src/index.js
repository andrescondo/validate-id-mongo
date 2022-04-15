const ObjectId = require('mongoose').Types.ObjectId;

module.exports.validateIdMongo = async (id, message) => {
  let err = new Error();
  err.code = 400;
  
  if(!id){
    err.message = "Debe añadir un id";
    throw err;
  }


  if(!ObjectId.isValid(id)){
    err.message = message ? message : "El id es erroneo";
    throw err;
  }

  return;
}